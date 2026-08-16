import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { STATIONS, WORKORDERS } from '../data/curriculumData';
import { Wrench, Zap, Droplet, Wind, Car, Shield, Compass, Layers, Sliders, Laptop, Check, Search, Play, Save, CheckSquare, ArrowLeft, RefreshCw, Info } from 'lucide-react';

const ICON_MAP = {
  Zap: Zap,
  Droplet: Droplet,
  Wind: Wind,
  Car: Car,
  Shield: Shield,
  Compass: Compass,
  Layers: Layers,
  Sliders: Sliders,
  Laptop: Laptop
};

export default function CurriculumPortal() {
  const { currentUser: user, getWorkorderProgress, saveWorkorderProgress, submitWorkorder, getCloudState, globalSettings } = useAppContext();
  const [selectedStation, setSelectedStation] = useState(STATIONS[0].id);
  const [selectedWorkorder, setSelectedWorkorder] = useState(null);
  
  // Tab control inside the workorder viewer
  const [activeTab, setActiveTab] = useState('theory'); // theory or activity

  // Current workorder states
  const [answers, setAnswers] = useState({ a1: '', a2: '', a3: '' });
  const [stepsCompleted, setStepsCompleted] = useState([]);
  const [signoffChecked, setSignoffChecked] = useState([]);
  const [customYoutubeId, setCustomYoutubeId] = useState('');
  const [status, setStatus] = useState('not_started');
  const [approvedDetails, setApprovedDetails] = useState(null);
  const [loadingState, setLoadingState] = useState(false);

  const [notification, setNotification] = useState('');

  // Sync cloud state first, then load the workorder details
  useEffect(() => {
    const syncState = async () => {
      if (user && selectedWorkorder) {
        setLoadingState(true);
        await getCloudState();
        
        const progress = getWorkorderProgress(selectedWorkorder.num);
        setAnswers(progress.answers || { a1: '', a2: '', a3: '' });
        setStepsCompleted(progress.stepsCompleted || []);
        setSignoffChecked(progress.signoffChecked || []);
        setStatus(progress.status || 'not_started');
        setApprovedDetails(progress.status === 'approved' ? {
          approvedAt: progress.approvedAt,
          approvedBy: progress.approvedBy
        } : null);
        setCustomYoutubeId(progress.customYoutubeId || selectedWorkorder.youtubeId);
        setLoadingState(false);
      }
    };
    syncState();
  }, [user?.id, selectedWorkorder?.num]);

  const handleSaveDraft = async () => {
    if (!user || !selectedWorkorder) return;
    
    const progress = {
      answers,
      stepsCompleted,
      signoffChecked,
      status: status === 'approved' || status === 'submitted' ? status : 'in_progress',
      customYoutubeId,
      submittedAt: null,
      approvedAt: approvedDetails?.approvedAt || null,
      approvedBy: approvedDetails?.approvedBy || null
    };
    
    await saveWorkorderProgress(selectedWorkorder.num, progress);
    setStatus(progress.status);
    showNotification('Draft saved successfully in the cloud.');
  };

  const handleSubmit = async () => {
    if (!user || !selectedWorkorder) return;
    
    // Check if answers are filled
    if (!answers.a1.trim() || !answers.a2.trim() || !answers.a3.trim()) {
      showNotification('Please answer all 3 research questions before submitting.', 'error');
      return;
    }

    if (stepsCompleted.length < selectedWorkorder.steps.length) {
      showNotification('Please complete and check off all hands-on activity steps.', 'error');
      return;
    }

    if (signoffChecked.length < selectedWorkorder.signoff.length) {
      showNotification('Please complete the safety and quality sign-off checks.', 'error');
      return;
    }

    const updated = await submitWorkorder(selectedWorkorder.num, answers, stepsCompleted, signoffChecked);
    // Persist custom youtube ID if any
    if (customYoutubeId) {
      updated.customYoutubeId = customYoutubeId;
      await saveWorkorderProgress(selectedWorkorder.num, updated);
    }

    setStatus('submitted');
    showNotification('Workorder submitted for manager sign-off.');
  };

  const showNotification = (msg, type = 'success') => {
    setNotification({ text: msg, type });
    setTimeout(() => setNotification(''), 4000);
  };

  const handleStepToggle = (index) => {
    if (status === 'approved') return;
    setStepsCompleted(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleSignoffToggle = (index) => {
    if (status === 'approved') return;
    setSignoffChecked(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const videoToRender = globalSettings?.videoOverrides?.[selectedWorkorder?.num] || selectedWorkorder?.youtubeId;

  const currentStation = STATIONS.find(s => s.id === selectedStation);
  const stationWorkorders = WORKORDERS.filter(w => w.station === selectedStation);

  // Calculate station completion
  const getStationProgressSummary = (stationId) => {
    if (!user) return 0;
    const wos = WORKORDERS.filter(w => w.station === stationId);
    let completedCount = 0;
    for (const wo of wos) {
      const p = getWorkorderProgress(wo.num);
      if (p.status === 'approved') completedCount++;
    }
    return `${completedCount}/${wos.length}`;
  };

  return (
    <div className="container">
      {notification && (
        <div className="card flex items-center gap-sm no-print" style={{ 
          position: 'fixed', 
          top: '20px', 
          right: '20px', 
          zIndex: 1000, 
          backgroundColor: notification.type === 'error' ? 'rgba(239, 68, 68, 0.95)' : 'rgba(16, 185, 129, 0.95)', 
          border: '1px solid white', 
          color: 'white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}>
          <Info size={20} /> <span>{notification.text}</span>
        </div>
      )}

      {/* Main layout */}
      {!selectedWorkorder ? (
        // STATIONS & WORKORDER SELECTION VIEW
        <div className="flex-col gap-lg animate-fadeIn">
          <div className="flex justify-between items-center no-print">
            <div>
              <h1>Curriculum Workstations</h1>
              <p className="text-muted">Select a station and pick a workorder to begin your trade session.</p>
            </div>
            <Link to="/curriculum-workbook" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              Print/Download Workbook
            </Link>
          </div>

          <div className="grid" style={{ gridTemplateColumns: '300px 1fr', gap: 'var(--spacing-xl)' }}>
            {/* Left sidebar: Stations */}
            <div className="flex-col gap-sm no-print">
              {STATIONS.map(station => {
                const IconComponent = ICON_MAP[station.icon] || Wrench;
                const isSelected = selectedStation === station.id;
                
                return (
                  <button 
                    key={station.id} 
                    className={`btn ${isSelected ? 'btn-primary' : 'btn-outline'}`}
                    style={{ 
                      justifyContent: 'space-between', 
                      padding: '1.25rem 1rem', 
                      textAlign: 'left',
                      borderColor: isSelected ? 'var(--accent-primary)' : 'var(--border-color)'
                    }}
                    onClick={() => setSelectedStation(station.id)}
                  >
                    <div className="flex items-center gap-md">
                      <IconComponent size={20} />
                      <span style={{ fontWeight: 'bold' }}>{station.name}</span>
                    </div>
                    <span className="badge" style={{ 
                      background: isSelected ? 'white' : 'var(--bg-card)', 
                      color: isSelected ? 'var(--accent-primary)' : 'var(--text-primary)',
                      fontSize: '0.75rem',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '12px'
                    }}>
                      {getStationProgressSummary(station.id)}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right content: 10 Workorders for the selected station */}
            <div className="glass-panel">
              <h2 style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: 'var(--spacing-lg)' }}>
                {currentStation.name} - Job Workorders
              </h2>
              
              <div className="grid grid-cols-1 gap-md">
                {stationWorkorders.map(wo => {
                  const p = getWorkorderProgress(wo.num);
                  const isApproved = p.status === 'approved';
                  const isSubmitted = p.status === 'submitted';
                  const isInProgress = p.status === 'in_progress';
                  
                  return (
                    <div 
                      key={wo.num} 
                      className="card flex justify-between items-center" 
                      style={{ 
                        padding: '1.25rem', 
                        cursor: 'pointer',
                        transition: 'transform 0.2s',
                        borderLeft: isApproved ? '5px solid var(--accent-success)' : isSubmitted ? '5px solid var(--accent-warning)' : isInProgress ? '5px solid var(--accent-primary)' : '1px solid var(--border-color)'
                      }}
                      onClick={() => {
                        setSelectedWorkorder(wo);
                        setActiveTab('theory');
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                    >
                      <div>
                        <span className="text-muted" style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>
                          WORKORDER #{wo.num}
                        </span>
                        <h3 style={{ margin: '0.25rem 0 0 0' }}>{wo.title}</h3>
                      </div>
                      
                      <div>
                        {isApproved && <span className="badge bg-success" style={{ color: 'white' }}>Approved</span>}
                        {isSubmitted && <span className="badge bg-warning" style={{ color: 'white' }}>Pending Sign-off</span>}
                        {isInProgress && <span className="badge bg-primary" style={{ color: 'white' }}>In Progress</span>}
                        {!isApproved && !isSubmitted && !isInProgress && <span className="badge text-muted" style={{ background: 'rgba(0,0,0,0.1)' }}>Not Started</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        // ACTIVE WORKORDER SHEET VIEW
        <div className="flex-col gap-lg animate-fadeIn">
          {/* Header */}
          <div className="flex justify-between items-center no-print">
            <button className="btn btn-outline" onClick={() => setSelectedWorkorder(null)} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ArrowLeft size={16} /> Back to Workstations
            </button>
            
            <div className="flex gap-sm">
              <span className="badge" style={{ 
                background: status === 'approved' ? 'var(--accent-success)' : status === 'submitted' ? 'var(--accent-warning)' : 'var(--border-color)',
                color: 'white',
                padding: '0.5rem 1rem',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                borderRadius: '8px'
              }}>
                Status: {status === 'approved' ? 'APPROVED' : status === 'submitted' ? 'PENDING SIGN-OFF' : 'IN PROGRESS'}
              </span>
            </div>
          </div>

          {/* Approved banner */}
          {status === 'approved' && (
            <div className="card flex items-center gap-md" style={{ border: '1px solid var(--accent-success)', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-success)' }}>
              <Check size={32} />
              <div>
                <h4 style={{ margin: 0 }}>This workorder is fully approved and signed off!</h4>
                <p style={{ margin: 0, fontSize: '0.85rem' }}>Approved by manager <strong>{approvedDetails?.approvedBy}</strong> on {new Date(approvedDetails?.approvedAt).toLocaleString()}</p>
              </div>
            </div>
          )}

          {/* Workorder header info */}
          <div className="glass-panel" style={{ padding: '1.5rem', position: 'relative' }}>
            {loadingState && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(22, 27, 34, 0.7)',
                zIndex: 20,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                gap: '8px',
                backdropFilter: 'blur(3px)'
              }}>
                <RefreshCw className="animate-spin" /> Syncing with Cloud Database...
              </div>
            )}
            <span className="text-muted" style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
              WORKSTATION: {currentStation.name} — WORKORDER #{selectedWorkorder.num}
            </span>
            <h1 style={{ marginTop: '0.25rem', marginBottom: '1.25rem' }}>{selectedWorkorder.title}</h1>
            
            {/* Tabs */}
            <div className="flex gap-md no-print" style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              <button 
                className={`btn ${activeTab === 'theory' ? 'btn-primary' : 'btn-outline'}`}
                style={{ padding: '0.5rem 1.5rem' }}
                onClick={() => setActiveTab('theory')}
              >
                1. Concept Study Sheet
              </button>
              <button 
                className={`btn ${activeTab === 'activity' ? 'btn-primary' : 'btn-outline'}`}
                style={{ padding: '0.5rem 1.5rem' }}
                onClick={() => setActiveTab('activity')}
              >
                2. Hands-on Activity & Research
              </button>
            </div>

            {/* Tab 1: Theory Content */}
            {activeTab === 'theory' && (
              <div className="flex-col gap-lg animate-fadeIn" style={{ marginTop: '1.5rem' }}>
                <div className="grid grid-cols-2 gap-lg">
                  <div className="flex-col gap-sm" style={{ background: 'rgba(0,0,0,0.05)', padding: '1.25rem', borderRadius: '8px' }}>
                    <h3 style={{ color: 'var(--accent-primary)', margin: 0 }}>Technical Overview</h3>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{selectedWorkorder.studySheet.overview}</p>
                  </div>
                  <div className="flex-col gap-sm" style={{ background: 'rgba(0,0,0,0.05)', padding: '1.25rem', borderRadius: '8px' }}>
                    <h3 style={{ color: 'var(--accent-primary)', margin: 0 }}>Key Technical Concepts</h3>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{selectedWorkorder.studySheet.keyConcepts}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-lg">
                  <div className="flex-col gap-sm" style={{ background: 'rgba(0,0,0,0.05)', padding: '1.25rem', borderRadius: '8px' }}>
                    <h3 style={{ color: 'var(--accent-danger)', margin: 0 }}>Safety & Trade Regulations</h3>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{selectedWorkorder.studySheet.codesSafety}</p>
                  </div>
                  <div className="flex-col gap-sm" style={{ background: 'rgba(0,0,0,0.05)', padding: '1.25rem', borderRadius: '8px' }}>
                    <h3 style={{ color: 'var(--accent-primary)', margin: 0 }}>Practical Operational Guidelines</h3>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{selectedWorkorder.studySheet.guidelines}</p>
                  </div>
                </div>
                
                <div className="flex justify-end no-print" style={{ marginTop: 'var(--spacing-md)' }}>
                  <button className="btn btn-primary" onClick={() => setActiveTab('activity')}>
                    Continue to Activity <ArrowLeft style={{ transform: 'rotate(180deg)' }} size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Tab 2: Activity & Research Content */}
            {activeTab === 'activity' && (
              <div className="flex-col gap-lg animate-fadeIn" style={{ marginTop: '1.5rem' }}>
                <div className="grid" style={{ gridTemplateColumns: '1fr 400px', gap: 'var(--spacing-lg)' }}>
                  {/* Left Column: Research & Steps */}
                  <div className="flex-col gap-lg">
                    {/* Google Research Section */}
                    <div className="card">
                      <h3 className="flex items-center gap-sm" style={{ margin: '0 0 var(--spacing-md) 0' }}>
                        <Search color="var(--accent-primary)" /> Google Research Questions
                      </h3>
                      
                      <div className="flex-col gap-md">
                        {/* Q1 */}
                        <div className="form-group">
                          <label className="form-label" style={{ fontWeight: 'bold' }}>Question 1: {selectedWorkorder.q1}</label>
                          <div className="text-muted flex items-center gap-xs" style={{ fontSize: '0.8rem', marginBottom: '4px', fontStyle: 'italic' }}>
                            <span>Google Search:</span> <strong>{selectedWorkorder.p1}</strong>
                          </div>
                          <textarea 
                            className="form-input" 
                            rows={2} 
                            placeholder="Write your research answer here..."
                            value={answers.a1}
                            disabled={status === 'approved'}
                            onChange={e => setAnswers(prev => ({ ...prev, a1: e.target.value }))}
                          />
                        </div>
                        {/* Q2 */}
                        <div className="form-group">
                          <label className="form-label" style={{ fontWeight: 'bold' }}>Question 2: {selectedWorkorder.q2}</label>
                          <div className="text-muted flex items-center gap-xs" style={{ fontSize: '0.8rem', marginBottom: '4px', fontStyle: 'italic' }}>
                            <span>Google Search:</span> <strong>{selectedWorkorder.p2}</strong>
                          </div>
                          <textarea 
                            className="form-input" 
                            rows={2} 
                            placeholder="Write your research answer here..."
                            value={answers.a2}
                            disabled={status === 'approved'}
                            onChange={e => setAnswers(prev => ({ ...prev, a2: e.target.value }))}
                          />
                        </div>
                        {/* Q3 */}
                        <div className="form-group">
                          <label className="form-label" style={{ fontWeight: 'bold' }}>Question 3: {selectedWorkorder.q3}</label>
                          <div className="text-muted flex items-center gap-xs" style={{ fontSize: '0.8rem', marginBottom: '4px', fontStyle: 'italic' }}>
                            <span>Google Search:</span> <strong>{selectedWorkorder.p3}</strong>
                          </div>
                          <textarea 
                            className="form-input" 
                            rows={2} 
                            placeholder="Write your research answer here..."
                            value={answers.a3}
                            disabled={status === 'approved'}
                            onChange={e => setAnswers(prev => ({ ...prev, a3: e.target.value }))}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Hands-on Steps Section */}
                    <div className="card">
                      <h3 style={{ margin: '0 0 var(--spacing-md) 0' }}>Hands-on Activity Steps</h3>
                      <div className="flex-col gap-sm">
                        {selectedWorkorder.steps.map((step, idx) => {
                          const isChecked = stepsCompleted.includes(idx);
                          return (
                            <div 
                              key={idx} 
                              className="flex items-start gap-md card-interactive"
                              style={{ 
                                padding: '0.75rem 1rem', 
                                borderLeft: isChecked ? '4px solid var(--accent-success)' : '1px solid var(--border-color)',
                                opacity: status === 'approved' ? 0.8 : 1,
                                cursor: status === 'approved' ? 'default' : 'pointer'
                              }}
                              onClick={() => handleStepToggle(idx)}
                            >
                              <div style={{ marginTop: '2px' }}>
                                <div style={{ 
                                  width: '18px', 
                                  height: '18px', 
                                  border: '2px solid var(--border-color)', 
                                  borderRadius: '4px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  backgroundColor: isChecked ? 'var(--accent-success)' : 'transparent',
                                  borderColor: isChecked ? 'var(--accent-success)' : 'var(--border-color)'
                                }}>
                                  {isChecked && <Check size={12} color="white" />}
                                </div>
                              </div>
                              <span style={{ fontSize: '0.925rem', textDecoration: isChecked ? 'line-through' : 'none', color: isChecked ? 'var(--text-muted)' : 'var(--text-primary)' }}>
                                <strong>Step {idx + 1}:</strong> {step}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: YouTube Video & Sign-off Checklist */}
                  <div className="flex-col gap-lg">
                    {/* YouTube Video Section */}
                    <div className="card">
                      <h3 className="flex items-center gap-sm" style={{ margin: '0 0 var(--spacing-sm) 0' }}>
                        <Play color="var(--accent-primary)" /> Video Explanation
                      </h3>
                      
                      {videoToRender ? (
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', marginBottom: 'var(--spacing-md)' }}>
                          <iframe 
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                            src={`https://www.youtube.com/embed/${videoToRender}`}
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                          />
                        </div>
                      ) : (
                        <div className="card text-center text-muted" style={{ marginBottom: 'var(--spacing-md)', padding: '2rem' }}>
                          No video loaded.
                        </div>
                      )}
                    </div>

                    {/* Safety & Quality Checks */}
                    <div className="card">
                      <h3 className="flex items-center gap-sm" style={{ margin: '0 0 var(--spacing-md) 0' }}>
                        <CheckSquare color="var(--accent-warning)" /> Sign-off Verification
                      </h3>
                      <p className="text-muted" style={{ fontSize: '0.8rem', marginBottom: 'var(--spacing-md)' }}>
                        Verify the following criteria before submitting this workorder for manager approval:
                      </p>
                      
                      <div className="flex-col gap-sm">
                        {selectedWorkorder.signoff.map((sign, idx) => {
                          const isChecked = signoffChecked.includes(idx);
                          return (
                            <div 
                              key={idx} 
                              className="flex items-start gap-md card-interactive"
                              style={{ 
                                padding: '0.5rem 0.75rem', 
                                borderLeft: isChecked ? '4px solid var(--accent-warning)' : '1px solid var(--border-color)',
                                opacity: status === 'approved' ? 0.8 : 1,
                                cursor: status === 'approved' ? 'default' : 'pointer'
                              }}
                              onClick={() => handleSignoffToggle(idx)}
                            >
                              <div style={{ marginTop: '2px' }}>
                                <div style={{ 
                                  width: '16px', 
                                  height: '16px', 
                                  border: '2px solid var(--border-color)', 
                                  borderRadius: '4px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  backgroundColor: isChecked ? 'var(--accent-warning)' : 'transparent',
                                  borderColor: isChecked ? 'var(--accent-warning)' : 'var(--border-color)'
                                }}>
                                  {isChecked && <Check size={10} color="white" />}
                                </div>
                              </div>
                              <span style={{ fontSize: '0.85rem', color: isChecked ? 'var(--text-muted)' : 'var(--text-primary)' }}>
                                {sign}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Controls */}
                {status !== 'approved' && (
                  <div className="flex justify-end gap-sm no-print" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', marginTop: 'var(--spacing-md)' }}>
                    <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '6px' }} onClick={handleSaveDraft}>
                      <Save size={16} /> Save Draft
                    </button>
                    <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }} onClick={handleSubmit}>
                      <Check size={16} /> Submit Workorder
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
// force reload
