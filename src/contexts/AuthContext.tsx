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
  userData: { role?: string; [key: string]: any };
  setUserData: Dispatch<SetStateAction<any>>;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      const isLoggedIn =
        typeof window !== 'undefined'
          ? localStorage.getItem('isLoggedIn')
          : false;
      return isLoggedIn ? JSON.parse(isLoggedIn) : false;
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      return false;
    }
  });

  const [userData, setUserData] = useState<AuthUserDataDTO | null>(() => {
    try {
      const storedUserData =
        typeof window !== 'undefined' ? localStorage.getItem('userData') : null;
      return storedUserData ? JSON.parse(storedUserData) : null;
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      return null;
    }
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
