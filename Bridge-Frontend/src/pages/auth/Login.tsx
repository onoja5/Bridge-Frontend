import LoginForm from '@/components/main/auth/LoginForm';
import GoogleAuth from '@/components/main/auth/socialAuth/GoogleAuth';
import { Link } from 'react-router-dom';
import AuthSidebar from './AuthSidebar';

export default function Login() {
  return (
    <main className='min-h-screen flex'>
      <section className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 space-y-8'>
        <header className='mx-auto w-full max-w-md'>
          <h2 className='mt-6 text-center text-3xl font-bold text-gray-900'>
            Welcome Back!
          </h2>
          <p>
            Let&apos;s get back in business!, make sure to tell a friend about
            BridgeAI today.
          </p>
        </header>

        <section className='mx-auto w-full max-w-md'>
          <LoginForm />
        </section>

        <section className='mx-auto w-full max-w-xl'>
          <article className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300'></div>
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='px-2 bg-white text-gray-500'>
                Or sign in with
              </span>
            </div>
          </article>

          <GoogleAuth />
        </section>
        <article className='mx-auto w-full max-w-xl'>
          <p className='  text-center text-sm text-gray-600'>
            Don&apos;t have an account?{' '}
            <Link
              to='/signup'
              className='font-medium text-blue-600 hover:text-blue-500'
            >
              Sign up
            </Link>
          </p>
        </article>
      </section>

      <AuthSidebar />
    </main>
  );
}
