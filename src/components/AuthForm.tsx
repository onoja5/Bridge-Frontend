import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider, facebookProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

interface AuthFormProps {
  mode: 'login' | 'signup';
  onToggleMode: () => void;
}

export default function AuthForm({ mode, onToggleMode }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSocialLogin = async (provider: any) => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your existing email/password logic here
  };

  return (
    <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
      <div>
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          {mode === 'login' ? 'Welcome Back' : 'Create Account'}
        </h2>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="mt-8 space-y-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            {mode === 'login' ? 'Log in' : 'Sign up'}
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleSocialLogin(googleProvider)}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <FcGoogle className="h-5 w-5" />
            Continue with Google
          </button>

          <button
            onClick={() => handleSocialLogin(facebookProvider)}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <FaFacebook className="h-5 w-5 text-blue-600" />
            Continue with Facebook
          </button>
        </div>

        <p className="mt-2 text-center text-sm text-gray-600">
          {mode === 'login' ? (
            <>
              Don't have an account?{' '}
              <button
                type="button"
                onClick={onToggleMode}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                type="button"
                onClick={onToggleMode}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Log in
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}