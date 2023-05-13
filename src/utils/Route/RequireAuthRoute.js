import { Navigate, Outlet, useLocation } from "react-router-dom";


const RequireAuthRoute = () => {
  const location = useLocation();
  const auth = localStorage.getItem('accessToken')

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/onboarding" state={{ from: location }} replace />
  );
};

export default RequireAuthRoute;
