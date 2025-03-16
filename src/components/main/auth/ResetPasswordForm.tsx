import Button from '@/components/ui/Button';
import ErrorMessage from '@/components/ui/ErrorMessage';
import { useGlobalHooks } from '@/hooks/globalHooks';
import * as API from '@/services/auth';
import { handleSuccess, handleError } from '@/utils/helper';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  uniqueVerificationCode: '',
  newPassword: '',
  confirmPassword: '',
};

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialValues);

  const { setLoading, loading, setErrors, errors } = useGlobalHooks();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading({ ['change-pass']: true });

    if (formData?.newPassword.length < 8) {
      setErrors({
        error: true,
        errMessage: 'Password must be at least 8 characters long',
      });
      setLoading({ ['change-pass']: false });

      return;
    }
    if (
      formData?.newPassword.length >= 8 &&
      formData?.newPassword !== formData?.confirmPassword
    ) {
      setLoading({ ['change-pass']: false });

      setErrors({ error: true, errMessage: 'Password does not match' });
      return;
    }

    API.authService
      .changePassword(formData)
      .then((res) => {
        console.log(res);

        handleSuccess(
          res?.message || 'Password changed successfully',
          navigate,
          '/change-password-success',
        );

        setLoading({ ['change-pass']: false });
      })
      .catch((err) => {
        console.log(err);
        handleError(err?.response?.data?.message || 'An error occurred');
        setLoading({ ['change-pass']: false });
      });
  };

  return (
    <form onSubmit={handleSubmit} className='mx-auto w-full max-w-md space-y-5'>
      <article>
        <label
          htmlFor='uniqueVerificationCode'
          className='block text-sm font-medium text-gray-700'
        >
          Verification code
        </label>
        <div className='mt-1 relative'>
          <input
            id='uniqueVerificationCode'
            name='uniqueVerificationCode'
            type='text'
            required
            value={formData.uniqueVerificationCode}
            onChange={handleChange}
            className='appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
          />
        </div>
      </article>
      <article>
        <label
          htmlFor='newPassword'
          className='block text-sm font-medium text-gray-700'
        >
          New Password
        </label>
        <div className='mt-1 relative'>
          <input
            id='newPassword'
            name='newPassword'
            type='text'
            required
            value={formData.newPassword}
            onChange={handleChange}
            className='appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
          />
        </div>
        {errors.error && errors.errMessage.includes('Password must be at') && (
          <ErrorMessage message={errors.errMessage} />
        )}
      </article>
      <article>
        <label
          htmlFor='confirmPassword'
          className='block text-sm font-medium text-gray-700'
        >
          Confirm Password
        </label>
        <div className='mt-1 relative'>
          <input
            id='confirmPassword'
            name='confirmPassword'
            type='text'
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className='appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
          />
        </div>
        {errors.error &&
          errors.errMessage.includes('Password does not match') && (
            <ErrorMessage message={errors.errMessage} />
          )}
      </article>
      <article className='mt-10'>
        <Button
          loading={loading['change-pass']}
          type='submit'
          className='pry-btn w-full'
        >
          Reset Password
        </Button>
      </article>
    </form>
  );
};

export default ResetPasswordForm;
