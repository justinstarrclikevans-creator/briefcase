import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Lock, Trash2, MapPin } from 'lucide-react';

const Admin = () => {
  const { participants, removeParticipant } = useAppContext();
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === '4706') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect passcode');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="page-container animate-fade-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <div className="glass-card" style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(79, 70, 229, 0.1)', padding: '1rem', borderRadius: '50%' }}>
              <Lock size={32} color="var(--primary)" />
            </div>
          </div>
          <h2 style={{ marginBottom: '1rem' }}>Admin Access</h2>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input 
              type="password" 
              className="input-field" 
              placeholder="Enter Passcode" 
              value={passcode} 
              onChange={(e) => setPasscode(e.target.value)}
            />
            {error && <p style={{ color: 'var(--danger)', fontSize: '0.85rem', margin: 0 }}>{error}</p>}
            <button type="submit" className="btn-primary">View Report</button>
          </form>
        </div>
      </div>
    );
  }

  // Group participants by location
  const groupedByLocation = participants.reduce((acc, participant) => {
    const loc = participant.location || 'Unknown';
    if (!acc[loc]) acc[loc] = [];
    acc[loc].push(participant);
    return acc;
  }, {});

  const getMissingNeeds = (p) => {
    const needs = [];
    if (!p.coreStability.stateId) needs.push('State ID');
    if (!p.coreStability.birthCertificate) needs.push('Birth Certificate');
    if (!p.employmentReadiness.resumeCompleted) needs.push('Resume');
    if (!p.healthWellness.healthInsurance) needs.push('Health Insurance');
    if (!p.financial.bankAccountOpened) needs.push('Bank Account');
    return needs;
  };

  const getActiveLegalReqs = (p) => {
    const reqs = p.coreStability.legalRequirements;
    const active = [];
    if (reqs?.childSupport) active.push('Child Support');
    if (reqs?.probationClasses) active.push('Probation Classes');
    if (reqs?.pendingCharges) active.push('Pending Charges');
    if (reqs?.sexOffenderRegistry) active.push('Sex Offender Registry');
    if (reqs?.adsap) active.push('ADSAP Required');
    return active;
  };

  const getTrainingProgress = (p) => {
    const t = p.training;
    if (!t) return '0/0';
    const completed = Object.values(t).filter(v => v === true).length;
    const total = Object.keys(t).length;
    return `${completed}/${total}`;
  };

  return (
    <div className="page-container animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: 'var(--primary)' }}>Daily Report</h1>
        <button className="btn-secondary" onClick={() => setIsAuthenticated(false)}>Lock</button>
      </div>
      
      {Object.keys(groupedByLocation).length === 0 ? (
        <p className="text-muted">No participants found.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {Object.entries(groupedByLocation).map(([location, users]) => (
            <div key={location} className="glass-card">
              <h2 style={{ borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={24} color="var(--primary)" /> {location}
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                {users.map((user) => (
                  <div key={user.id} style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <h3 style={{ margin: '0 0 0.5rem 0' }}>{user.firstName} {user.lastName}</h3>
                        <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                          <strong>90-Day Goal:</strong> {user.goal90Day || 'None set'}
                        </p>
                      </div>
                      <button 
                        onClick={() => {
                          if (window.confirm(`Are you sure you want to remove ${user.firstName} ${user.lastName}?`)) {
                            removeParticipant(user.id);
                          }
                        }}
                        style={{ background: 'none', border: 'none', color: 'var(--danger)', cursor: 'pointer', padding: '0.5rem' }}
                        title="Remove Participant"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                          <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem' }}>Outstanding Needs</h4>
                          <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.85rem' }}>
                            {getMissingNeeds(user).length > 0 ? (
                              getMissingNeeds(user).map((need, idx) => <li key={idx}>{need}</li>)
                            ) : (
                              <li style={{ color: 'var(--success)', listStyle: 'none', marginLeft: '-1.5rem' }}>All basic needs met</li>
                            )}
                          </ul>
                        </div>

                        <div>
                          <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem' }}>Legal Requirements</h4>
                          <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.85rem', color: 'var(--warning)' }}>
                            {getActiveLegalReqs(user).length > 0 ? (
                              getActiveLegalReqs(user).map((req, idx) => <li key={idx}>{req}</li>)
                            ) : (
                              <li style={{ color: 'var(--text-muted)', listStyle: 'none', marginLeft: '-1.5rem' }}>None recorded</li>
                            )}
                          </ul>
                        </div>

                        <div>
                          <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.95rem' }}>Training Progress</h4>
                          <p style={{ margin: 0, fontSize: '0.85rem' }}>Completed Modules: <strong>{getTrainingProgress(user)}</strong></p>
                        </div>
                      </div>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                          <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.95rem' }}>Housing Plan</h4>
                          <p style={{ margin: 0, fontSize: '0.85rem', fontStyle: user.coreStability.housingPlan ? 'normal' : 'italic', color: user.coreStability.housingPlan ? 'inherit' : 'var(--text-muted)' }}>
                            {user.coreStability.housingPlan || 'Not provided'}
                          </p>
                        </div>
                        
                        <div>
                          <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.95rem' }}>Transportation Plan</h4>
                          <p style={{ margin: 0, fontSize: '0.85rem', fontStyle: user.coreStability.transportationPlan ? 'normal' : 'italic', color: user.coreStability.transportationPlan ? 'inherit' : 'var(--text-muted)' }}>
                            {user.coreStability.transportationPlan || 'Not provided'}
                          </p>
                        </div>

                        <div>
                          <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem' }}>Recent Activity Log</h4>
                          <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.85rem' }}>
                            {user.dailyActivityLog && user.dailyActivityLog.length > 0 ? (
                              user.dailyActivityLog.slice(-4).reverse().map((log, idx) => (
                                <li key={idx}>{log.date}: {log.activity}</li>
                              ))
                            ) : (
                              <li style={{ color: 'var(--text-muted)', listStyle: 'none', marginLeft: '-1.5rem' }}>No recent activity recorded</li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;
