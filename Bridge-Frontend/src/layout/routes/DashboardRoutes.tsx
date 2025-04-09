import Career from '@/pages/dashboards/career/Career';
import Dashboard from '@/pages/dashboards/home/Dashboard';
import Jobs from '@/pages/dashboards/jobs/Jobs';
import Mentorship from '@/pages/dashboards/mentorship/Mentorship';
import Projects from '@/pages/dashboards/projects/Projects';
import Recomendations from '@/pages/dashboards/recommendations/Recomendations';
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
