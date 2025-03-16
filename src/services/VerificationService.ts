import baseAPI from './api';

export const verifyUserCode = (userId: string, code: string) =>
  baseAPI.post('/users/verification/verify-signup-or-login-code', {
    userId,
    uniqueVerificationCode: code,
  });

export const resendOTP = (userId: string) =>
  baseAPI.get(`/users/resend-otp-code/${userId}`);
