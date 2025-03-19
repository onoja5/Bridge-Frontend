import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { auth, googleProvider } from '../firebase/firebase';
import { signInWithPopup } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import type { CreateAccountDto, LoginUserDTO, UserRole } from '../types/auth';
import AuthSidebar from '@/pages/auth/AuthSidebar';
import { useAuthContext } from '@/contexts/AuthContext';

interface AuthFormProps {
  mode: 'login' | 'signup';
  onToggleMode: () => void;
}

const ROLES: UserRole[] = ['STUDENT', 'EDUCATOR', 'EMPLOYER'];

const AuthForm = ({ mode, onToggleMode }: AuthFormProps) => {
  const navigate = useNavigate();
  const {} = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<{
    message: string;
    field?: string;
  } | null>(null);

  const [formData, setFormData] = useState<CreateAccountDto & LoginUserDTO>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'STUDENT',
  });

  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  const handleSocialLogin = async (provider: any) => {
    try {
      setLoading(true);
      await signInWithPopup(auth, provider);
      navigate(import.meta.env.VITE_DEFAULT_REDIRECT || '/dashboard');
    } catch (err: any) {
      setError({
        message: err.message || 'Social login failed',
        field: 'social',
      });
    } finally {
      setLoading(false);
    }
  };

  const validateField = (name: string, value: string): boolean => {
    const errors: Record<string, string> = {};

    switch (name) {
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errors.email = 'Please enter a valid email address';
        }
        break;
      case 'password':
        if (value.length < 8) {
          errors.password = 'Password must be at least 8 characters long';
        }
        break;
    }

    setValidationErrors((prev) => ({ ...prev, ...errors }));
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (typeof value === 'string') {
      validateField(name, value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // try {
    //   if (mode === 'signup') {
    //     await signup(formData);
    //     navigate('/verify-email');
    //   } else {
    //     await login({
    //       email: formData.email,
    //       password: formData.password,
    //     });
    //     navigate(import.meta.env.VITE_DEFAULT_REDIRECT || '/dashboard');
    //   }
    // } catch (err: any) {
    //   setError({
    //     message: err.response?.data?.message || 'An error occurred',
    //     field: err.response?.data?.field,
    //   });
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className='min-h-screen flex'>
      {/* Auth Form Column */}
      <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto w-full max-w-md'>
          <h2 className='mt-6 text-center text-3xl font-bold text-gray-900'>
            {mode === 'login' ? 'Welcome back' : 'Create your account'}
          </h2>

          {error && (
            <div className='mt-4 p-3 bg-red-50 text-red-700 rounded-md text-sm'>
              {error.message}
              {error.field && ` (${error.field})`}
            </div>
          )}

          <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
            {mode === 'signup' && (
              <>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                  <div>
                    <label
                      htmlFor='firstName'
                      className='block text-sm font-medium text-gray-700'
                    >
                      First Name
                    </label>
                    <div className='mt-1 relative'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center'>
                        <User className='h-5 w-5 text-gray-400' />
                      </div>
                      <input
                        id='firstName'
                        name='firstName'
                        type='text'
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className='appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='lastName'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Last Name
                    </label>
                    <div className='mt-1 relative'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center'>
                        <User className='h-5 w-5 text-gray-400' />
                      </div>
                      <input
                        id='lastName'
                        name='lastName'
                        type='text'
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className='appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='role'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Role
                  </label>
                  <select
                    id='role'
                    name='role'
                    value={formData.role}
                    onChange={handleChange}
                    className='mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md'
                  >
                    {ROLES.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email address
              </label>
              <div className='mt-1 relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center'>
                  <Mail className='h-5 w-5 text-gray-400' />
                </div>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className='appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                />
              </div>
              {validationErrors.email && (
                <p className='mt-1 text-sm text-red-600'>
                  {validationErrors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                Password
              </label>
              <div className='mt-1 relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center'>
                  <Lock className='h-5 w-5 text-gray-400' />
                </div>
                <input
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className='appearance-none block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute inset-y-0 right-0 pr-3 flex items-center'
                >
                  {showPassword ? (
                    <EyeOff className='h-5 w-5 text-gray-400' />
                  ) : (
                    <Eye className='h-5 w-5 text-gray-400' />
                  )}
                </button>
              </div>
              {validationErrors.password && (
                <p className='mt-1 text-sm text-red-600'>
                  {validationErrors.password}
                </p>
              )}
            </div>

            <div>
              <button
                type='submit'
                disabled={loading}
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50'
              >
                {loading
                  ? 'Please wait...'
                  : mode === 'login'
                  ? 'Sign in'
                  : 'Create account'}
              </button>
            </div>
          </form>

          <div className='mt-8'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-300'></div>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-2 bg-white text-gray-500'>
                  Or {mode === 'login' ? 'log in' : 'sign up'} with
                </span>
              </div>
            </div>

            <div className='mt-6 grid grid-cols-1 gap-3'>
              <button
                type='button'
                onClick={() => handleSocialLogin(googleProvider)}
                disabled={loading}
                className='w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50'
              >
                <FcGoogle className='h-5 w-5' />
                <span className='ml-2'>Google</span>
              </button>
            </div>
          </div>

          <p className='mt-8 text-center text-sm text-gray-600'>
            {mode === 'login'
              ? "Don't have an account? "
              : 'Already have an account? '}
            <button
              onClick={onToggleMode}
              className='font-medium text-blue-600 hover:text-blue-500'
            >
              {mode === 'login' ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>

      {/* Promotional Column with Background Image */}
      <AuthSidebar />
    </div>
  );
};

export default AuthForm;
