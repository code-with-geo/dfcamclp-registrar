import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/Auth";

export const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;

export const AuthProtectedRoutes = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
};
