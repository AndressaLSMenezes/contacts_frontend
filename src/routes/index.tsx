import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homePage";
import React from "react";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { Dashboard } from "../pages/Dashboard";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />

    <Route element={<ProtectedRoutes />}>
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  </Routes>
);

export default RoutesMain;
