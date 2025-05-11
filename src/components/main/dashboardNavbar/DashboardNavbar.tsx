import { setGreeting } from '@/utils/helper';
import UserCard from './userCard';
import { useAuthContext } from '@/contexts/AuthContext';
import { AuthUserDataDTO } from '@/types/auth'; // Ensure correct import
import noAvatar from '@/assets/images/noAvatar.png';
import { Link } from 'react-router-dom';

// Extend the imported AuthUserDataDTO interface
interface ExtendedAuthUserDataDTO extends AuthUserDataDTO {
  profileImageUrl?: string;
  firstName?: string;
  lastName?: string;
}

const DashboardNavbar: React.FC<{ isSidebarCollapsed: boolean }> = ({
  isSidebarCollapsed,
}) => {
  const { userData } = useAuthContext();

  return (
    <main
      className={`bg-white py-4 px-4 md:px-8 flex items-center justify-between flex-wrap gap-4 ${
        isSidebarCollapsed
          ? 'md:fixed md:left-16 md:w-[calc(100%-4rem)]'
          : 'md:fixed md:left-60 md:w-[calc(100%-15rem)]'
      } sm:static sm:w-full`}
    >
      <header className='container flex w-full flex-wrap items-center justify-between gap-4'>
        <article className='flex flex-col text-lg md:text-xl font-bold'>
          <div className='flex md:hidden '>
            <h1
              className={`text-xl font-bold text-blue-600 ${
                isSidebarCollapsed ? 'hidden' : ''
              }`}
            >
              <Link to='/'>Bridge AI</Link>
            </h1>
          </div>
          {setGreeting()}
        </article>

        <article className='flex items-center gap-4 flex-wrap'>
          <figure className='h-auto w-auto overflow-hidden'>
            <img
              className='w-[40px] md:w-[50px] rounded-full'
              src={userData?.profileImageUrl ?? noAvatar}
              alt='User Avatar'
            />
          </figure>

          <div className='text-center md:text-left'>
            <h5 className='text-sm md:text-base font-semibold'>
              {userData?.firstName} {userData?.lastName}
            </h5>
            <p className='text-primary text-xs md:text-sm'>
              {userData?.role || 'User Type Not Set'}
            </p>
          </div>

          <UserCard data={userData as ExtendedAuthUserDataDTO} />
        </article>
      </header>
    </main>
  );
};

export default DashboardNavbar;
