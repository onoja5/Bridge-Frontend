// src/pages/VerifyEmail.tsx
import { useLocation, useNavigate } from 'react-router-dom';
import { verifyUserCode, resendOTP } from '../services/VerificationService';
import { useState } from 'react';

export default function VerifyEmail() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  // Verify code handler
  const handleVerify = async () => {
    try {
      await verifyUserCode(state.userId, code);
      navigate('/profile'); // Redirect to profile after verification
    } catch (err) {
      setError('Invalid verification code');
    }
  };

  // Resend code handler
  const handleResend = async () => {
    await resendOTP(state.userId);
  };

  return (
    <div className='verification-container'>
      <h2>Verify Your Email</h2>
      <input
        type='text'
        placeholder='Enter 6-digit code'
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleVerify}>Verify</button>
      <button onClick={handleResend}>Resend Code</button>
      {error && <div className='error-message'>{error}</div>}
    </div>
  );
}
