import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Briefcase, HeartPulse, DollarSign, Map, HelpCircle, FileText, AlertTriangle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const { currentUser, reportIssue } = useAppContext();
  
  const [showWeeklyCheckin, setShowWeeklyCheckin] = useState(false);
  const [issues, setIssues] = useState({
    life: false, housing: false, transportation: false, health: false, mentalHealth: false, legal: false
  });
  const [issueDetails, setIssueDetails] = useState('');

  useEffect(() => {
    if (currentUser) {
      const today = new Date();
      // Check if it is Monday (1)
      if (today.getDay() === 1) {
        const lastCheckinStr = currentUser.lastWeeklyCheckIn ? new Date(currentUser.lastWeeklyCheckIn).toDateString() : null;
        if (lastCheckinStr !== today.toDateString()) {
          setShowWeeklyCheckin(true);
        }
      }
    }
  }, [currentUser]);

  const submitWeeklyCheckin = () => {
    const selectedTypes = Object.keys(issues).filter(k => issues[k]);
    if (selectedTypes.length > 0 || issueDetails.trim().length > 0) {
      const issuesArray = selectedTypes.map(t => ({
        type: t.charAt(0).toUpperCase() + t.slice(1).replace(/([A-Z])/g, ' $1').trim(),
        description: issueDetails
      }));
      
      // If they wrote details but checked no boxes, just file as "General"
      if (issuesArray.length === 0 && issueDetails.trim().length > 0) {
        issuesArray.push({ type: 'General Issue', description: issueDetails });
      }
      reportIssue(issuesArray);
    } else {
      // Nothing reported, just update lastWeeklyCheckIn by passing empty array
      reportIssue([]);
    }
    setShowWeeklyCheckin(false);
  };

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
      <div className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
        <div>
          <h1 style={{ color: 'var(--primary)', margin: 0 }}>What would you like to work on today?</h1>
          <p className="text-muted" style={{ marginTop: '0.5rem' }}>Select a section below to track your progress and access resources.</p>
        </div>
        <button 
          className="btn-secondary" 
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          onClick={() => navigate('/progress-report')}
        >
          <FileText size={20} /> Generate Priority Report
        </button>
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

      {/* Weekly Monday Check-in Modal */}
      {showWeeklyCheckin && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}>
          <div className="card animate-fade-in" style={{ width: '500px', maxWidth: '90%', padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', color: 'var(--primary)' }}>
              <AlertTriangle size={28} />
              <h2 style={{ margin: 0 }}>Weekly Check-in</h2>
            </div>
            
            <p style={{ marginBottom: '1.5rem' }}>Happy Monday! Are you experiencing any new issues or roadblocks this week that your Program Manager can help with?</p>
            
            <div className="grid grid-cols-2 gap-sm" style={{ marginBottom: '1.5rem' }}>
              {Object.keys(issues).map(key => (
                <label key={key} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={issues[key]} 
                    onChange={(e) => setIssues({...issues, [key]: e.target.checked})} 
                  />
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                </label>
              ))}
            </div>

            <div className="form-group">
              <label className="form-label">Additional Details (Optional)</label>
              <textarea 
                className="form-input" 
                rows="3" 
                placeholder="Explain what you need help with..."
                value={issueDetails}
                onChange={(e) => setIssueDetails(e.target.value)}
              />
            </div>

            <div className="flex justify-end gap-md" style={{ marginTop: '2rem' }}>
              <button className="btn-primary" onClick={submitWeeklyCheckin}>
                Submit Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
