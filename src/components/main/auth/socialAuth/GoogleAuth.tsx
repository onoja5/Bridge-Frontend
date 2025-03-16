import { googleProvider } from '@/firebase';
import { FcGoogle } from 'react-icons/fc';
import Button from '../../../ui/Button';
import { useGlobalHooks } from '@/hooks/globalHooks';

const GoogleAuth = () => {
  const { loading } = useGlobalHooks();

  // const provider = new GoogleAuthProvider();

  const handleGoogleAuth = async () => {
    // const result = await signInWithPopup(auth, provider);
    // console.log(result);
    // const authData = {
    //   social_provider_id: result.user.providerData[0].uid,
    //   email: result.user.email,
    //   name: result.user.providerData[0].displayName,
    //   avatar: result.user.photoURL,
    // };
    // try {
    //   const rsp = await UserGoogleAuth(authData);
    //   setLoading(() => ({ ['google']: false }));
    //   if (rsp?.errors || rsp?.error) {
    //     handleError(rsp?.message || 'An unexpected error occurred.');
    //     return;
    //   }
    //   if (rsp?.data && !rsp?.data?.phone_number) {
    //     route.push('/auth/add-phone-number');
    //   } else {
    //     toast.success(rsp?.message);
    //     route.push('/');
    //   }
    // } catch (err) {
    //   console.log(err);
    //   setLoading(() => ({ ['google']: false }));
    //   handleError('Something went wrong. Please try again later.');
    // }
  };
  return (
    <div className='mt-6 grid grid-cols-1 gap-3'>
      <Button
        type='button'
        onClick={handleGoogleAuth}
        loading={loading['google']}
        className='outline-btn !text-black'
      >
        <FcGoogle className='h-5 w-5' />
        <span className='ml-2'>Google</span>
      </Button>
    </div>
  );
};

export default GoogleAuth;
