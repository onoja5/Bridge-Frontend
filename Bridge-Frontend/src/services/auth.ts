import type {
  CreateAccountDto,
  LoginUserDTO,
  ThirdPartyAuthDTO,
  AuthResponse,
  ApiResponse,
  SignupRspData,
  VerifyOTPBodyData,
  ApiRsp,
  ResetPassword,
} from '../types/auth';
import baseAPI from './api';

export const authService = {
  async signup(data: CreateAccountDto): Promise<SignupRspData> {
    const response = await baseAPI.post<SignupRspData>(
      '/auth/users/UserSignup',
      data,
    );
    return response.data;
  },

  async verifyOTP(data: VerifyOTPBodyData): Promise<ApiRsp> {
    const response = await baseAPI.post<ApiRsp>(
      '/users/verification/verify-signup-or-login-code',
      data,
    );
    return response.data;
  },

  async resendOTP(userId: string): Promise<ApiRsp> {
    const response = await baseAPI.get<ApiRsp>(
      `/users/resend-otp-code/${userId}`,
    );
    return response.data;
  },

  async login(data: LoginUserDTO): Promise<SignupRspData> {
    const response = await baseAPI.post<SignupRspData>('/auth/Userlogin', data);
    return response.data;
  },

  async thirdPartyAuth(
    data: ThirdPartyAuthDTO,
  ): Promise<ApiResponse<AuthResponse>> {
    const response = await baseAPI.post<ApiResponse<AuthResponse>>(
      '/auth/third-party-login-signup',
      data,
    );
    return response.data;
  },

  async updateProfile(
    userId: string,
    data: Partial<CreateAccountDto>,
  ): Promise<ApiResponse> {
    const response = await baseAPI.patch<ApiResponse>(
      `/users/user/${userId}`,
      data,
    );
    return response.data;
  },

  async resetPasswordReq(email: string): Promise<ApiRsp> {
    const response = await baseAPI.post<ApiRsp>(
      `/users/verification/initiate-forgot-password-flow/${email}`,
    );
    return response.data;
  },

  async changePassword(formData: ResetPassword): Promise<ApiRsp> {
    const response = await baseAPI.post<ApiRsp>(
      `/users/verification/change-password`,
      formData,
    );
    return response.data;
  },

  logout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  },
};
