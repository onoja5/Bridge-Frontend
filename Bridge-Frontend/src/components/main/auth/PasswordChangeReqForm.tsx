import Button from '@/components/ui/Button';
import { useAuthContext } from '@/contexts/AuthContext';
import { useGlobalHooks } from '@/hooks/globalHooks';
import * as API from '@/services/auth';
import { handleSuccess, handleError } from '@/utils/helper';
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PasswordChangeReqForm = () => {
  const navigate = useNavigate();

  const { setUserData } = useAuthContext();

  const { loading, setLoading } = useGlobalHooks();

  const [formData, setFormData] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading({ ['req']: true });
    API.authService
      .resetPasswordReq(formData)
      .then((res) => {
        console.log(res);
        setUserData((prev) => ({ ...prev, email: formData }));

        handleSuccess(
          res?.message || 'Successfully',
          navigate,
          '/change-password',
        );

        setLoading({ ['req']: false });
      })
      .catch((err) => {
        console.log(err);
        handleError(err?.response?.data?.message || 'An error occurred');
        setLoading({ ['req']: false });
      });
  };

  return (
    <form onSubmit={handleSubmit} className='mx-auto w-full max-w-md'>
      <article>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700'
        >
          Email address
        </label>
        <div className='mt-1 relative'>
          <input
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            required
            value={formData}
            onChange={(e) => setFormData(e.target.value)}
            className='appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
          />
        </div>
      </article>

      <article className='mt-10'>
        <Button
          className='pry-btn w-full'
          type='submit'
          loading={loading['req']}
        >
          Send Code
        </Button>
      </article>
      <article className='mt-2 text-center'>
        <p className='text-center text-sm text-gray-600'>
          Remember your Password?{' '}
          <Link to='/login' className='text-primary'>
            Login
          </Link>{' '}
        </p>
      </article>
    </form>
  );
};

export default PasswordChangeReqForm;
