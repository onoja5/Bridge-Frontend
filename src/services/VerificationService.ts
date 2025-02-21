// src/services/VerificationService.ts
import api from './axiosInstance';

export const verifyUserCode = (userId: string, code: string) => 
  api.post('/users/verification/verify-signup-or-login-code', {
    userId,
    uniqueVerificationCode: code
  });

export const resendOTP = (userId: string) =>
  api.get(`/users/resend-otp-code/${userId}`);