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
import CurriculumPortal from './pages/CurriculumPortal';
import ResumeBuilder from './pages/ResumeBuilder';
import SessionReview from './pages/SessionReview';
import ProgressReport from './pages/ProgressReport';
import CurriculumWorkbook from './pages/CurriculumWorkbook';

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/curriculum-workbook" element={<CurriculumWorkbook />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/core-stability" element={<CoreStability />} />
            <Route path="/employment-readiness" element={<EmploymentReadiness />} />
            <Route path="/health-wellness" element={<HealthWellness />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/career-planning" element={<CareerPlanning />} />
            <Route path="/training" element={<Training />} />
            <Route path="/curriculum" element={<CurriculumPortal />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/session-review" element={<SessionReview />} />
            <Route path="/progress-report" element={<ProgressReport />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
// force reload
