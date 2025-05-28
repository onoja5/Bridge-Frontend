// src/components/ProtectedRoute.tsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '@/contexts/AuthContext';
import { UserRole } from '@/types/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { isAuthenticated, userData } = useAuthContext();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && userData?.role) {
    const userRole = userData.role.toUpperCase() as UserRole;
    const normalizedAllowedRoles = allowedRoles.map(role => role.toUpperCase()) as UserRole[];
    if (!normalizedAllowedRoles.includes(userRole)) {
      console.error('Unauthorized access - Role mismatch:', { userData, allowedRoles, userRole, normalizedAllowedRoles });
      return <Navigate to="/select-user-type" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;