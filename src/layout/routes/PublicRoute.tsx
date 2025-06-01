// custom route component for handling authentication-based redirects more cleanly
import { Navigate } from "react-router-dom";
import { useAuthContext } from "@/contexts/AuthContext";
import { useLocation } from "react-router-dom";
import { getDefaultDashboardPath } from "@/utils/helper";

export const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuthContext();
  const location = useLocation();

  if (isAuthenticated && location.pathname === "/") {
    const redirectPath = getDefaultDashboardPath();
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};