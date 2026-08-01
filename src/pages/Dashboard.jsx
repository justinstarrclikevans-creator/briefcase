import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Briefcase, HeartPulse, DollarSign, Map, HelpCircle } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'Core Stability',
      path: '/core-stability',
      icon: <ShieldCheck size={32} color="var(--primary)" />,
      description: 'Ensure you have essential documents, housing, and legal requirements met.',
      tutorial: 'Step 1: Check off items you already have. Step 2: For missing items, follow the video guides or contact your case manager.'
    },
    {
      title: 'Employment Readiness',
      path: '/employment-readiness',
      icon: <Briefcase size={32} color="var(--primary)" />,
      description: 'Prepare your resume, practice interviews, and track job applications.',
      tutorial: 'Step 1: Take the Career Interest Survey. Step 2: Build your resume. Step 3: Track applications.'
    },
    {
      title: 'Health & Wellness',
      path: '/health-wellness',
      icon: <HeartPulse size={32} color="var(--primary)" />,
      description: 'Access health insurance, primary care, and mental health resources.',
      tutorial: 'Step 1: Review health insurance options. Step 2: Complete the Welvista referral if needed.'
    },
    {
      title: 'Financial',
      path: '/financial',
      icon: <DollarSign size={32} color="var(--primary)" />,
      description: 'Manage your budget, understand paychecks, and review credit reports.',
      tutorial: 'Step 1: Open a bank account. Step 2: Fill out the budget worksheet. Step 3: Watch the paycheck video.'
    },
    {
      title: 'Career Planning',
      path: '/career-planning',
      icon: <Map size={32} color="var(--primary)" />,
      description: 'Set short-term and long-term career and wage goals.',
      tutorial: 'Step 1: Identify target industry. Step 2: Write your 6-month goal.'
    }
  ];

  return (
    <div className="page-container animate-fade-in">
      <div>
        <h1 style={{ color: 'var(--primary)' }}>What would you like to work on today?</h1>
        <p className="text-muted">Select a section below to track your progress and access resources.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {sections.map((section, idx) => (
          <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: 'rgba(79, 70, 229, 0.1)', padding: '0.75rem', borderRadius: '12px' }}>
                {section.icon}
              </div>
              <h3 style={{ margin: 0 }}>{section.title}</h3>
            </div>
            
            <p style={{ margin: 0, flex: 1, fontSize: '0.95rem' }}>{section.description}</p>
            
            <div style={{ background: 'rgba(0,0,0,0.05)', padding: '1rem', borderRadius: '8px', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                <HelpCircle size={16} /> Tutorial
              </div>
              <p style={{ margin: 0, color: 'var(--text-muted)' }}>{section.tutorial}</p>
            </div>

            <button 
              className="btn-primary" 
              style={{ width: '100%', marginTop: '0.5rem' }}
              onClick={() => navigate(section.path)}
            >
              Open Section
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
