import React from 'react';
import { Routes, Route } from 'react-router-dom';

import _Dashboard from '../pages/_Dashboard';

const RoutesApp: React.FC = () => (
  <Routes>  
    <Route path="/" element={<_Dashboard />} />    
  </Routes>
);

export default RoutesApp;
