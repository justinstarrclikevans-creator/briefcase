import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  ShieldCheck, 
  Briefcase, 
  HeartPulse, 
  DollarSign, 
  Map, 
  FileText 
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Sidebar = () => {
  const { currentUser } = useAppContext();

  if (!currentUser) return null;

  const links = [
    { to: '/dashboard', icon: <Home size={20} />, label: 'Dashboard' },
    { to: '/core-stability', icon: <ShieldCheck size={20} />, label: 'Core Stability' },
    { to: '/employment-readiness', icon: <Briefcase size={20} />, label: 'Employment Readiness' },
    { to: '/health-wellness', icon: <HeartPulse size={20} />, label: 'Health & Wellness' },
    { to: '/financial', icon: <DollarSign size={20} />, label: 'Financial' },
    { to: '/career-planning', icon: <Map size={20} />, label: 'Career Planning' },
    { to: '/admin', icon: <FileText size={20} />, label: 'Admin Reports' },
  ];

  return (
    <div className="sidebar">
      <div style={{ padding: '1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
        <h2 style={{ margin: 0, color: 'var(--primary)' }}>Turn90</h2>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>Briefcase</p>
      </div>
      
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
