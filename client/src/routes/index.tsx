import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const RoutesApp: React.FC = () => (
  <Routes>  
    <Route path="/" element={<Dashboard />} />    
  </Routes>
);

export default RoutesApp;
