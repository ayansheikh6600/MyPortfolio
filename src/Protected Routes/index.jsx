import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const loggedin = localStorage.getItem("login");

  return loggedin == "true" ? <Navigate to="/dasboard" /> : <Outlet />;
};
export default ProtectedRoutes;
