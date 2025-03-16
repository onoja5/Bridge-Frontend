import { ActionSuccess } from '@/assets/svgs/ExportSvgs';
import { Link } from 'react-router-dom';

export default function PasswordChangeSuccess() {
  return (
    <main className='flex min-h-screen flex-col items-center bg-white pt-20'>
      <article className='mt-20 flex flex-col items-center justify-center gap-4'>
        <ActionSuccess />
        <hgroup className='my-5 text-center'>
          <h3 className='mb-2'>Password Reset Successful</h3>
          <h5>You have successfully changed your password. </h5>
        </hgroup>
        <Link to='/login' className='btn pry-btn w-full text-center'>
          Proceed to Login
        </Link>
      </article>
    </main>
  );
}
