import * as API from '@/services/auth';
import { useGlobalHooks } from '@/hooks/globalHooks';
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import Button from '../../ui/Button';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/contexts/AuthContext';
import { handleError, handleSuccess } from '@/utils/helper';
import CountDownTimer from '../../ui/CountDownTimer';

const numInput = [
  { id: '1', name: 'num1' },
  { id: '2', name: 'num2' },
  { id: '3', name: 'num3' },
  { id: '4', name: 'num4' },
];

const VerifyEmailForm = ({ routePath }: { routePath?: string }) => {
  const naviagte = useNavigate();
  const { userData, setUserData } = useAuthContext();

  const { loading, setLoading, errors } = useGlobalHooks();
  const [timeLeft, setTimeLeft] = useState(60);

  const [verifyCode, setVerifyCode] = useState({
    num1: '',
    num2: '',
    num3: '',
    num4: '',
  });

  const inputRefs = useRef([
    React.createRef<HTMLInputElement>(),
    React.createRef<HTMLInputElement>(),
    React.createRef<HTMLInputElement>(),
    React.createRef<HTMLInputElement>(),
  ]);

  const handleChange = (e: FormEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target as HTMLInputElement;
    setVerifyCode({ ...verifyCode, [`num${index + 1}`]: value });

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].current?.focus();
    }
  };

  const handleReSendOTP = async () => {
    setLoading(() => ({ ['resend']: true }));

    try {
      const rsp = await API.authService.resendOTP(String(userData?._id));

      if (!rsp.success) {
        handleError(
          rsp?.message || 'We encountered an error, please try again.',
        );
        return;
      } else {
        handleSuccess(rsp?.message || 'Email verification successfull');
      }

      setLoading(() => ({ ['resend']: false }));
    } catch (error) {
      console.log(error);
      setLoading(() => ({ ['resend']: false }));
    }
  };

  // const clearInput = () => {
  //   setVerifyCode({
  //     num1: '',
  //     num2: '',
  //     num3: '',
  //     num4: '',
  //   });
  // };

  // This work best instead of duplicating this whole comp
  // if it's from change password, then route to the path, else, bring out the modal

  const handleVerifyEmail = async () => {
    setLoading(() => ({ ['verify']: true }));

    if (Object.keys(verifyCode).some((code) => code === '')) {
      handleError('Enter the code sent to your email');

      return;
    }

    const verificationCode = Object.values(verifyCode).join('');

    if (routePath) {
      setUserData((prev) => ({
        ...prev,
        code: verificationCode,
      }));
    }

    try {
      const rsp = await API.authService.verifyOTP({
        userId: String(userData?._id),
        uniqueVerificationCode: verificationCode,
      });

      if (!rsp.success) {
        handleError(rsp?.message || 'Unable to verify email, please try again');

        setLoading(() => ({ ['verify']: false }));
      } else {
        handleSuccess(
          rsp?.message || 'Email verification succesfull',
          naviagte,
          '/login',
        );
      }
    } catch (error) {
      console.log(error);
      setLoading(() => ({ ['verify']: false }));
    } finally {
      setLoading(() => ({ ['verify']: false }));
    }
  };

  // When delete is pressed it should delete backward and jump focus to current input
  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    // Detect if backspace or delete key is clicked, if yes and the current input value is empty, jump backward to next one if available
    if (e.key === 'Backspace' && !e.currentTarget?.value && index > 0) {
      inputRefs.current[index - 1].current?.focus();
    }
  };

  // Auto focus on component mount
  useEffect(() => {
    inputRefs.current[0].current?.focus();
  }, []);

  useEffect(() => {
    if (
      verifyCode.num1 &&
      verifyCode.num2 &&
      verifyCode.num3 &&
      verifyCode.num4
    ) {
      handleVerifyEmail();
    }
  }, [verifyCode]);

  // console.log(errors);

  return (
    <form
      // onSubmit={handleVerifyEmail}
      className='flex w-full flex-col justify-between'
    >
      <ul className={`flex w-full items-center`}>
        {numInput.map(({ id, name }, idx) => (
          <li className='flex items-center' key={id}>
            <input
              ref={inputRefs.current[idx]}
              id={id}
              type='text'
              name={name}
              onChange={(e) => handleChange(e, idx)}
              onKeyDown={(e) => handleKeyPress(e, idx)}
              maxLength={1}
              defaultValue={verifyCode[name as keyof typeof verifyCode]}
              className={` ${
                errors.error && 'errors animate__animated animate__shakeY'
              }  h-[64px] appearance-none block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />{' '}
            {idx < numInput.length - 1 && (
              <span className='mx-[2px] text-gray-300 lg:mx-[6px]'>-</span>
            )}
          </li>
        ))}
      </ul>

      <article>
        <div className='mt-10'>
          <Button
            className='pry-btn w-full'
            type='button'
            onClick={handleVerifyEmail}
            loading={loading['verify']}
          >
            Submit Code
          </Button>
        </div>

        <div className='mt-5 flex w-full items-center justify-center gap-1 text-center'>
          <p onClick={handleReSendOTP} className='text-grey1'>
            Didn&apos;t receive a code?
          </p>
          {timeLeft > 0 ? (
            <CountDownTimer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
          ) : (
            <Button
              className='outline-btn !text-sm'
              type='button'
              onClick={handleReSendOTP}
              loading={loading['resend']}
            >
              Request again
            </Button>
          )}
        </div>
      </article>
    </form>
  );
};

export default VerifyEmailForm;
