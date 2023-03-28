import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";
const ProtectedRoutes = ({ children, redirectPatch = "/login" }) => {
  const user = useAuth();

  if (!user) return <Navigate to={redirectPatch} replace />;
  return children ? children : <Outlet />;
};

export default ProtectedRoutes;
