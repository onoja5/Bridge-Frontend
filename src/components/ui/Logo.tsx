import { Link } from 'react-router-dom';
import Logo from '@/assets/images/BridgeAILogo.png';

function BrandLogo({ className }: { className?: string }) {
  return (
    <Link to='/' className={className}>
      <figure className='w-[112px] h-10 grid place-items-center'>
        {' '}
        <img src={Logo} alt='Bridge AI Logo' />
      </figure>
    </Link>
  );
}

export default BrandLogo;
