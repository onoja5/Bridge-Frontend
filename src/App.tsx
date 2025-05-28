// src/App.tsx
import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useAuthContext } from "./contexts/AuthContext";
import generalRoutes from "./layout/routes/GeneralRoutes";
import talentRoutes from "./layout/routes/TalentRoutes";
import mentorRoutes from "./layout/routes/MentorRoutes";
import partnerRoutes from "./layout/routes/PartnerRoutes";
import DashboardLayout from "./layout/DashboardLayout";
import NotFound from "./pages/404/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import DigitalApprenticeshipProgram from "./pages/DigitalApprenticeshipProgram";
import DigitalAfricaBootcamp from "./pages/DigitalAfricaBootcamp";
import CorporateTalentPipeline from "./pages/CorporateTalentPipeline";
import UserTypeSelection from "./pages/auth/UserTypeSelection";
import VerifyEmail from "./pages/auth/VerifyEmail";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

// Scroll restoration component
const ScrollToTopWrapper = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

function App() {
  const { userData, isAuthenticated } = useAuthContext();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("is-visible")
        );
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach(observer.observe);
    return () => revealElements.forEach(observer.unobserve);
  }, []);

  // Redirect logic based on user role
  const getDefaultDashboardPath = () => {
    if (!isAuthenticated) return "/login";
    switch (userData?.role) {
      case "MENTOR":
        return "/mentor/dashboard";
      case "PARTNER":
        return "/partner/dashboard";
      case "TALENT":
        return "/talent/dashboard";
      default:
        return "/select-user-type";
    }
  };

  return (
    <main className="App">
      <Toaster />
      <ScrollToTopWrapper />
      <Routes>
        {/* Redirect to appropriate dashboard based on role */}
        <Route
          path="/"
          element={<Navigate to={getDefaultDashboardPath()} replace />}
        />
        <Route
          path="/dashboard"
          element={<Navigate to={getDefaultDashboardPath()} replace />}
        />
        {/* Add redirects before main routes */}
        <Route
          path="/for-educators"
          element={<Navigate to="/for-mentors" replace />}
        />
        <Route
          path="/for-employers"
          element={<Navigate to="/for-partners" replace />}
        />
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
          path="/select-user-type"
          element={
            <>
              <Navbar />
              <UserTypeSelection />
              <Footer />
            </>
          }
        />
        {/* Talent Dashboard Routes */}
        // In App.tsx
        {talentRoutes.map(({ path, element, name }) => (
          <Route
            key={name}
            path={path}
            element={
              <ProtectedRoute allowedRoles={["TALENT"]}>
                <DashboardLayout>{element}</DashboardLayout>
              </ProtectedRoute>
            }
          />
        ))}
        {/* Mentor Dashboard Routes */}
        {mentorRoutes.map(({ path, element, name }) => (
          <Route
            key={name}
            path={path}
            element={
              <ProtectedRoute allowedRoles={["MENTOR"]}>
                <DashboardLayout>{element}</DashboardLayout>
              </ProtectedRoute>
            }
          />
        ))}
        {/* Partner Dashboard Routes */}
        {partnerRoutes.map(({ path, element, name }) => (
          <Route
            key={name}
            path={path}
            element={
              <ProtectedRoute allowedRoles={["PARTNER"]}>
                <DashboardLayout>{element}</DashboardLayout>
              </ProtectedRoute>
            }
          />
        ))}
        {/* Profile Route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/digital-apprenticeship-program"
          element={
            <>
              <Navbar />
              <DigitalApprenticeshipProgram />
              <Footer />
            </>
          }
        />
        <Route
          path="/digital-africa-bootcamp"
          element={
            <>
              <Navbar />
              <DigitalAfricaBootcamp />
              <Footer />
            </>
          }
        />
        <Route
          path="/corporate-talent-pipeline"
          element={
            <>
              <Navbar />
              <CorporateTalentPipeline />
              <Footer />
            </>
          }
        />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
