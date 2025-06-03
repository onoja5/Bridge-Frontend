// AuthContext.tsx (assumed, please share if different)
import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthUserDataDTO } from '@/types/auth';

interface AuthContextType {
  userData: AuthUserDataDTO | null;
  setUserData: (data: Partial<AuthUserDataDTO>) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userData, setUserDataState] = useState<AuthUserDataDTO | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Persist and restore userData from localStorage
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    if (storedUserData) {
      setUserDataState(JSON.parse(storedUserData));
    }
    if (storedAuthStatus) {
      setIsAuthenticated(JSON.parse(storedAuthStatus));
    }
  }, []);

  const setUserData = (data: Partial<AuthUserDataDTO>) => {
    setUserDataState((prev) => {
      const updatedData = { ...prev, ...data } as AuthUserDataDTO;
      localStorage.setItem('userData', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ userData, setUserData, isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};