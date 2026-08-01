import React from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import { Outlet, Navigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Layout = () => {
  const { currentUser } = useAppContext();

  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="app-layout">
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <TopNav />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
