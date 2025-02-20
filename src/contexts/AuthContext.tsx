import React, { createContext, useContext, useState, useEffect } from 'react';
import type { AuthUserDataDTO, LoginUserDTO, CreateAccountDto, ApiResponse, AuthResponse } from '../types/auth';
import api from '../services/api';

interface AuthContextType {
  user: AuthUserDataDTO | null;
  setUser: (user: AuthUserDataDTO | null) => void;
  isAuthenticated: boolean;
  login: (credentials: LoginUserDTO) => Promise<void>;
  signup: (data: CreateAccountDto) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  isAuthenticated: false,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUserDataDTO | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user');
    
    if (token && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user data:', error);
        logout();
      }
    }
  }, []);

  const login = async (credentials: LoginUserDTO) => {
    const response = await api.post<ApiResponse<AuthResponse>>('/auth/Userlogin', credentials);
    if (response.data.success && response.data.data) {
      localStorage.setItem('authToken', response.data.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
      setUser(response.data.data.user);
    }
  };

  const signup = async (data: CreateAccountDto) => {
    const response = await api.post<ApiResponse<AuthResponse>>('/auth/users/UserSignup', {
      ...data,
      role: data.role.toUpperCase(),
    });
    if (response.data.success) {
      // Redirect to email verification page
      window.location.href = '/verify-email';
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);