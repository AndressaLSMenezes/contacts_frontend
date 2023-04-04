import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/homePage';
import React from 'react';
import { Dashboard } from '../pages/Dashboard';

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);

export default RoutesMain;
