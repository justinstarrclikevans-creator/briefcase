import React from 'react';
import { useAppContext } from '../context/AppContext';

const CareerPlanning = () => {
  const { currentUser, updateSection } = useAppContext();
  
  if (!currentUser) return null;

  const data = currentUser.careerPlanning;

  const handleUpdate = (field, value) => {
    updateSection('careerPlanning', { [field]: value });
  };

  const fields = [
    { id: 'careerGoal', label: 'Career Goal Identified', placeholder: 'What is your ultimate career goal?' },
    { id: 'targetIndustry', label: 'Target Industry Identified', placeholder: 'E.g., Manufacturing, Healthcare...' },
    { id: 'entryLevelJob', label: 'Entry-Level Job Goal Identified', placeholder: 'What is the first step to get there?' },
    { id: 'nextCredential', label: 'Next Credential Goal Identified', placeholder: 'E.g., CDL, Forklift Certification...' },
    { id: 'sixMonthGoal', label: '6-Month Goal Written', placeholder: 'Where do you want to be in 6 months?' },
    { id: 'longTermWageGoal', label: 'Long-Term Wage Goal Identified', placeholder: 'E.g., $25/hour, $60k/year...' },
  ];

  return (
    <div className="page-container animate-fade-in">
      <h1 style={{ color: 'var(--primary)' }}>Career Planning</h1>
      <p className="text-muted">Set specific goals to guide your career path.</p>

      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {fields.map((field) => (
            <div key={field.id}>
              <label style={{ fontSize: '0.9rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
                {field.label}
              </label>
              <input 
                type="text" 
                className="input-field" 
                placeholder={field.placeholder}
                value={data[field.id] || ''}
                onChange={(e) => handleUpdate(field.id, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerPlanning;
