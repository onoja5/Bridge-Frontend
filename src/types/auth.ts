export type UserRole = 'EMPLOYER' | 'EDUCATOR' | 'STUDENT';

export interface ResetPassword {
  newPassword: string;
  uniqueVerificationCode: string;
}
export interface VerifyOTPBodyData {
  userId: string;
  uniqueVerificationCode: string;
}
export interface CreateAccountDto {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  role: UserRole;
  date_of_birth?: string; // ISO format
  password: string;
}

export interface LoginUserDTO {
  email: string;
  password: string;
}

export interface ThirdPartyAuthDTO {
  thirdPartyUserId: string;
  provider: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  profileImageUrl: string;
}

export interface AuthUserDataDTO {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  profileImageUrl?: string;
  role?: UserRole;
  date_of_birth?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  code: number;
  field?: string;
  data?: T;
}
export interface ApiRsp {
  success: boolean;
  message: string;
  code: number;
}

export interface AuthResponse {
  token: string;
  user: AuthUserDataDTO;
  isNewUser?: boolean;
}

export type SignupRspData = ApiRsp & {
  data: AuthResponse;
};
