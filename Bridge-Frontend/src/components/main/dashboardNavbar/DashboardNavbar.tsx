import { setGreeting } from '@/utils/helper';
import UserCard from './userCard';
import { useAuthContext } from '@/contexts/AuthContext';
import { AuthUserDataDTO } from '@/types/auth';
import noAvatar from '@/assets/images/noAvatar.png';

const DashboardNavbar = () => {
  const { userData } = useAuthContext();

  return (
    <main className='bg-white py-7 flex items-center justify-center'>
      <header className='container flex w-full flex-wrap items-center justify-between gap-4'>
        <article className='flex flex-col text-xl font-bold'>
          {setGreeting()}
        </article>

        <article className='flex items-center gap-4'>
          <figure className='h-auto w-auto overflow-hidden'>
            <img className='w-[40px] rounded-full' src={userData?.profileImageUrl ?? noAvatar} alt='' />
          </figure>

          <div>
            <h5 className='text-sm font-semibold'>
              {userData?.firstName} {userData?.lastName}{' '}
            </h5>
            <p className='text-primary text-xs'>{userData?.role}</p>
          </div>

          <UserCard data={userData as AuthUserDataDTO} />
        </article>
      </header>
    </main>
  );
};

export default DashboardNavbar;
