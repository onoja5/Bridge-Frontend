/* eslint @typescript-eslint/no-explicit-any: "off" */

import Sidebar from '@/components/sidebar/sidebar';
import { ReactNode, useState } from 'react';
import { Navigate } from 'react-router-dom';

interface Layout {
  children: ReactNode;
}
const DashboardLayout: React.FC<Layout> = ({ children }) => {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  // if (!isLoggedIn) {
  //   return <Navigate to='/signin' replace />;
  // }

  return (
    <main className='flex justify-between'>
      <section
        className={` ${
          toggleSideBar ? ' w-60' : 'w-[20%] md:w-[7%]'
        } min-h-screen border-r border-Line bg-Grey3 p-1 transition-all duration-300 px-2 md:px-4`}
      >
        <Sidebar
          toggleSideBar={toggleSideBar}
          setToggleSideBar={setToggleSideBar}
        />
      </section>
      <aside className='flex-1 overflow-y-hidden transition-all duration-300'>
        {/* <NavBar /> */}
        {children}
      </aside>
    </main>
  );
};

export default DashboardLayout;
