import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { VIDEOS } from '../config/videos';
import { AlertTriangle, CheckCircle, Video, PlayCircle } from 'lucide-react';
import VideoModal from '../components/VideoModal';

const CoreStability = () => {
  const { currentUser, updateSection, logActivity } = useAppContext();
  const [emailError, setEmailError] = useState('');
  const [activeVideo, setActiveVideo] = useState(null);

  if (!currentUser) return null;

  const data = currentUser.coreStability;

  const handleCheck = (field) => {
    updateSection('coreStability', { [field]: !data[field] }, `Updated core requirement: ${field}`);
  };

  const handleLegalCheck = (field) => {
    updateSection('coreStability', { 
      legalRequirements: { ...data.legalRequirements, [field]: !data.legalRequirements[field] } 
    }, `Updated legal requirement: ${field}`);
  };

  const validateEmail = (email) => {
    updateSection('coreStability', { emailAddress: email });
    const isProfessional = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) && !email.toLowerCase().includes('crazy') && !email.toLowerCase().includes('baby');
    
    if (email.length > 0 && !isProfessional) {
      setEmailError('Please use a more professional email format (e.g., first.last@gmail.com)');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className="page-container animate-fade-in">
      {activeVideo && <VideoModal videoConfig={activeVideo} onClose={() => setActiveVideo(null)} />}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: 'var(--primary)', margin: 0 }}>Core Stability</h1>
        <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <CheckCircle size={18} /> Weekly Review Needed
        </div>
      </div>
      <p className="text-muted">Review these items once a week to ensure you have your essential needs met.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        
        {/* Documents & Essentials */}
        <div className="glass-card">
          <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Documents & Essentials</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
            {[
              { id: 'stateId', label: 'State ID' },
              { id: 'driversLicense', label: "Driver's License Status" },
              { id: 'ssnCard', label: 'Social Security Card' },
              { id: 'birthCertificate', label: 'Birth Certificate' },
              { id: 'libraryCard', label: 'Library Card' },
              { id: 'bankAccount', label: 'Bank Account' },
            ].map((item) => (
              <label key={item.id} className="checkbox-wrapper">
                <input type="checkbox" checked={data[item.id]} onChange={() => handleCheck(item.id)} />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Communication */}
        <div className="glass-card">
          <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Communication</h3>
          
          <label className="checkbox-wrapper">
            <input type="checkbox" checked={data.reliablePhone} onChange={() => handleCheck('reliablePhone')} />
            <span>Reliable Phone Number</span>
          </label>

          <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.03)', borderRadius: '8px', marginBottom: '1rem' }}>
            <label className="checkbox-wrapper" style={{ padding: 0, paddingBottom: '0.5rem' }}>
              <input type="checkbox" checked={data.professionalEmail} onChange={() => handleCheck('professionalEmail')} />
              <span>Professional Email Address</span>
            </label>
            <input 
              type="email" 
              className="input-field" 
              placeholder="Enter your email to verify"
              value={data.emailAddress}
              onChange={(e) => validateEmail(e.target.value)}
            />
            {emailError && <div style={{ color: 'var(--danger)', fontSize: '0.85rem', marginTop: '0.5rem', display: 'flex', gap: '0.25rem', alignItems: 'center' }}><AlertTriangle size={14} />{emailError}</div>}
            
            <button onClick={() => setActiveVideo(VIDEOS.professionalEmail)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.875rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <PlayCircle size={16} /> Watch: What makes an email professional?
            </button>
          </div>

          <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.03)', borderRadius: '8px' }}>
            <label className="checkbox-wrapper" style={{ padding: 0 }}>
              <input type="checkbox" checked={data.professionalVoicemail} onChange={() => handleCheck('professionalVoicemail')} />
              <span>Professional Voicemail Setup</span>
            </label>
            <button onClick={() => setActiveVideo(VIDEOS.professionalVoicemail)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.875rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <PlayCircle size={16} /> Watch: Recording a professional voicemail
            </button>
          </div>
        </div>

        {/* Life & Legal */}
        <div className="glass-card">
          <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Plans & Legal</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
            {[
              { id: 'transportationPlan', label: 'Transportation Plan' },
              { id: 'housingPlan', label: 'Housing Plan / Stable Address' },
              { id: 'childSupportContact', label: 'Child Support Contact / Status Reviewed' },
            ].map((item) => (
              <label key={item.id} className="checkbox-wrapper">
                <input type="checkbox" checked={data[item.id]} onChange={() => handleCheck(item.id)} />
                <span>{item.label}</span>
              </label>
            ))}
          </div>

          <h4 style={{ marginTop: '1.5rem', color: 'var(--warning)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <AlertTriangle size={18} /> Legal Requirements
          </h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Are you under any of the following requirements?</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {[
              { id: 'childSupport', label: 'Child Support' },
              { id: 'probationClasses', label: 'Probation Mandated Classes' },
              { id: 'pendingCharges', label: 'Pending Charges' },
              { id: 'sexOffenderRegistry', label: 'Sex Offender Registry' },
              { id: 'adsap', label: 'Required ADSAP for License' },
            ].map((item) => (
              <label key={item.id} className="checkbox-wrapper" style={{ padding: '0.5rem 1rem' }}>
                <input type="checkbox" checked={data.legalRequirements[item.id]} onChange={() => handleLegalCheck(item.id)} />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CoreStability;
