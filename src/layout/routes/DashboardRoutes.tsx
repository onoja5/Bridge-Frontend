import Career from '@/pages/talent/career/Career';
import Dashboard from '@/pages/talent/home/Dashboard';
import Jobs from '@/pages/talent/jobs/Jobs';
import Mentorship from '@/pages/talent/mentorship/Mentorship';
import MentorDetail from '@/pages/talent/mentorship/MentorDetail';
import Projects from '@/pages/talent/projects/Projects';
import Recomendations from '@/pages/talent/recommendations/Recommendations';
import { ReactElement } from 'react';

interface Route {
  path: string;
  name: string;
  element: ReactElement;
}

const dashboardRoutes: Route[] = [
  { path: '/dashboard', name: 'Dashboard', element: <Dashboard /> },

  {
    name: 'Projects',
    path: '/projects',
    element: <Projects />,
  },
  {
    name: 'Mentorships',
    path: '/mentorships',
    element: <Mentorship />,
  },
  { name: 'Mentor Detail', path: '/mentorships/:userId', element: <MentorDetail/> },
  {
    name: 'Career',
    path: '/career',
    element: <Career />,
  },
  {
    name: 'Recomendations',
    path: '/recomendations',
    element: <Recomendations />,
  },
  {
    name: 'Jobs',
    path: '/jobs',
    element: <Jobs />,
  },
];

export default dashboardRoutes;
