import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { VIDEOS } from '../config/videos';
import { Video, PlayCircle } from 'lucide-react';
import VideoModal from '../components/VideoModal';

const HealthWellness = () => {
  const { currentUser, updateSection, logActivity } = useAppContext();
  const [activeVideo, setActiveVideo] = useState(null);

  if (!currentUser) return null;

  const data = currentUser.healthWellness;

  const handleCheck = (field) => {
    updateSection('healthWellness', { [field]: !data[field] }, `Updated health task: ${field}`);
  };

  return (
    <div className="page-container animate-fade-in">
      {activeVideo && <VideoModal videoConfig={activeVideo} onClose={() => setActiveVideo(null)} />}
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
            <button onClick={() => setActiveVideo(VIDEOS.healthcareFreeLowCost)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.875rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <PlayCircle size={16} /> Watch: Free and Low Cost Options
            </button>
            <button onClick={() => setActiveVideo(VIDEOS.healthcareUnderstandingCosts)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.875rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <PlayCircle size={16} /> Watch: Understanding Healthcare Costs
            </button>
          </div>

          <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.03)', borderRadius: '8px', marginBottom: '1rem' }}>
            <label className="checkbox-wrapper" style={{ padding: 0, paddingBottom: '0.5rem' }}>
              <input type="checkbox" checked={data.welvistaReferral} onChange={() => handleCheck('welvistaReferral')} />
              <span>Welvista Referral Reviewed</span>
            </label>
            <button onClick={() => setActiveVideo(VIDEOS.welvistaMedication)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.875rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <PlayCircle size={16} /> Watch: Medication Assistance
            </button>
            <button onClick={() => setActiveVideo(VIDEOS.welvistaSmiles)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.875rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <PlayCircle size={16} /> Watch: Smiles for Life
            </button>
            <button onClick={() => setActiveVideo(VIDEOS.welvistaTour)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.875rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <PlayCircle size={16} /> Watch: Welvista Tour
            </button>
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
            
            <div style={{ background: 'rgba(0,0,0,0.03)', padding: '1rem', borderRadius: '8px', marginTop: '0.5rem' }}>
              <label className="checkbox-wrapper" style={{ padding: 0 }}>
                <input type="checkbox" checked={data.medicationsCurrent} onChange={() => handleCheck('medicationsCurrent')} />
                <span style={{ fontWeight: 600 }}>Medications are current</span>
              </label>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Check only if you are not prescribed medication or you're on medications but they are filled and you have a plan to keep them current.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HealthWellness;
