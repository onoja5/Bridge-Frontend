import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';

export default function SignUp() {
  const [mode] = useState<'login' | 'signup'>('signup');

  return (
    <AuthForm
      mode={mode}
      onToggleMode={() => window.location.href = '/login'}
    />
  );
}