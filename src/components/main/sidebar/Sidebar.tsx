import BrandLogo from '@/components/ui/BrandLogo';
import { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';

const Sidebar = ({}: {
  toggleSideBar: boolean;
  setToggleSideBar: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <main className='fixed pb-40 h-full'>
      <section className='mt-3 mb-5 flex flex-col gap-3'>
        <div className='flex items-center'>
          <BrandLogo />
        </div>
      </section>
      <section className='mx-auto flex w-full flex-col'>
        <ul className='flex flex-col gap-2'>
          {SidebarData.map(({ name, path, icon }, idx) => (
            <NavLink
              key={idx}
              to={path}
              className={({ isActive }) =>
                isActive ? 'sidebarActive' : 'sidebarNotActive'
              }
            >
              <hgroup className='flex items-center gap-2'>
                <h4>{icon} </h4>
                <h4>{name}</h4>
              </hgroup>
            </NavLink>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Sidebar;
