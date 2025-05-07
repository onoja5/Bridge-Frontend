import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext'; // Use the correct hook name

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuthContext(); // Use isAuthenticated from your context
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;