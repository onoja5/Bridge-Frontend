// src/layout/routes/MentorRoutes.ts
import MentorDashboard from '@/pages/mentor/dashboard/MentorDashboard';
import Mentees from '@/pages/mentor/mentees/Mentees';
import MentorResources from '@/pages/mentor/mentor-resources/MentorResources';
import MentorJobs from '@/pages/mentor/jobs/MentorJobs';
import { ReactElement } from 'react';

interface Route {
  path: string;
  name: string;
  element: ReactElement;
}

const mentorRoutes: Route[] = [
  { path: '/mentor/dashboard', element: <MentorDashboard />, name: 'Mentor Dashboard' },
  { path: '/mentor/mentees', element: <Mentees />, name: 'Mentees' },
  { path: '/mentor/resources', element: <MentorResources />, name: 'Mentor Resources' },
  { path: '/mentor/jobs', element: <MentorJobs />, name: 'Jobs' },
];

export default mentorRoutes;