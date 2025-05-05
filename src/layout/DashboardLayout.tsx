/* eslint @typescript-eslint/no-explicit-any: "off" */

import DashboardNavbar from '@/components/main/dashboardNavbar/DashboardNavbar';
import Sidebar from '@/components/main/sidebar/Sidebar';
import { useAuthContext } from '@/contexts/AuthContext';
import { ReactNode, useState } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { SidebarData } from '@/components/main/sidebar/SidebarData'; // Import navigation data
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Import icons for collapse/expand

interface Layout {
  children: ReactNode;
}

const DashboardLayout: React.FC<Layout> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // State for sidebar collapse
  const { isAuthenticated } = useAuthContext();
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null); // Track active tooltip

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  return (
    <main className='flex flex-col md:flex-row min-h-screen'>
      {/* Sidebar */}
      <section
        className={`hidden md:block fixed top-0 left-0 transition-all duration-300 z-20 ${
          isSidebarCollapsed ? 'w-auto' : 'w-60'
        } min-h-screen border-r border-Line bg-white`}
      >
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <button
          onClick={() => setIsSidebarCollapsed((prev) => !prev)}
          className='absolute top-4 right-[-12px] bg-blue-600 text-white p-1 rounded-full shadow-md'
        >
          {isSidebarCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </section>

      {/* Main Content */}
      <aside
        className={`flex-1 transition-all duration-300 ${
          isSidebarCollapsed ? 'md:ml-16' : 'md:ml-60'
        } mt-16 md:mt-0 overflow-y-auto bg-Grey1`}
      >
        <DashboardNavbar isSidebarCollapsed={isSidebarCollapsed} />
        <div className='container py-10 px-4 md:px-8 mt-16 md:mt-20'>{children}</div>
      </aside>

      {/* Bottom Navigation for mobile */}
      <nav className='fixed bottom-0 left-0 w-full bg-white shadow-md md:hidden flex justify-around items-center py-5'>
        {SidebarData.map(({ name, path, icon }, idx) => (
          <div
            key={idx}
            className='relative flex flex-col items-center'
            onMouseEnter={() => setActiveTooltip(idx)} // Show tooltip on hover
            onMouseLeave={() => setActiveTooltip(null)} // Hide tooltip on mouse leave
            onClick={() => setActiveTooltip(idx)} // Show tooltip on click
          >
            <NavLink
              to={path}
              className={({ isActive }) =>
                `flex flex-col items-center text-xs sm:text-sm md:text-[12px] ${
                  isActive ? 'text-blue-600' : 'text-gray-500'
                }`
              }
            >
              <span className='text-icon sm:text-icon-lg'>{icon}</span>
            </NavLink>
            {/* Tooltip */}
            {activeTooltip === idx && (
              <div className='absolute bottom-12 bg-gray-800 text-white text-center text-xs rounded-md px-2 py-1'>
                {name}
              </div>
            )}
          </div>
        ))}
      </nav>
    </main>
  );
};

export default DashboardLayout;
