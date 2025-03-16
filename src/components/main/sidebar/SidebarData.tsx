import {
  DashboardIcon,
  JobIcon,
  RecommendIcon,
} from '@/assets/svgs/ExportSvgs';
import { FaRegMap } from 'react-icons/fa';
import { FiAward } from 'react-icons/fi';
import { PiFolderSimplePlus } from 'react-icons/pi';

export const SidebarData = [
  {
    icon: <DashboardIcon />,
    name: 'Dashboard',
    path: '/dashboard',
  },
  {
    name: 'Projects',
    path: '/projects',
    icon: <PiFolderSimplePlus size={24} />,
  },
  {
    name: 'Mentorships',
    path: '/mentorships',
    icon: <FiAward size={24} />,
  },
  {
    name: 'Career Roadmap',
    path: '/career',
    icon: <FaRegMap size={24} />,
  },
  {
    name: 'Recomendations',
    path: '/recomendations',
    icon: <RecommendIcon />,
  },
  {
    name: 'Jobs',
    path: '/jobs',
    icon: <JobIcon />,
  },
];
