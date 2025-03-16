import Button from '@/components/ui/Button';
const NotFound = () => {
  return (
    <div className='w-full min-h-screen   mx-auto  flex flex-col  justify-center items-center'>
      <h1>404 - Page Not Found</h1>
      <p>The requested page does not exist.</p>

      <Button link className='pry-btn mt-3' href='/'>
        Go back Home
      </Button>
    </div>
  );
};

export default NotFound;
