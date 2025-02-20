export type UserRole = 'EMPLOYER' | 'EDUCATOR' | 'STUDENT';

export interface CreateAccountDto {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: UserRole;
  date_of_birth: string; // ISO format
  password: string;
}

export interface LoginUserDTO {
  email: string;
  password: string;
}

export interface ThirdPartyAuthDTO {
  thirdPartyUserId: string;
  provider: 'GOOGLE' | 'MICROSOFT';
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
}

export interface AuthUserDataDTO {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: UserRole;
  date_of_birth: string;
  isEmailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  code: number;
  field?: string;
  data?: T;
}

export interface AuthResponse {
  token: string;
  user: AuthUserDataDTO;
  isNewUser?: boolean;
}