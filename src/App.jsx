import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CoreStability from './pages/CoreStability';
import EmploymentReadiness from './pages/EmploymentReadiness';
import HealthWellness from './pages/HealthWellness';
import Financial from './pages/Financial';
import CareerPlanning from './pages/CareerPlanning';
import Training from './pages/Training';
import Admin from './pages/Admin';

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/core-stability" element={<CoreStability />} />
            <Route path="/employment-readiness" element={<EmploymentReadiness />} />
            <Route path="/health-wellness" element={<HealthWellness />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/career-planning" element={<CareerPlanning />} />
            <Route path="/training" element={<Training />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
