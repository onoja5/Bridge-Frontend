import { PiWarningOctagon } from 'react-icons/pi';

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <article className='text-red-600 font-semi-bold animate__animated animate__bounceIn flex items-center gap-2'>
      <div>
        <PiWarningOctagon />
      </div>
      <p className='text-red-600'> {message}</p>
    </article>
  );
};

export default ErrorMessage;
