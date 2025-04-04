import GoogleAuth from '@/components/main/auth/socialAuth/GoogleAuth';
import { Link } from 'react-router-dom';
import AuthSidebar from './AuthSidebar';
import SignUpForm from '@/components/main/auth/SignUpForm';

export default function SignUp() {
  return (
    <main className='min-h-screen flex'>
      <section className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 space-y-8'>
        <header className='mx-auto w-full max-w-md'>
          <h2 className='mt-6 text-center text-3xl font-bold text-gray-900'>
            Create your account
          </h2>
        </header>

        <SignUpForm />

        <section className='mx-auto w-full max-w-xl'>
          <article className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300'></div>
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='px-2 bg-white text-gray-500'>
                Or sign up with
              </span>
            </div>
          </article>

          <GoogleAuth />
        </section>
        <article className='mx-auto w-full max-w-xl'>
          <p className='text-center text-sm text-gray-600'>
            Already have an account?{' '}
            <Link
              to='/login'
              className='font-medium text-blue-600 hover:text-blue-500'
            >
              Sign in
            </Link>
          </p>
        </article>
      </section>

      <AuthSidebar />
    </main>
  );
}
