import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { LogOut, Target, Edit3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TopNav = () => {
  const { currentUser, logout, updateGoal } = useAppContext();
  const navigate = useNavigate();
  const [isEditingGoal, setIsEditingGoal] = useState(false);
  const [goalInput, setGoalInput] = useState(currentUser?.goal90Day || '');

  if (!currentUser) return null;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const saveGoal = () => {
    updateGoal(goalInput);
    setIsEditingGoal(false);
  };

  return (
    <div className="top-bar">
      <div>
        <h2 style={{ marginBottom: '0.25rem' }}>Welcome, {currentUser.firstName} {currentUser.lastName}</h2>
        <p className="text-muted" style={{ fontSize: '0.875rem' }}>Location: {currentUser.location}</p>
      </div>

      <div className="glass-card" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, margin: '0 2rem' }}>
        <Target size={24} color="var(--primary)" />
        <div style={{ flex: 1 }}>
          <h4 style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>90-Day Goal</h4>
          {isEditingGoal ? (
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
              <input 
                type="text" 
                className="input-field" 
                value={goalInput}
                onChange={(e) => setGoalInput(e.target.value)}
                placeholder="What is your 90-day goal?"
                autoFocus
                onKeyDown={(e) => e.key === 'Enter' && saveGoal()}
              />
              <button className="btn-primary" onClick={saveGoal} style={{ padding: '0.5rem 1rem' }}>Save</button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
              <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>
                {currentUser.goal90Day || "No goal set yet."}
              </span>
              <button onClick={() => setIsEditingGoal(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)' }}>
                <Edit3 size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      <button className="btn-secondary" onClick={handleLogout} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
};

export default TopNav;
