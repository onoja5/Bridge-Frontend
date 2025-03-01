import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [mode] = useState<'login' | 'signup'>('login');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <AuthForm
        mode={mode}
        onToggleMode={() => navigate('/signup')}
      />
    </div>
  );
}