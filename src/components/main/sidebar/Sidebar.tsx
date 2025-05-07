import { Link, NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';

interface SidebarProps {
  isCollapsed: boolean; // Prop to determine if the sidebar is collapsed
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  return (
    <main className='flex flex-col h-full p-5 gap-5 w-auto'>
      <section className='mt-3 mb-5 flex flex-col gap-3'>
        <div className='flex items-center justify-center'>
          <h1
            className={`text-xl font-bold text-blue-600 ${
              isCollapsed ? 'hidden' : ''
            }`}
          >
            <Link to='/'>Bridge AI</Link>
          </h1>
        </div>
      </section>
      <section className='mx-auto flex w-full flex-col'>
        <ul className='flex flex-col gap-2'>
          {SidebarData.map(({ name, path, icon }, idx) => (
            <NavLink
              key={idx}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md ${
                  isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
                }`
              }
            >
              <span className='text-xl'>{icon}</span>
              {!isCollapsed && <span>{name}</span>}{' '}
              {/* Hide text if collapsed */}
            </NavLink>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Sidebar;
