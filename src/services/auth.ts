import api from './api';
import type { CreateAccountDto, LoginUserDTO, ThirdPartyAuthDTO, AuthResponse, ApiResponse } from '../types/auth';

export const authService = {
  async signup(data: CreateAccountDto): Promise<ApiResponse<AuthResponse>> {
    const response = await api.post<ApiResponse<AuthResponse>>('/auth/users/UserSignup', data);
    return response.data;
  },

  async login(data: LoginUserDTO): Promise<ApiResponse<AuthResponse>> {
    const response = await api.post<ApiResponse<AuthResponse>>('/auth/Userlogin', data);
    if (response.data.success && response.data.data?.token) {
      localStorage.setItem('token', response.data.data.token);
    }
    return response.data;
  },

  async thirdPartyAuth(data: ThirdPartyAuthDTO): Promise<ApiResponse<AuthResponse>> {
    const response = await api.post<ApiResponse<AuthResponse>>('/auth/third-party-login-signup', data);
    if (response.data.success && response.data.data?.token) {
      localStorage.setItem('token', response.data.data.token);
    }
    return response.data;
  },

  async updateProfile(userId: string, data: Partial<CreateAccountDto>): Promise<ApiResponse> {
    const response = await api.patch<ApiResponse>(`/users/user/${userId}`, data);
    return response.data;
  },

  logout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
};