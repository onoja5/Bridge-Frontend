// generalRoutes.js

import About from '@/pages/About';
import ChangePassword from '@/pages/auth/ChangePassword';
import ForgotPasswordRequest from '@/pages/auth/ForgotPasswordRequest';
import Login from '@/pages/auth/Login';
import PasswordChangeSuccess from '@/pages/auth/PasswordChangeSuccess';
import SignUp from '@/pages/auth/SignUp';
import SignupSuccess from '@/pages/auth/SignupSuccess';
import VerifyEmail from '@/pages/auth/VerifyEmai';
import Blog from '@/pages/Blog';
import BusinessNonprofits from '@/pages/BusinessNonprofits';
import Careers from '@/pages/Careers';
import CollegesUniversities from '@/pages/CollegesUniversities';
import Contact from '@/pages/Contact';
import Demo from '@/pages/Demo';
import ExploreOpportunities from '@/pages/ExploreOpportunities';
import ForEducators from '@/pages/ForEducators';
import ForEmployers from '@/pages/ForEmployers';
import ForgotPassword from '@/pages/ForgotPassword';
import ForStudents from '@/pages/ForStudents';
import Help from '@/pages/Help';
import Home from '@/pages/Home';
import HowItWorks from '@/pages/HowItWorks';
import News from '@/pages/News';
import Partners from '@/pages/Partners';
import PostProject from '@/pages/PostProject';
import Privacy from '@/pages/Privacy';
import ProjectInternships from '@/pages/ProjectInternships';
import Solutions from '@/pages/Solutions';
import Status from '@/pages/Status';
import StudentsLearners from '@/pages/StudentsLearners';
import Terms from '@/pages/Terms';
import Updates from '@/pages/Updates';
import Webinars from '@/pages/Webinars';
import WorkBasedLearning from '@/pages/WorkBasedLearning';
import WorkforceDevelopment from '@/pages/WorkforceDevelopment';
import { ReactElement } from 'react';

interface Route {
  path: string;
  element: ReactElement;
}

const generalRoutes: Route[] = [
  { path: '/', element: <Home /> },
  { path: '/how-it-works', element: <HowItWorks /> },
  { path: '/solutions', element: <Solutions /> },
  { path: '/about', element: <About /> },
  { path: '/careers', element: <Careers /> },
  { path: '/workforce-development', element: <WorkforceDevelopment /> },
  { path: '/work-based-learning', element: <WorkBasedLearning /> },
  { path: '/project-internships', element: <ProjectInternships /> },
  { path: '/blog', element: <Blog /> },
  { path: '/contact', element: <Contact /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/terms', element: <Terms /> },
  { path: '/for-students', element: <ForStudents /> },
  { path: '/for-employers', element: <ForEmployers /> },
  { path: '/for-educators', element: <ForEducators /> },
  { path: '/explore', element: <ExploreOpportunities /> },
  { path: '/colleges', element: <CollegesUniversities /> },
  { path: '/businesses', element: <BusinessNonprofits /> },
  { path: '/learners', element: <StudentsLearners /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/news', element: <News /> },
  { path: '/partners', element: <Partners /> },
  { path: '/status', element: <Status /> },
  { path: '/updates', element: <Updates /> },
  { path: '/help', element: <Help /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/demo', element: <Demo /> },
  { path: '/post-project', element: <PostProject /> },
  { path: '/webinars', element: <Webinars /> },
  { path: '/signup-success', element: <SignupSuccess /> },
  { path: '/verify-email', element: <VerifyEmail /> },
  { path: '/forgot-password-request', element: <ForgotPasswordRequest /> },
  { path: '/change-password', element: <ChangePassword /> },
  { path: '/change-password-success', element: <PasswordChangeSuccess /> },
];

export default generalRoutes;
