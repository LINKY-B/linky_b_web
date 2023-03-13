import { useLocation, Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const RequireAuthRoute = () => {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();

  return auth.isLogined ? (
    <Outlet />
  ) : (
    <Navigate to="/onboarding" state={{ from: location }} replace />
    // <div>not auth</div>
  );
};

export default RequireAuthRoute;
