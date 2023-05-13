import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = localStorage.getItem('accessToken');

  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
