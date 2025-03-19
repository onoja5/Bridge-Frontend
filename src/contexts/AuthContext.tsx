import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import type { AuthUserDataDTO } from '../types/auth';

interface AuthContextType {
  userData: AuthUserDataDTO | null;
  setUserData: Dispatch<SetStateAction<AuthUserDataDTO>>;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const isLoggedIn =
      typeof window !== 'undefined'
        ? localStorage.getItem('isLoggedIn')
        : false;
    return isLoggedIn ? JSON.parse(isLoggedIn) : false;
  });

  const [userData, setUserData] = useState<AuthUserDataDTO>(() => {
    // Load user data from localStorage if available
    const storedUserData =
      typeof window !== 'undefined' ? localStorage.getItem('userData') : null;
    return storedUserData
      ? JSON.parse(storedUserData)
      : ({} as AuthUserDataDTO);
  });

  useEffect(() => {
    // Save user data to localStorage whenever it changes
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', JSON.stringify(isAuthenticated));
  }, [userData, isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return context;
};
