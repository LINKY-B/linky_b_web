import { useLocation, Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const PublicRoute = () => {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();

  return auth.isLogined ? (
    // <Navigate to="/onboarding" state={{ from: location }} replace />
    <div>not Authorization</div>
  ) : (
    <Outlet />
  );
};

export default PublicRoute;
