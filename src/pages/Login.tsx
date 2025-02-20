import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';

export default function Login() {
  const [mode] = useState<'login' | 'signup'>('login');

  return (
    <AuthForm
      mode={mode}
      onToggleMode={() => window.location.href = '/signup'}
    />
  );
}