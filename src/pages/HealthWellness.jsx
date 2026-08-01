import React from 'react';
import { useAppContext } from '../context/AppContext';
import { VIDEOS } from '../config/videos';
import { Video } from 'lucide-react';

const HealthWellness = () => {
  const { currentUser, updateSection } = useAppContext();

  if (!currentUser) return null;

  const data = currentUser.healthWellness;

  const handleCheck = (field) => {
    updateSection('healthWellness', { [field]: !data[field] }, `Updated health task: ${field}`);
  };

  return (
    <div className="page-container animate-fade-in">
      <h1 style={{ color: 'var(--primary)' }}>Health & Wellness</h1>
      <p className="text-muted">Keep track of your physical and mental health resources.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        
        {/* Insurance & Primary Care */}
        <div className="glass-card">
          <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Insurance & Coverage</h3>
          
          <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.03)', borderRadius: '8px', marginTop: '1rem', marginBottom: '1rem' }}>
            <label className="checkbox-wrapper" style={{ padding: 0, paddingBottom: '0.5rem' }}>
              <input type="checkbox" checked={data.healthInsurance} onChange={() => handleCheck('healthInsurance')} />
              <span>Health Insurance / Coverage Plan</span>
            </label>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>We offer free options like free clinics and Welvista for those who qualify.</p>
            <a href={VIDEOS.healthCareOptions} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.875rem' }}>
              <Video size={16} /> Watch: Health Care Options Explained
            </a>
          </div>

          <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.03)', borderRadius: '8px', marginBottom: '1rem' }}>
            <label className="checkbox-wrapper" style={{ padding: 0, paddingBottom: '0.5rem' }}>
              <input type="checkbox" checked={data.welvistaReferral} onChange={() => handleCheck('welvistaReferral')} />
              <span>Welvista Referral Reviewed</span>
            </label>
            <a href={VIDEOS.welvista} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.875rem' }}>
              <Video size={16} /> Watch: What is the Welvista Program?
            </a>
          </div>
        </div>

        {/* Appointments & Needs */}
        <div className="glass-card">
          <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Appointments & Support</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
            {[
              { id: 'primaryCare', label: 'Primary Care / Doctor Visit' },
              { id: 'visionAppointment', label: 'Vision Appointment' },
              { id: 'prescriptionNeeds', label: 'Prescription Needs Reviewed' },
              { id: 'mentalHealthReferral', label: 'Mental Health Referral (if requested)' },
              { id: 'substanceRecovery', label: 'Substance Recovery Support Plan (if applicable)' },
            ].map((item) => (
              <label key={item.id} className="checkbox-wrapper">
                <input type="checkbox" checked={data[item.id]} onChange={() => handleCheck(item.id)} />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HealthWellness;
