import { FaUsers } from 'react-icons/fa';
import { MdOutlineSubscriptions } from 'react-icons/md';

export const SidebarData = [
  {
    id: 'tab1',
    icon: null,
    title: 'Dashboard',
    url: '/',
  },
  {
    id: 'tab2',
    icon: <MdOutlineSubscriptions size={20} />,
    title: 'Servies',
    url: '/services',
  },
  {
    id: 'tab3',
    icon: <FaUsers size={20} />,
    title: 'Users',
    url: '/users',
  },
];
