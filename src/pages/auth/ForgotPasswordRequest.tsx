import PasswordChangeReqForm from '@/components/main/auth/PasswordChangeReqForm';
import AuthSidebar from './AuthSidebar';

export default function ForgotPasswordRequest() {
  return (
    <main className='min-h-screen flex'>
      <section className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 space-y-8'>
        <article className='mx-auto w-full max-w-md text-center'>
          <h2 className='mt-6 text-center text-3xl font-bold text-gray-900'>
            Reset your password
          </h2>
          <p>Enter your email to get reset password code</p>
        </article>

        <PasswordChangeReqForm />
      </section>
      <AuthSidebar />
    </main>
  );
}
