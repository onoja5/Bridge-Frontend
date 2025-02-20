import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';

export default function Auth() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  return (
    <AuthForm
      mode={mode}
      onToggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
    />
  );
}