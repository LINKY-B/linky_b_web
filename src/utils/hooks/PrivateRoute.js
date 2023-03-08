import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "pages/Home/Home";

const PrivateRoute = ({ isLoggedIn, children }) => {
  console.log(isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
