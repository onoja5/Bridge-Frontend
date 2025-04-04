import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import generalRoutes from './layout/routes/GeneralRutes';
import dashboardRoutes from './layout/routes/DashboardRoutes';
import DashboardLayout from './layout/DashboardLayout';
import NotFound from './pages/404/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((element) => observer.observe(element));

    return () => {
      revealElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <main className='App'>
      <Toaster />
      <Router>
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
          {dashboardRoutes.map(({ path, element, name }) => (
            <Route
              key={name}
              path={path}
              element={<DashboardLayout>{element}</DashboardLayout>}
            />
          ))}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
