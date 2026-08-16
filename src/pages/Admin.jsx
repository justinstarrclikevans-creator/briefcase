import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Lock, Trash2, MapPin, ArrowLeft, Download, Award, Search, Check, AlertCircle, LayoutGrid, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WORKORDERS, STATIONS } from '../data/curriculumData';

const Admin = () => {
  const { participants, removeParticipant, approveWorkorder, globalSettings, updateGlobalSettings } = useAppContext();
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('briefcase'); // briefcase, submissions, matrix, videos
  const [filterLocation, setFilterLocation] = useState('All');
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const [videoInputStates, setVideoInputStates] = useState({});
  const [notification, setNotification] = useState('');

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 3000);
  };

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
          
          <div style={{ marginTop: '1.5rem' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
              <ArrowLeft size={16} /> Back to Participant Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // --- FILTERS & COMPUTATIONS ---
  const getFilteredParticipants = () => {
    if (filterLocation === 'All') return participants;
    return participants.filter(p => p.location === filterLocation);
  };

  const filteredParticipants = getFilteredParticipants();

  // Group participants by location for the Briefcase Report tab
  const groupedByLocation = filteredParticipants.reduce((acc, p) => {
    const loc = p.location || 'Unknown';
    if (!acc[loc]) acc[loc] = [];
    acc[loc].push(p);
    return acc;
  }, {});

  const getMissingNeeds = (p) => {
    const needs = [];
    const skipKeys = ['legalRequirements', 'resumeData', 'jobApplications', 'budgetData', 'emailAddress', 'wo_progress'];
    const sections = ['coreStability', 'employmentReadiness', 'healthWellness', 'financial', 'careerPlanning'];

    sections.forEach(sec => {
      if (!p[sec]) return;
      Object.entries(p[sec]).forEach(([key, value]) => {
        if (skipKeys.includes(key)) return;
        if (value === false || (typeof value === 'string' && value.trim() === '')) {
          const formatted = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
          needs.push(formatted);
        }
      });
    });
    return needs;
  };

  const getActiveLegalReqs = (p) => {
    const reqs = p.coreStability?.legalRequirements;
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

  // Gather all submitted trades workorders awaiting sign-off
  const getSubmissions = () => {
    const list = [];
    for (const p of participants) {
      if (filterLocation !== 'All' && p.location !== filterLocation) {
        continue;
      }
      for (const [num, statusData] of Object.entries(p.wo_progress || {})) {
        if (statusData.status === 'submitted') {
          const wo = WORKORDERS.find(w => w.num === parseInt(num));
          const station = STATIONS.find(s => s.id === wo.station);
          list.push({
            user: {
              id: p.id,
              name: `${p.firstName} ${p.lastName}`,
              location: p.location
            },
            workorder: wo,
            station,
            progress: statusData
          });
        }
      }
    }
    return list.sort((a, b) => new Date(b.progress.submittedAt) - new Date(a.progress.submittedAt));
  };

  const submissions = getSubmissions();

  const handleApprove = async (userId, workorderNum) => {
    await approveWorkorder(userId, workorderNum, 'Program Manager');
    setSelectedSubmission(null);
  };

  const exportMasterCSV = () => {
    const headers = [
      'First Name', 'Last Name', 'Location', '90-Day Goal', 'Last Login',
      'CS: State ID', 'CS: Drivers License', 'CS: SSN Card', 'CS: Birth Certificate', 'CS: Reliable Phone', 'CS: Professional Email', 'CS: Email Address', 'CS: Prof Voicemail', 'CS: Library Card', 'CS: Bank Account', 'CS: Child Support Contact', 'CS: Transportation Plan', 'CS: Housing Plan',
      'LR: Child Support', 'LR: Probation', 'LR: Pending Charges', 'LR: Sex Offender', 'LR: ADSAP',
      'ER: Career Interest', 'ER: Resume Completed', 'ER: Workplace References', 'ER: Interview Practice', 'ER: Interview Clothing', 'ER: Work Tools',
      'HW: Health Insurance', 'HW: Welvista', 'HW: Primary Care', 'HW: Vision', 'HW: Prescription', 'HW: Meds Current', 'HW: Mental Health', 'HW: Substance Recovery',
      'FIN: Bank Account', 'FIN: Budget Completed', 'FIN: Budget Income', 'FIN: Budget Expenses', 'FIN: Paychecks', 'FIN: Savings Goal', 'FIN: Credit Report', 'FIN: Child Support Reviewed', 'FIN: Probation Obs',
      'CP: Career Goal', 'CP: Target Industry', 'CP: Entry Level Job', 'CP: Next Credential', 'CP: 6-Month Goal', 'CP: Long-Term Wage Goal',
      'Completed Trades Workorders'
    ];

    const rows = participants.map(user => {
      const escape = (val) => `"${(val || '').toString().replace(/"/g, '""')}"`;
      const cs = user.coreStability || {};
      const lr = cs.legalRequirements || {};
      const er = user.employmentReadiness || {};
      const hw = user.healthWellness || {};
      const fin = user.financial || {};
      const cp = user.careerPlanning || {};
      
      return [
        escape(user.firstName), escape(user.lastName), escape(user.location), escape(user.goal90Day), escape(user.lastLogin),
        escape(cs.stateId), escape(cs.driversLicense), escape(cs.ssnCard), escape(cs.birthCertificate), escape(cs.reliablePhone), escape(cs.professionalEmail), escape(cs.emailAddress), escape(cs.professionalVoicemail), escape(cs.libraryCard), escape(cs.bankAccount), escape(cs.childSupportContact), escape(cs.transportationPlan), escape(cs.housingPlan),
        escape(lr.childSupport), escape(lr.probationClasses), escape(lr.pendingCharges), escape(lr.sexOffenderRegistry), escape(lr.adsap),
        escape(er.careerInterest), escape(er.resumeCompleted), escape(er.workplaceReferences), escape(er.interviewPractice), escape(er.interviewClothing), escape(er.workTools),
        escape(hw.healthInsurance), escape(hw.welvistaReferral), escape(hw.primaryCare), escape(hw.visionAppointment), escape(hw.prescriptionNeeds), escape(hw.medicationsCurrent), escape(hw.mentalHealthReferral), escape(hw.substanceRecovery),
        escape(fin.bankAccountOpened), escape(fin.budgetWorksheetCompleted), escape(fin.budgetData?.income), escape(fin.budgetData?.expenses), escape(fin.understandingPaychecks), escape(fin.savingsGoal), escape(fin.creditReport), escape(fin.childSupportReviewed), escape(fin.probationObligations),
        escape(cp.careerGoal), escape(cp.targetIndustry), escape(cp.entryLevelJob), escape(cp.nextCredential), escape(cp.sixMonthGoal), escape(cp.longTermWageGoal),
        escape(Object.keys(user.wo_progress || {}).filter(woNum => user.wo_progress[woNum].status === 'approved').join('; '))
      ].join(',');
    });
    
    const csvContent = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Master_Briefcase_Export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="page-container animate-fade-in" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <h1 style={{ color: 'var(--primary)', margin: 0 }}>Program Manager Dashboard</h1>
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Monitor participant checklists and sign off trades workorders.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn-primary" onClick={exportMasterCSV} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <Download size={18} /> Export Master CSV
          </button>
          <button className="btn-secondary" onClick={() => setIsAuthenticated(false)} style={{ cursor: 'pointer' }}>Lock</button>
        </div>
      </div>

      {/* Location Filter Selector */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', background: 'rgba(255,255,255,0.02)', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
        <span style={{ fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <MapPin size={16} color="var(--primary)" /> Training Center:
        </span>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {['All', 'Charleston', 'Columbia', 'Spartanburg'].map(loc => (
            <button 
              key={loc}
              className={filterLocation === loc ? 'btn-primary' : 'btn-secondary'}
              style={{ padding: '0.35rem 0.75rem', fontSize: '0.85rem', cursor: 'pointer' }}
              onClick={() => {
                setFilterLocation(loc);
                setSelectedSubmission(null);
              }}
            >
              {loc}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Selectors */}
      <div style={{ display: 'flex', gap: '1rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
        <button 
          className={activeTab === 'briefcase' ? 'btn-primary' : 'btn-secondary'}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.5rem 1rem', cursor: 'pointer' }}
          onClick={() => setActiveTab('briefcase')}
        >
          Briefcase Reports
        </button>
        <button 
          className={activeTab === 'submissions' ? 'btn-primary' : 'btn-secondary'}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.5rem 1rem', cursor: 'pointer' }}
          onClick={() => setActiveTab('submissions')}
        >
          Pending Trades {submissions.length > 0 && <span style={{ background: 'var(--danger)', color: 'white', padding: '0.1rem 0.4rem', borderRadius: '50%', fontSize: '0.75rem' }}>{submissions.length}</span>}
        </button>
        <button 
          className={activeTab === 'matrix' ? 'btn-primary' : 'btn-secondary'}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.5rem 1rem', cursor: 'pointer' }}
          onClick={() => setActiveTab('matrix')}
        >
          Trades Matrix
        </button>

      </div>

      {/* TAB 1: BRIEFCASE REPORTS */}
      {activeTab === 'briefcase' && (
        <div>
          {Object.keys(groupedByLocation).length === 0 ? (
            <p className="text-muted">No participants found.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {Object.entries(groupedByLocation).map(([location, users]) => (
                <div key={location} className="glass-card" style={{ padding: '1.5rem', border: '1px solid var(--border-color)' }}>
                  <h2 style={{ borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)' }}>
                    <MapPin size={24} /> {location}
                  </h2>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {users.map((user) => (
                      <div key={user.id} style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
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
                              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem', color: 'var(--primary)' }}>Outstanding Needs</h4>
                              <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.85rem' }}>
                                {getMissingNeeds(user).length > 0 ? (
                                  getMissingNeeds(user).map((need, idx) => <li key={idx}>{need}</li>)
                                ) : (
                                  <li style={{ color: 'var(--success)', listStyle: 'none', marginLeft: '-1.25rem' }}>All basic needs met</li>
                                )}
                              </ul>
                            </div>

                            <div>
                              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem', color: 'var(--warning)' }}>Legal Requirements</h4>
                              <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.85rem' }}>
                                {getActiveLegalReqs(user).length > 0 ? (
                                  getActiveLegalReqs(user).map((req, idx) => <li key={idx} style={{ color: 'var(--warning)' }}>{req}</li>)
                                ) : (
                                  <li style={{ color: 'var(--text-muted)', listStyle: 'none', marginLeft: '-1.25rem' }}>None recorded</li>
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
                              <p style={{ margin: 0, fontSize: '0.85rem', fontStyle: user.coreStability?.housingPlan ? 'normal' : 'italic', color: user.coreStability?.housingPlan ? 'inherit' : 'var(--text-muted)' }}>
                                {user.coreStability?.housingPlan || 'Not provided'}
                              </p>
                            </div>
                            
                            <div>
                              <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.95rem' }}>Transportation Plan</h4>
                              <p style={{ margin: 0, fontSize: '0.85rem', fontStyle: user.coreStability?.transportationPlan ? 'normal' : 'italic', color: user.coreStability?.transportationPlan ? 'inherit' : 'var(--text-muted)' }}>
                                {user.coreStability?.transportationPlan || 'Not provided'}
                              </p>
                            </div>

                            <div>
                              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem' }}>Recent Activity Log</h4>
                              <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.85rem' }}>
                                {user.dailyActivityLog && user.dailyActivityLog.length > 0 ? (
                                  user.dailyActivityLog.slice(-4).reverse().map((log, idx) => (
                                    <li key={idx}>{log.date}: {log.activity}</li>
                                  ))
                                ) : (
                                  <li style={{ color: 'var(--text-muted)', listStyle: 'none', marginLeft: '-1.25rem' }}>No recent activity recorded</li>
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
      )}

      {/* TAB 2: PENDING TRADES SIGN-OFF */}
      {activeTab === 'submissions' && (
        <div style={{ display: 'grid', gridTemplateColumns: selectedSubmission ? '1fr 450px' : '1fr', gap: '1.5rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid var(--border-color)' }}>
            <h2 style={{ margin: '0 0 1rem 0', color: 'var(--primary)' }}>Pending Trades Sign-Off ({submissions.length})</h2>
            
            {submissions.length === 0 ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                No pending workorders awaiting sign-off.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {submissions.map(sub => {
                  const isSelected = selectedSubmission?.user.id === sub.user.id && selectedSubmission?.workorder.num === sub.workorder.num;
                  return (
                    <div 
                      key={`${sub.user.id}_${sub.workorder.num}`}
                      style={{ 
                        padding: '1rem',
                        borderRadius: '6px',
                        border: '1px solid var(--border-color)',
                        borderLeft: '5px solid var(--warning)',
                        background: isSelected ? 'rgba(245, 158, 11, 0.05)' : 'rgba(255,255,255,0.01)',
                        cursor: 'pointer'
                      }}
                      onClick={() => setSelectedSubmission(sub)}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <strong style={{ fontSize: '1rem' }}>{sub.user.name}</strong> 
                          <span style={{ fontSize: '0.75rem', background: 'rgba(79, 70, 229, 0.1)', padding: '0.15rem 0.4rem', borderRadius: '4px', marginLeft: '6px', color: 'var(--primary)' }}>{sub.user.location}</span>
                          <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                            {sub.station.name} — Workorder #{sub.workorder.num}: {sub.workorder.title}
                          </p>
                        </div>
                        <button className="btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', cursor: 'pointer' }}>Review</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Submission Details Inspector */}
          {selectedSubmission && (
            <div className="glass-card" style={{ padding: '1.5rem', border: '2px solid var(--warning)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                <div>
                  <h3 style={{ margin: 0 }}>{selectedSubmission.user.name}</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>WO #{selectedSubmission.workorder.num}: {selectedSubmission.workorder.title}</span>
                </div>
                <button className="btn-secondary" style={{ padding: '0.2rem 0.5rem', fontSize: '0.8rem', cursor: 'pointer' }} onClick={() => setSelectedSubmission(null)}>
                  Close
                </button>
              </div>

              {/* Research Answers */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <h4 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--primary)' }}>
                  <Search size={16} /> Google Research Review
                </h4>
                
                <div style={{ background: 'rgba(0,0,0,0.15)', padding: '0.75rem', borderRadius: '6px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Q1: {selectedSubmission.workorder.q1}</span>
                  <p style={{ margin: '4px 0 8px 0', fontSize: '0.875rem', color: 'var(--primary)' }}>"{selectedSubmission.progress.answers.a1}"</p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 'bold' }}>Correct Answer Guide: {selectedSubmission.workorder.a1}</span>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.15)', padding: '0.75rem', borderRadius: '6px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Q2: {selectedSubmission.workorder.q2}</span>
                  <p style={{ margin: '4px 0 8px 0', fontSize: '0.875rem', color: 'var(--primary)' }}>"{selectedSubmission.progress.answers.a2}"</p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 'bold' }}>Correct Answer Guide: {selectedSubmission.workorder.a2}</span>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.15)', padding: '0.75rem', borderRadius: '6px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Q3: {selectedSubmission.workorder.q3}</span>
                  <p style={{ margin: '4px 0 8px 0', fontSize: '0.875rem', color: 'var(--primary)' }}>"{selectedSubmission.progress.answers.a3}"</p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 'bold' }}>Correct Answer Guide: {selectedSubmission.workorder.a3}</span>
                </div>
              </div>

              {/* Progress summary */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
                <div style={{ background: 'rgba(0,0,0,0.1)', padding: '0.5rem', borderRadius: '4px', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.75rem', display: 'block' }}>Steps Checked</span>
                  <strong style={{ fontSize: '1.25rem', color: 'var(--success)' }}>
                    {selectedSubmission.progress.stepsCompleted.length} / {selectedSubmission.workorder.steps.length}
                  </strong>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.1)', padding: '0.5rem', borderRadius: '4px', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.75rem', display: 'block' }}>Sign-offs Checked</span>
                  <strong style={{ fontSize: '1.25rem', color: 'var(--warning)' }}>
                    {selectedSubmission.progress.signoffChecked.length} / {selectedSubmission.workorder.signoff.length}
                  </strong>
                </div>
              </div>

              {/* Sign off button */}
              <button 
                className="btn-primary" 
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '0.75rem', fontSize: '1rem', color: 'white', background: 'var(--success)', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                onClick={() => handleApprove(selectedSubmission.user.id, selectedSubmission.workorder.num)}
              >
                <Award size={20} /> Approve & Sign-Off Workorder
              </button>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: TRADES MATRIX */}
      {activeTab === 'matrix' && (
        <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid var(--border-color)', overflowX: 'auto' }}>
          <h2 style={{ margin: '0 0 0.5rem 0', color: 'var(--primary)' }}>Participant Progress Matrix (90 Labs)</h2>
          <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>A comprehensive overview of completed workorders across all workstations.</p>

          {filteredParticipants.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>No participants found.</div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-color)', textAlign: 'left', background: 'rgba(255,255,255,0.02)' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>Name</th>
                  <th style={{ padding: '0.75rem' }}>Location</th>
                  <th style={{ padding: '0.75rem' }}>Completion</th>
                  <th style={{ padding: '0.75rem', width: '65%' }}>Approved Workorder Badges</th>
                </tr>
              </thead>
              <tbody>
                {filteredParticipants.map(p => {
                  const totalCompleted = Object.values(p.wo_progress || {}).filter(w => w.status === 'approved').length;
                  const totalSubmitted = Object.values(p.wo_progress || {}).filter(w => w.status === 'submitted').length;
                  const progressPercent = Math.round((totalCompleted / 90) * 100);

                  return (
                    <tr key={p.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '1rem', fontWeight: 'bold' }}>{p.firstName} {p.lastName}</td>
                      <td style={{ padding: '1rem' }}>
                        <span style={{ fontSize: '0.75rem', background: 'rgba(79, 70, 229, 0.1)', padding: '0.15rem 0.4rem', borderRadius: '4px', color: 'var(--primary)' }}>{p.location}</span>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <strong>{totalCompleted} / 90</strong> ({progressPercent}%)
                        {totalSubmitted > 0 && <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--warning)' }}>({totalSubmitted} pending)</span>}
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                          {Object.entries(p.wo_progress || {}).map(([num, wData]) => {
                            const isApproved = wData.status === 'approved';
                            return (
                              <span 
                                key={num}
                                style={{ 
                                  fontSize: '0.7rem', 
                                  padding: '0.15rem 0.35rem', 
                                  background: isApproved ? 'var(--success)' : 'var(--warning)', 
                                  color: 'white', 
                                  borderRadius: '4px',
                                  cursor: 'help'
                                }}
                                title={`WO #${num} - Status: ${wData.status}`}
                              >
                                #{num}
                              </span>
                            );
                          })}
                          {Object.keys(p.wo_progress || {}).length === 0 && (
                            <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>No active workorders</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      )}
      

    </div>
  );
};

export default Admin;
// force reload
