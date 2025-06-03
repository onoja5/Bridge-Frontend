// src/layout/routes/TalentRoutes.ts
import Dashboard from '@/pages/talent/home/Dashboard';
import Career from '@/pages/talent/career/Career';
import Projects from '@/pages/talent/projects/Projects';
import Mentorship from '@/pages/talent/mentorship/Mentorship';
import MentorDetail from '@/pages/talent/mentorship/MentorDetail';
import Recommendations from '@/pages/talent/recommendations/Recommendations';
import Jobs from '@/pages/talent/jobs/Jobs';
import { ReactElement } from 'react';


interface Route {
  path: string;
  name: string;
  element: ReactElement;
}

const talentRoutes: Route[] = [
  { path: '/talent/dashboard', element: <Dashboard />, name: 'Talent Dashboard' },
  { path: '/talent/career', element: <Career />, name: 'Career' },
  { path: '/talent/projects', element: <Projects />, name: 'Projects' },
  { path: '/talent/mentorship', element: <Mentorship />, name: 'Mentorship' },
  { path: '/talent/mentorships/:userId', element: <MentorDetail />, name: 'Mentor Detail' },
  { path: '/talent/recommendations', element: <Recommendations />, name: 'Recommendations' },
  { path: '/talent/jobs', element: <Jobs />, name: 'Jobs' },
];

export default talentRoutes;