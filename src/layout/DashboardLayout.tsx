/* eslint @typescript-eslint/no-explicit-any: "off" */

import DashboardNavbar from '@/components/main/dashboardNavbar/DashboardNavbar';
import Sidebar from '@/components/main/sidebar/Sidebar';
import { useAuthContext } from '@/contexts/AuthContext';
import { ReactNode, useState } from 'react';
import { Navigate } from 'react-router-dom';

interface Layout {
  children: ReactNode;
}
const DashboardLayout: React.FC<Layout> = ({ children }) => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  return (
    <main className='flex justify-between'>
      <section
        className={`  w-60 min-h-screen border-r border-Line p-1 transition-all duration-300 px-2 md:px-4`}
      >
        <Sidebar
          toggleSideBar={toggleSideBar}
          setToggleSideBar={setToggleSideBar}
        />
      </section>
      <aside className='flex-1 overflow-y-hidden transition-all duration-300 bg-Grey1'>
        <DashboardNavbar />
        <div className='container py-10'>{children}</div>
      </aside>
    </main>
  );
};

export default DashboardLayout;
