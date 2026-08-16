import React, { useState, useEffect } from 'react';
import { Plus, Trash2, FileText, Sparkles, Download, CheckCircle } from 'lucide-react';
import { generateResume } from '../utils/docxExport';
import { GoogleGenAI } from '@google/genai';
import { useAppContext } from '../context/AppContext';

export default function ResumeBuilder() {
  const { currentUser: user, updateSection } = useAppContext();
  
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [jobs, setJobs] = useState([
    { id: 1, company: '', title: '', startDate: '', endDate: '', description: '' },
  ]);

  const [isGenerating, setIsGenerating] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  
  // Load saved state from context
  useEffect(() => {
    if (user) {
      const savedData = user.employmentReadiness?.resumeData;
      if (savedData && Object.keys(savedData).length > 0) {
        if (savedData.name || savedData.email || savedData.phone) {
          setPersonalInfo({
            name: savedData.name || '',
            email: savedData.email || '',
            phone: savedData.phone || '',
          });
        }
        if (savedData.jobs && Array.isArray(savedData.jobs) && savedData.jobs.length > 0) {
          setJobs(savedData.jobs);
          // If we have job descriptions, we can optionally show preview immediately
          if (savedData.jobs.some(j => j.description)) {
            setShowPreview(true);
          }
        }
      } else {
        // Pre-fill name from user object
        const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim();
        setPersonalInfo(prev => ({ ...prev, name: fullName || '' }));
      }
    }
  }, [user]);

  // Save state to context
  const saveToCloud = (newPersonalInfo, newJobs) => {
    if (user) {
      updateSection('employmentReadiness', {
        resumeCompleted: true,
        resumeData: {
          ...newPersonalInfo,
          jobs: newJobs
        }
      });
    }
  };

  const handlePersonalInfoChange = (e) => {
    const newData = { ...personalInfo, [e.target.name]: e.target.value };
    setPersonalInfo(newData);
    saveToCloud(newData, jobs);
  };

  const handleJobChange = (id, field, value) => {
    const newJobs = jobs.map((job) => (job.id === id ? { ...job, [field]: value } : job));
    setJobs(newJobs);
    saveToCloud(personalInfo, newJobs);
  };

  const addJob = () => {
    const newId = jobs.length > 0 ? Math.max(...jobs.map((j) => j.id)) + 1 : 1;
    const newJobs = [...jobs, { id: newId, company: '', title: '', startDate: '', endDate: '', description: '' }];
    setJobs(newJobs);
    saveToCloud(personalInfo, newJobs);
  };

  const removeJob = (id) => {
    const newJobs = jobs.filter((job) => job.id !== id);
    setJobs(newJobs);
    saveToCloud(personalInfo, newJobs);
  };

  const generateDescriptions = async () => {
    setIsGenerating(true);
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("Missing Gemini API Key. Please add VITE_GEMINI_API_KEY to .env");
      }
      
      const ai = new GoogleGenAI({ apiKey });
      
      const generatedJobs = await Promise.all(
        jobs.map(async (job) => {
          if (!job.company || !job.title) {
            return { ...job, description: '' };
          }
          const prompt = `Write 3 to 4 professional, action-oriented resume bullet points for a ${job.title} at ${job.company}.
Output ONLY the bullet points, starting each with a bullet character (•), and do not include any intro or outro text. Make them sound professional and impactful.`;
          
          const response = await ai.models.generateContent({
            model: 'gemini-3.5-flash',
            contents: prompt,
          });
          
          return {
            ...job,
            description: response.text,
          };
        })
      );
      
      setJobs(generatedJobs);
      saveToCloud(personalInfo, generatedJobs);
      setShowPreview(true);
    } catch (error) {
      console.error(error);
      alert("Error generating descriptions. " + error.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleExport = async () => {
    setIsExporting(true);
    try {
      await generateResume({
        ...personalInfo,
        jobs,
      });
      // Optionally log this activity
      if (user && updateSection) {
        updateSection('employmentReadiness', {}, 'Exported a drafted resume.');
      }
    } catch (error) {
      console.error(error);
      alert("Error exporting resume.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: '1000px' }}>
      <div className="flex justify-between items-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
        <div>
          <h1 className="title">AI Resume Builder</h1>
          <p className="subtitle">Craft professional, tailored resumes in seconds using Gemini AI.</p>
        </div>
        {user?.employmentReadiness?.resumeCompleted && (
          <span className="badge bg-success" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '1rem', padding: '0.5rem 1rem' }}>
            <CheckCircle size={18} /> Resume Saved to Cloud
          </span>
        )}
      </div>

      {!showPreview ? (
        <div className="glass-panel animate-fadeIn">
          <h2 className="flex items-center gap-sm" style={{ marginBottom: '1.5rem' }}>
            <FileText size={24} color="var(--accent-primary)" /> Personal Details
          </h2>
          <div className="grid grid-cols-2 gap-lg" style={{ marginBottom: '2rem' }}>
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label">Full Name</label>
              <input type="text" className="form-input" name="name" value={personalInfo.name} onChange={handlePersonalInfoChange} placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" name="email" value={personalInfo.email} onChange={handlePersonalInfoChange} placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input type="text" className="form-input" name="phone" value={personalInfo.phone} onChange={handlePersonalInfoChange} placeholder="(555) 123-4567" />
            </div>
          </div>

          <h2 style={{ marginBottom: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>Work Experience</h2>
          
          <div className="flex-col gap-lg">
            {jobs.map((job, index) => (
              <div key={job.id} className="card" style={{ position: 'relative' }}>
                {jobs.length > 1 && (
                  <button 
                    className="btn btn-outline" 
                    onClick={() => removeJob(job.id)}
                    style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '0.4rem', border: 'none', color: 'var(--accent-danger)' }}
                  >
                    <Trash2 size={20} />
                  </button>
                )}
                
                <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem' }}>Job #{index + 1}</h3>
                
                <div className="grid grid-cols-2 gap-md">
                  <div className="form-group">
                    <label className="form-label">Company</label>
                    <input type="text" className="form-input" value={job.company} onChange={(e) => handleJobChange(job.id, 'company', e.target.value)} placeholder="Home Depot" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Job Title</label>
                    <input type="text" className="form-input" value={job.title} onChange={(e) => handleJobChange(job.id, 'title', e.target.value)} placeholder="Forklift Operator" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Start Date</label>
                    <input type="text" className="form-input" value={job.startDate} onChange={(e) => handleJobChange(job.id, 'startDate', e.target.value)} placeholder="Jan 2020" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">End Date</label>
                    <input type="text" className="form-input" value={job.endDate} onChange={(e) => handleJobChange(job.id, 'endDate', e.target.value)} placeholder="Present" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center" style={{ marginTop: '2rem' }}>
            <button className="btn btn-secondary" onClick={addJob} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Plus size={20} /> Add Another Job
            </button>

            <button className="btn btn-primary" onClick={generateDescriptions} disabled={isGenerating} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {isGenerating ? (
                <>Generating... Please wait</>
              ) : (
                <><Sparkles size={20} /> Generate AI Descriptions</>
              )}
            </button>
          </div>
        </div>
      ) : (
        <div className="glass-panel animate-fadeIn">
          <h2 style={{ margin: '0 0 0.5rem 0' }}>Review & Edit Descriptions</h2>
          <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
            Gemini AI has generated professional bullet points for your roles. Feel free to tweak them before exporting.
          </p>

          <div className="flex-col gap-lg">
            {jobs.map((job) => (
              <div key={job.id} className="form-group card">
                <label className="form-label" style={{ fontSize: '1.1rem', color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>
                  {job.title || 'Job Title'} at {job.company || 'Company'}
                </label>
                <textarea
                  className="form-input"
                  value={job.description}
                  onChange={(e) => handleJobChange(job.id, 'description', e.target.value)}
                  rows={6}
                  style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: '1.5' }}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center" style={{ marginTop: '2rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
            <button className="btn btn-outline" onClick={() => setShowPreview(false)}>
              Back to Edit Info
            </button>
            <button className="btn btn-primary" onClick={handleExport} disabled={isExporting} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {isExporting ? (
                <>Exporting...</>
              ) : (
                <><Download size={20} /> Export .docx Resume</>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
