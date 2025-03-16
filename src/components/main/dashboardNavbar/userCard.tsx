import noAvatar from '@/assets/images/noAvatar.png';
import PopupProvider from '@/components/ui/modals/PopupProvider';
import { AuthUserDataDTO } from '@/types/auth';
import Logout from '../logout/Logout';

const UserCard = ({ data }: { data: AuthUserDataDTO }) => {
  return (
    <PopupProvider>
      <section className='flex flex-col gap-4 rounded-xl p-4 text-center shadow-xl'>
        <figure className='mx-auto h-[60px] w-[60px] overflow-hidden'>
          <img src={data?.profileImageUrl ?? noAvatar} alt='' />
        </figure>

        <div>
          <h4>
            {data?.firstName} {data?.lastName}{' '}
          </h4>
          <small className='text-Grey6'>{data?.email}</small>
        </div>

        <Logout />
      </section>
    </PopupProvider>
  );
};

export default UserCard;
