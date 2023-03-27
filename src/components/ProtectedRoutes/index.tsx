import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useApiContext } from "../../Contexts";

export const ProtectedRoutes = () => {
  const { customerId } = useApiContext();

  return customerId ? <Outlet /> : <Navigate to={"/"} replace />;
};
