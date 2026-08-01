import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Download, Plus, Trash2 } from 'lucide-react';

const EmploymentReadiness = () => {
  const { currentUser, updateSection } = useAppContext();
  const [newApp, setNewApp] = useState({ company: '', position: '', status: 'Applied but waiting' });

  if (!currentUser) return null;

  const data = currentUser.employmentReadiness;

  const handleCheck = (field) => {
    updateSection('employmentReadiness', { [field]: !data[field] }, `Updated employment readiness task: ${field}`);
  };

  const handleSurvey = (e) => {
    updateSection('employmentReadiness', { careerInterest: e.target.value });
  };

  const updateResumeField = (field, value) => {
    updateSection('employmentReadiness', { 
      resumeData: { ...data.resumeData, [field]: value } 
    });
  };

  const downloadResume = () => {
    // Generate a simple text file for the resume
    const content = `
      RESUME
      ${currentUser.firstName} ${currentUser.lastName}
      Location: ${currentUser.location}
      Email: ${currentUser.coreStability.emailAddress || 'Not Provided'}
      
      Career Interest: ${data.careerInterest || 'Not Specified'}
      
      Summary:
      ${data.resumeData.summary || ''}
      
      Experience:
      ${data.resumeData.experience || ''}
      
      Skills:
      ${data.resumeData.skills || ''}
    `;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentUser.firstName}_${currentUser.lastName}_Resume.txt`;
    a.click();
    URL.revokeObjectURL(url);
    
    // Set resume as completed and trigger confetti/log
    updateSection('employmentReadiness', { resumeCompleted: true }, "Completed and downloaded Resume");
  };

  const addApplication = (e) => {
    e.preventDefault();
    if (newApp.company && newApp.position) {
      updateSection('employmentReadiness', {
        jobApplications: [...data.jobApplications, { ...newApp, date: new Date().toLocaleDateString() }]
      });
      setNewApp({ company: '', position: '', status: 'Applied but waiting' });
    }
  };

  const removeApplication = (index) => {
    const apps = [...data.jobApplications];
    apps.splice(index, 1);
    updateSection('employmentReadiness', { jobApplications: apps });
  };

  const updateApplicationStatus = (index, status) => {
    const apps = [...data.jobApplications];
    apps[index].status = status;
    updateSection('employmentReadiness', { jobApplications: apps });
  };

  return (
    <div className="page-container animate-fade-in">
      <h1 style={{ color: 'var(--primary)' }}>Employment Readiness</h1>
      <p className="text-muted">Prepare for your career, build your resume, and track job applications.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        
        {/* Survey & Checklist */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass-card">
            <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Career Interest</h3>
            <p style={{ fontSize: '0.85rem' }}>Which of these industries are you most interested in?</p>
            <select className="input-field" value={data.careerInterest} onChange={handleSurvey}>
              <option value="">Select an option</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Government Work">Government Work</option>
              <option value="CDL / Trucking">CDL / Trucking</option>
              <option value="Forklift Operator">Forklift Operator</option>
              <option value="Construction">Construction</option>
              <option value="Warehousing">Warehousing</option>
            </select>
          </div>

          <div className="glass-card">
            <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Readiness Checklist</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
              {[
                { id: 'workplaceReferences', label: 'Workplace References Identified' },
                { id: 'interviewPractice', label: 'Interview Practice Completed' },
                { id: 'interviewClothing', label: 'Interview Clothing Secured' },
                { id: 'workTools', label: 'Work Tools / Clothing (e.g., steel toe boots)' },
              ].map((item) => (
                <label key={item.id} className="checkbox-wrapper">
                  <input type="checkbox" checked={data[item.id]} onChange={() => handleCheck(item.id)} />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Resume Builder */}
        <div className="glass-card">
          <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Resume Builder</h3>
          <p style={{ fontSize: '0.85rem' }}>Fill in your details and download a simple text resume to get started.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Professional Summary</label>
              <textarea 
                className="input-field" 
                rows="2" 
                placeholder="A brief summary of your goals and strong points..."
                value={data.resumeData.summary || ''}
                onChange={(e) => updateResumeField('summary', e.target.value)}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Work Experience</label>
              <textarea 
                className="input-field" 
                rows="4" 
                placeholder="List your previous jobs, duties, and dates..."
                value={data.resumeData.experience || ''}
                onChange={(e) => updateResumeField('experience', e.target.value)}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Key Skills</label>
              <textarea 
                className="input-field" 
                rows="2" 
                placeholder="List skills (e.g., Forklift certified, punctual, team player)..."
                value={data.resumeData.skills || ''}
                onChange={(e) => updateResumeField('skills', e.target.value)}
              />
            </div>
            <button className="btn-primary" onClick={downloadResume}>
              <Download size={18} /> Download Resume
            </button>
            {data.resumeCompleted && <p style={{ color: 'var(--success)', fontSize: '0.85rem', textAlign: 'center' }}>Resume generated successfully!</p>}
          </div>
        </div>

      </div>

      {/* Job Tracker */}
      <div className="glass-card" style={{ marginTop: '2rem' }}>
        <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Job Application Tracker</h3>
        
        <form onSubmit={addApplication} style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          <input type="text" className="input-field" style={{ flex: 1, minWidth: '150px' }} placeholder="Company Name" value={newApp.company} onChange={(e) => setNewApp({...newApp, company: e.target.value})} required />
          <input type="text" className="input-field" style={{ flex: 1, minWidth: '150px' }} placeholder="Position" value={newApp.position} onChange={(e) => setNewApp({...newApp, position: e.target.value})} required />
          <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' }}><Plus size={18} /> Add Job</button>
        </form>

        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {data.jobApplications.length === 0 ? (
            <p className="text-muted" style={{ textAlign: 'center' }}>No job applications tracked yet.</p>
          ) : (
            data.jobApplications.map((app, index) => (
              <div key={index} style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h4 style={{ margin: 0 }}>{app.position} at {app.company}</h4>
                  <small className="text-muted">Applied: {app.date}</small>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <select 
                    className="input-field" 
                    style={{ padding: '0.5rem' }} 
                    value={app.status}
                    onChange={(e) => updateApplicationStatus(index, e.target.value)}
                  >
                    <option value="Applied but waiting">Applied but waiting</option>
                    <option value="Interview scheduled">Interview scheduled</option>
                    <option value="Start date confirmed">Start date confirmed</option>
                    <option value="Denied">Denied</option>
                  </select>
                  <button onClick={() => removeApplication(index)} style={{ background: 'none', border: 'none', color: 'var(--danger)', cursor: 'pointer' }}>
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default EmploymentReadiness;
