import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@/contexts/AuthContext';
import SignUpForm from '@/components/main/auth/SignUpForm';
import GoogleAuth from '@/components/main/auth/socialAuth/GoogleAuth';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const { userData } = useAuthContext();

  if (!userData?.role) {
    return <Navigate to='/select-user-type' replace />; // Redirect to user type selection if role is not set
  }

  return (
    <main className='min-h-screen flex flex-col items-center bg-gray-50'>
      <header className='w-full max-w-3xl py-8 px-4 text-center'>
        <h2 className='text-3xl font-bold text-gray-900'>Create your account</h2>
        <p className='mt-2 text-gray-600'>
          Let’s get you set-up and ready to go, just fill out the form and follow all instructions.
        </p>
      </header>

      <section className='w-full max-w-3xl bg-white shadow-md rounded-lg p-8'>
        <SignUpForm />
        <div className='mt-6 flex items-center justify-center'>
          <div className='w-full border-t border-gray-300'></div>
          <span className='px-4 text-sm text-gray-500 bg-white'>Or sign up with</span>
          <div className='w-full border-t border-gray-300'></div>
        </div>
        <div className='mt-6 flex justify-center w-full'>
          <GoogleAuth /> {/* Ensure the button fills the container */}
        </div>
      </section>

      <footer className='mt-6 text-center'>
        <p className='text-sm text-gray-600'>
          Already have an account?{' '}
          <Link to='/login' className='font-medium text-blue-600 hover:text-blue-500'>
            Sign in
          </Link>
        </p>
      </footer>
    </main>
  );
}
