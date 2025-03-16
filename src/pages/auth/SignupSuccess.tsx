import { ActionSuccess } from '@/assets/svgs/ExportSvgs';
import BrandLogo from '@/components/ui/BrandLogo';
import Button from '@/components/ui/Button';

export default function SignupSuccess() {
  return (
    <main className='flex min-h-screen'>
      <div className='w-8/12 lg:w-2/12'>
        <BrandLogo className='' />
      </div>
      <article className='mt-20 flex flex-col items-center justify-center gap-4'>
        <ActionSuccess />
        <hgroup className='my-5 text-center'>
          <h3 className='mb-2'>Verification Successful!</h3>
          <h5>
            Congratulations your email has been successfully verified. Log in to
            your account to get started.
          </h5>
        </hgroup>
        <Button link href='/signin' className='pry-btn w-full text-center'>
          Login
        </Button>
      </article>
    </main>
  );
}
