import ResetPasswordForm from '@/components/main/auth/ResetPasswordForm';
import { useAuthContext } from '@/contexts/AuthContext';
import AuthSidebar from './AuthSidebar';

const ChangePassword = () => {
  const { userData } = useAuthContext();
  return (
    <main className='min-h-screen flex'>
      <section className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 space-y-8'>
        <article className='mx-auto w-full max-w-md text-center'>
          <h2 className='mt-6 text-center text-3xl font-bold text-gray-900'>
            Reset your password
          </h2>
          <p>
            Enter the code sent to your email at: {userData?.email} and new
            password to complete your password reset process{' '}
          </p>
        </article>

        <ResetPasswordForm />
      </section>
      <AuthSidebar />
    </main>
  );
};

export default ChangePassword;
