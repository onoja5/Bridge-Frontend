import { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'; // Removed BrowserRouter import
import { AuthProvider } from './contexts/AuthContext';
import generalRoutes from './layout/routes/GeneralRoutes';
import dashboardRoutes from './layout/routes/DashboardRoutes';
import DashboardLayout from './layout/DashboardLayout';
import NotFound from './pages/404/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';
import DigitalApprenticeshipProgram from './pages/DigitalApprenticeshipProgram';
import DigitalAfricaBootcamp from './pages/DigitalAfricaBootcamp';
import CorporateTalentPipeline from './pages/CorporateTalentPipeline';
import UserTypeSelection from './pages/auth/UserTypeSelection';
import VerifyEmail from './pages/auth/VerifyEmail';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

// Scroll restoration component
const ScrollToTopWrapper = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add('is-visible'),
        );
      },
      { root: null, rootMargin: '0px', threshold: 0.1 },
    );

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(observer.observe);
    return () => revealElements.forEach(observer.unobserve);
  }, []);

  return (
    <AuthProvider>
      <main className='App'>
        <Toaster />
        {/* Removed Router wrapper */}
        <ScrollToTopWrapper />
        <Routes>
          {generalRoutes.map((route, idx: number) => (
            <Route
              key={idx}
              path={route.path}
              element={
                <>
                  <Navbar />
                  {route.element}
                  <Footer />
                </>
              }
            />
          ))}
          <Route
            path="/blog"
            element={
              <>
                <Navbar />
                <Blog />
                <Footer />
              </>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <>
                <Navbar />
                <BlogPost />
                <Footer />
              </>
            }
          />
          <Route
            path='/select-user-type'
            element={
              <>
                <Navbar />
                <UserTypeSelection />
                <Footer />
              </>
            }
          />
          {dashboardRoutes.map(({ path, element, name }) => (
            <Route
              key={name}
              path={path}
              element={<DashboardLayout>{element}</DashboardLayout>}
            />
          ))}
          <Route element={<ProtectedRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route
            path='/digital-apprenticeship-program'
            element={
              <>
                <Navbar />
                <DigitalApprenticeshipProgram />
                <Footer />
              </>
            }
          />
          <Route
            path='/digital-africa-bootcamp'
            element={
              <>
                <Navbar />
                <DigitalAfricaBootcamp />
                <Footer />
              </>
            }
          />
          <Route
            path='/corporate-talent-pipeline'
            element={
              <>
                <Navbar />
                <CorporateTalentPipeline />
                <Footer />
              </>
            }
          />
          <Route path='/verify-email' element={<VerifyEmail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </AuthProvider>
  );
}

export default App;