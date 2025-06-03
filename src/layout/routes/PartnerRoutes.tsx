// src/layout/routes/PartnerRoutes.ts
import PartnerDashboard from '@/pages/partner/dashboard/PartnerDashboard';
import Opportunities from '@/pages/partner/opportunities/Opportunites';
import Network from '@/pages/partner/network/Network';
import PartnerJobs from '@/pages/partner/jobs/PartnerJobs';
import { ReactElement } from 'react';

interface Route {
  path: string;
  name: string;
  element: ReactElement;
}

const partnerRoutes:Route[] = [
  { path: '/partner/dashboard', element: <PartnerDashboard />, name: 'Partner Dashboard' },
  { path: '/partner/opportunities', element: <Opportunities />, name: 'Opportunities' },
  { path: '/partner/network', element: <Network />, name: 'Network' },
  { path: '/partner/jobs', element: <PartnerJobs />, name: 'Jobs' },
];

export default partnerRoutes;