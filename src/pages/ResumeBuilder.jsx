import React, { useState, useEffect } from 'react';
import { Printer, Download } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function ResumeBuilder() {
  const { currentUser: user, updateSection } = useAppContext();
  const [resumeData, setResumeData] = useState({
    name: 'Alex Participant',
    email: 'alex@example.com',
    phone: '(555) 123-4567',
    summary: 'Dedicated and hardworking professional seeking an entry-level position to utilize my skills and grow within a stable organization.',
    experience: 'Warehouse Associate | ABC Logistics | 2021-2023\n- Managed inventory and safely operated a forklift.\n- Maintained a clean and organized workspace.',
    education: 'High School Diploma | Central High School | 2020',
    skills: 'Forklift Operation, Inventory Management, Teamwork, Time Management'
  });

  useEffect(() => {
    if (user) {
      const savedData = user.employmentReadiness?.resumeData;
      if (savedData && Object.keys(savedData).length > 0) {
        setResumeData(savedData);
      } else {
        const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim();
        setResumeData(prev => ({ ...prev, name: fullName || 'Alex Participant' }));
      }
    }
  }, [user]);

  const handleChange = (e) => {
    const newData = { ...resumeData, [e.target.name]: e.target.value };
    setResumeData(newData);
    if (user) {
      updateSection('employmentReadiness', {
        resumeCompleted: true,
        resumeData: newData
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container" style={{ maxWidth: '1000px' }}>
      <h1 className="no-print" style={{ marginBottom: 'var(--spacing-xl)' }}>Resume Builder</h1>
      
      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)' }}>
        {/* Editor */}
        <div className="glass-panel no-print">
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Edit Details</h2>
          
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-input" name="name" value={resumeData.name} onChange={handleChange} />
          </div>
          
          <div className="grid grid-cols-2 gap-sm" style={{ marginBottom: '1rem' }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Email</label>
              <input type="email" className="form-input" name="email" value={resumeData.email} onChange={handleChange} />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Phone</label>
              <input type="text" className="form-input" name="phone" value={resumeData.phone} onChange={handleChange} />
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Professional Summary</label>
            <textarea className="form-textarea" rows="3" name="summary" value={resumeData.summary} onChange={handleChange}></textarea>
          </div>
          
          <div className="form-group">
            <label className="form-label">Experience</label>
            <textarea className="form-textarea" rows="4" name="experience" value={resumeData.experience} onChange={handleChange}></textarea>
          </div>

          <div className="form-group">
            <label className="form-label">Education</label>
            <textarea className="form-textarea" rows="2" name="education" value={resumeData.education} onChange={handleChange}></textarea>
          </div>

          <div className="form-group">
            <label className="form-label">Skills (comma separated)</label>
            <input type="text" className="form-input" name="skills" value={resumeData.skills} onChange={handleChange} />
          </div>

          <button className="btn btn-primary" onClick={handlePrint} style={{ width: '100%', marginTop: '1rem' }}>
            <Printer size={18} /> Print / Save as PDF
          </button>
        </div>

        {/* Preview / Print Area */}
        <div className="card print-area" style={{ backgroundColor: 'white', color: 'black', borderRadius: 0, padding: '2rem', height: 'fit-content' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem', borderBottom: '2px solid #ccc', paddingBottom: '1rem' }}>
            <h1 style={{ margin: 0, fontSize: '2rem', color: '#111' }}>{resumeData.name}</h1>
            <p style={{ margin: '0.5rem 0 0', color: '#555', fontSize: '0.9rem' }}>
              {resumeData.email} &bull; {resumeData.phone}
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', color: '#333', borderBottom: '1px solid #eee', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>Summary</h3>
            <p style={{ fontSize: '0.9rem', color: '#444' }}>{resumeData.summary}</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', color: '#333', borderBottom: '1px solid #eee', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>Experience</h3>
            <pre style={{ fontSize: '0.9rem', color: '#444', fontFamily: 'inherit', whiteSpace: 'pre-wrap' }}>{resumeData.experience}</pre>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', color: '#333', borderBottom: '1px solid #eee', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>Education</h3>
            <pre style={{ fontSize: '0.9rem', color: '#444', fontFamily: 'inherit', whiteSpace: 'pre-wrap' }}>{resumeData.education}</pre>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', color: '#333', borderBottom: '1px solid #eee', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>Skills</h3>
            <ul style={{ fontSize: '0.9rem', color: '#444', paddingLeft: '1.25rem' }}>
              {resumeData.skills.split(',').map((skill, idx) => (
                <li key={idx}>{skill.trim()}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
