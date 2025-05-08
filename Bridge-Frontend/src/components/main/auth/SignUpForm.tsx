import * as API from '@/services/auth';
import Button from '@/components/ui/Button';
import { ROLES } from '@/utils/constants';
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';

import ErrorMessage from '@/components/ui/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/contexts/AuthContext';
import { useGlobalHooks } from '@/hooks/globalHooks';
import { useState } from 'react';
import { handleError, handleSuccess } from '@/utils/helper';

// Ensure UserRole is properly imported
import type { AuthUserDataDTO, UserRole } from '@/types/auth';

// Align AuthResponse with AuthUserDataDTO
interface AuthResponse {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    _id: string;
    profileImageUrl: string;
    role: UserRole;
    userId: string;
    isNewUser: boolean;
    isProfileDataSet: boolean;
    dateCreated: string;
    tokenInitializationDate: string;
    tokenExpiryDate: string;
    phoneNumber?: string;
    date_of_birth?: string;
    isEmailVerified?: boolean;
    skills?: string[];
    token: string;
  };
}

// Update role type in SignUpFormData
interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
}

const SignUpForm = () => {
  const navigate = useNavigate();
  const { setUserData } = useAuthContext();
  const { loading, setLoading } = useGlobalHooks();
  const [showPassword, setShowPassword] = useState(false);

  // Update role property to match UserRole type
  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'USER' as UserRole,
  });

  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  const validateField = (name: string, value: string): boolean => {
    const errors: Record<string, string> = {};

    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errors.email = 'Please enter a valid email address';
    }

    if (name === 'password' && value.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

    setValidationErrors((prev) => {
      const newErrors = { ...prev, ...errors };
      if (!errors[name]) delete newErrors[name]; // Remove error if valid
      return newErrors;
    });

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

    setLoading({ ['login']: true });
    console.log(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setLoading({ ['login']: false });
      return;
    }

    // Validate API response handling
    API.authService
      .signup(formData)
      .then((res: { data: AuthResponse }) => {
        const userData = res.data.user;
        setUserData(userData);

        handleSuccess('User created successfully', navigate, '/verify-email');
        setLoading({ ['login']: false });
      })
      .catch((err) => {
        setLoading({ ['login']: false });

        handleError(err?.response?.data?.message || 'An error occurred');
      });
  };
  return (
    <form onSubmit={handleSubmit} className='mx-auto w-full max-w-xl space-y-6'>
      <article className='grid grid-cols-1 gap-6 md:grid-cols-2'>
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
      </article>

      <article>
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
          <ErrorMessage message={validationErrors.email} />
        )}
      </article>

      <article>
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
        {validationErrors.password && formData?.password.length < 8 && (
          <ErrorMessage message={validationErrors.password} />
        )}
      </article>

      <article>
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
      </article>

      <Button
        className='pry-btn w-full'
        type='submit'
        disabled={Object.keys(validationErrors).length > 0}
        loading={loading['login']}
      >
        Create Account
      </Button>
    </form>
  );
};

export default SignUpForm;
