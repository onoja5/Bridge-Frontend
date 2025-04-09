import VerifyEmailForm from '@/components/main/auth/VerifyEmailForm';
import AuthSidebar from './AuthSidebar';
import { useAuthContext } from '@/contexts/AuthContext';

export default function VerifyEmail() {
  const { userData } = useAuthContext();
  return (
    <main className='min-h-screen flex'>
      <section className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 space-y-8'>
        <article className='space-y-5 text-center  mx-auto w-full max-w-md'>
          <h1 className='mt-6 text-center text-3xl font-bold text-gray-900'>
            Verify your email
          </h1>
          <h5>
            A verification mail has been sent to {userData?.email}, please
            verify your account and come back to this page.
          </h5>
        </article>
        <div className='mx-auto w-full max-w-md'>
          <VerifyEmailForm />
        </div>
      </section>
      <AuthSidebar />
    </main>
  );
}
