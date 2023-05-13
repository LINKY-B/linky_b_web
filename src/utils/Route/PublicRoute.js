import { Outlet } from "react-router-dom";


const PublicRoute = () => {
  const auth = localStorage.getItem('accessToken')

  return auth ? (
    // <Navigate to="/onboarding" state={{ from: location }} replace />
    <div>not Authorization</div>
  ) : (
    <Outlet />
  );
};

export default PublicRoute;
