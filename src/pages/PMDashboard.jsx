import React, { useState, useEffect } from 'react';
import { getAlerts, resolveAlert, getReports, getAllParticipantsProgress, approveWorkorder, useAuth } from '../store';
import { WORKORDERS, STATIONS } from '../data/curriculumData';
import { AlertCircle, CheckCircle, Clock, List, LayoutGrid, Check, FileText, Search, User, Award, ShieldAlert, MapPin } from 'lucide-react';

export default function PMDashboard() {
  const { user: pmUser } = useAuth();
  const [activeTab, setActiveTab] = useState('alerts'); // alerts, submissions, matrix
  const [filterLocation, setFilterLocation] = useState('All');
  
  // Existing state
  const [alerts, setAlerts] = useState([]);
  const [reports, setReports] = useState([]);
  
  // Curriculum state
  const [progressData, setProgressData] = useState([]);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setAlerts(getAlerts().reverse());
    setReports(getReports().reverse());
    loadCurriculumProgress();
  }, []);

  const loadCurriculumProgress = async () => {
    setIsLoading(true);
    const data = await getAllParticipantsProgress();
    setProgressData(data);
    setIsLoading(false);
  };

  const handleResolve = (id) => {
    resolveAlert(id);
    setAlerts(getAlerts().reverse());
  };

  const handleApprove = async (userId, workorderNum) => {
    if (!pmUser) return;
    await approveWorkorder(userId, workorderNum, pmUser.name);
    await loadCurriculumProgress();
    setSelectedSubmission(null);
  };

  // --- FILTERS BY CENTER LOCATION ---
  const getFilteredAlerts = () => {
    const pending = alerts.filter(a => a.status === 'pending');
    if (filterLocation === 'All') return pending;
    return pending.filter(a => {
      const part = progressData.find(p => p.user.id === a.participantId);
      return part?.user.location === filterLocation;
    });
  };

  const getFilteredReports = () => {
    if (filterLocation === 'All') return reports;
    return reports.filter(r => {
      const part = progressData.find(p => p.user.id === r.participantId);
      return part?.user.location === filterLocation;
    });
  };

  const getSubmissions = () => {
    const list = [];
    for (const participant of progressData) {
      if (filterLocation !== 'All' && participant.user.location !== filterLocation) {
        continue;
      }
      for (const [num, statusData] of Object.entries(participant.workorders)) {
        if (statusData.status === 'submitted') {
          const wo = WORKORDERS.find(w => w.num === parseInt(num));
          const station = STATIONS.find(s => s.id === wo.station);
          list.push({
            user: participant.user,
            workorder: wo,
            station,
            progress: statusData
          });
        }
      }
    }
    return list.sort((a, b) => new Date(b.progress.submittedAt) - new Date(a.progress.submittedAt));
  };

  const getFilteredProgressData = () => {
    if (filterLocation === 'All') return progressData;
    return progressData.filter(p => p.user.location === filterLocation);
  };

  const activeAlerts = getFilteredAlerts();
  const activeReports = getFilteredReports();
  const submissions = getSubmissions();
  const filteredProgressData = getFilteredProgressData();

  return (
    <div className="container">
      <div className="flex justify-between items-center no-print" style={{ marginBottom: 'var(--spacing-xl)' }}>
        <div>
          <h1>Program Manager Dashboard</h1>
          <p className="text-muted">Monitor participant alerts, sign-off trade workorders, and audit curriculum progress.</p>
        </div>
        <button 
          className="btn btn-outline" 
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          onClick={loadCurriculumProgress}
          disabled={isLoading}
        >
          {isLoading ? 'Syncing...' : 'Sync Cloud Data'}
        </button>
      </div>

      {/* Center Location Filter Selector */}
      <div className="flex items-center gap-md no-print" style={{ marginBottom: 'var(--spacing-lg)', background: 'rgba(0,0,0,0.15)', padding: '0.75rem 1.25rem', borderRadius: '8px' }}>
        <span style={{ fontWeight: 'bold', fontSize: '0.9rem', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <MapPin size={16} /> Filter by Training Center:
        </span>
        <div className="flex gap-sm">
          {['All', 'Charleston', 'Columbia', 'Spartanburg'].map(loc => (
            <button 
              key={loc}
              className={`btn ${filterLocation === loc ? 'btn-primary' : 'btn-outline'}`}
              style={{ padding: '0.35rem 0.75rem', fontSize: '0.85rem' }}
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

      {/* Tabs */}
      <div className="flex gap-md no-print" style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: 'var(--spacing-lg)' }}>
        <button 
          className={`btn ${activeTab === 'alerts' ? 'btn-primary' : 'btn-outline'}`}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.5rem 1.25rem' }}
          onClick={() => setActiveTab('alerts')}
        >
          <AlertCircle size={16} /> Alerts & Daily Reports {activeAlerts.length > 0 && <span className="badge bg-danger" style={{ color: 'white', marginLeft: '4px' }}>{activeAlerts.length}</span>}
        </button>
        <button 
          className={`btn ${activeTab === 'submissions' ? 'btn-primary' : 'btn-outline'}`}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.5rem 1.25rem' }}
          onClick={() => setActiveTab('submissions')}
        >
          <CheckSquare size={16} /> Trades Submissions {submissions.length > 0 && <span className="badge bg-warning" style={{ color: 'white', marginLeft: '4px' }}>{submissions.length}</span>}
        </button>
        <button 
          className={`btn ${activeTab === 'matrix' ? 'btn-primary' : 'btn-outline'}`}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.5rem 1.25rem' }}
          onClick={() => setActiveTab('matrix')}
        >
          <LayoutGrid size={16} /> Progress Matrix
        </button>
      </div>

      {/* TAB 1: ALERTS & DAILY REPORTS */}
      {activeTab === 'alerts' && (
        <div className="grid grid-cols-2 gap-lg animate-fadeIn">
          <div className="glass-panel">
            <h2 className="flex items-center gap-sm" style={{ margin: '0 0 var(--spacing-md) 0' }}>
              <ShieldAlert color="var(--accent-danger)" /> Pending Alerts ({activeAlerts.length})
            </h2>
            <p className="text-muted" style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem' }}>
              Missing items in checklists for {filterLocation === 'All' ? 'all centers' : filterLocation}.
            </p>
            
            {activeAlerts.length === 0 ? (
              <div className="card text-center text-muted" style={{ padding: '2rem' }}>No pending alerts. All good!</div>
            ) : (
              <div className="flex-col gap-sm">
                {activeAlerts.map(alert => (
                  <div key={alert.id} className="card" style={{ borderLeft: '4px solid var(--accent-danger)', padding: '1rem' }}>
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 style={{ margin: 0 }}>{alert.participantName}</h4>
                        <p className="text-muted" style={{ fontSize: '0.875rem', margin: '4px 0' }}>
                          Missing: <strong>{alert.item}</strong> ({alert.section})
                        </p>
                        <p className="text-muted" style={{ fontSize: '0.75rem', margin: 0 }}>
                          {new Date(alert.date).toLocaleString()}
                        </p>
                      </div>
                      <button className="btn btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }} onClick={() => handleResolve(alert.id)}>
                        <CheckCircle size={14} /> Resolve
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="glass-panel">
            <h2 className="flex items-center gap-sm" style={{ margin: '0 0 var(--spacing-md) 0' }}>
              <Clock color="var(--accent-primary)" /> Recent Daily Reviews
            </h2>
            <p className="text-muted" style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem' }}>
              End of session reviews submitted by participants in {filterLocation === 'All' ? 'all centers' : filterLocation}.
            </p>

            {activeReports.length === 0 ? (
              <div className="card text-center text-muted" style={{ padding: '2rem' }}>No reports submitted yet.</div>
            ) : (
              <div className="flex-col gap-sm">
                {activeReports.map(report => (
                  <div key={report.id} className="card" style={{ padding: '1rem' }}>
                    <h4 style={{ margin: 0 }}>{report.participantName}</h4>
                    <p className="text-muted" style={{ fontSize: '0.75rem', marginBottom: '0.5rem', marginTop: '2px' }}>
                      {new Date(report.date).toLocaleString()}
                    </p>
                    <div>
                      <strong style={{ fontSize: '0.85rem' }}>Completed Items:</strong>
                      <ul style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', marginBottom: '0.5rem', marginTop: '4px' }}>
                        {report.completedItems.length > 0 ? (
                          report.completedItems.map((item, idx) => <li key={idx}>{item}</li>)
                        ) : (
                          <li>None specified</li>
                        )}
                      </ul>
                    </div>
                    {report.notes && (
                      <div>
                        <strong style={{ fontSize: '0.85rem' }}>Notes:</strong>
                        <p style={{ fontSize: '0.85rem', fontStyle: 'italic', background: 'rgba(0,0,0,0.1)', padding: '0.5rem', borderRadius: '4px', marginTop: '4px', marginBottom: 0 }}>
                          "{report.notes}"
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: TRADES SUBMISSIONS REVIEW */}
      {activeTab === 'submissions' && (
        <div className="grid animate-fadeIn" style={{ gridTemplateColumns: selectedSubmission ? '1fr 500px' : '1fr', gap: 'var(--spacing-lg)' }}>
          {/* List of submissions */}
          <div className="glass-panel">
            <h2 style={{ margin: '0 0 var(--spacing-md) 0' }}>Pending Trade Workorders ({submissions.length})</h2>
            <p className="text-muted" style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem' }}>
              Awaiting sign-off in {filterLocation === 'All' ? 'all centers' : filterLocation}.
            </p>

            {submissions.length === 0 ? (
              <div className="card text-center text-muted" style={{ padding: '3rem' }}>
                No pending workorders awaiting sign-off. Nice work!
              </div>
            ) : (
              <div className="flex-col gap-sm">
                {submissions.map(sub => {
                  const isSelected = selectedSubmission?.user.id === sub.user.id && selectedSubmission?.workorder.num === sub.workorder.num;
                  return (
                    <div 
                      key={`${sub.user.id}_${sub.workorder.num}`}
                      className="card card-interactive flex justify-between items-center"
                      style={{ 
                        padding: '1.25rem',
                        borderLeft: '5px solid var(--accent-warning)',
                        backgroundColor: isSelected ? 'rgba(245, 158, 11, 0.05)' : '',
                        borderColor: isSelected ? 'var(--accent-warning)' : ''
                      }}
                      onClick={() => setSelectedSubmission(sub)}
                    >
                      <div>
                        <div className="flex items-center gap-sm">
                          <User size={16} className="text-muted" />
                          <h4 style={{ margin: 0 }}>{sub.user.name} <span style={{ fontSize: '0.75rem', fontWeight: 'normal', color: 'var(--accent-primary)', background: 'rgba(232, 74, 30, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px', marginLeft: '6px' }}>{sub.user.location}</span></h4>
                        </div>
                        <p className="text-muted" style={{ fontSize: '0.85rem', margin: '4px 0' }}>
                          <strong>{sub.station.name}</strong> — WO #{sub.workorder.num}: {sub.workorder.title}
                        </p>
                        <span className="text-muted" style={{ fontSize: '0.75rem' }}>
                          Submitted: {new Date(sub.progress.submittedAt).toLocaleString()}
                        </span>
                      </div>
                      <button className="btn btn-warning" style={{ color: 'white', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
                        Review Sheet
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Submission Details Inspector */}
          {selectedSubmission && (
            <div className="glass-panel flex-col gap-md animate-fadeIn" style={{ border: '2px solid var(--accent-warning)' }}>
              <div className="flex justify-between items-center" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                <div>
                  <h3 style={{ margin: 0 }}>{selectedSubmission.user.name}</h3>
                  <span className="text-muted" style={{ fontSize: '0.8rem' }}>WO #{selectedSubmission.workorder.num}: {selectedSubmission.workorder.title}</span>
                </div>
                <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }} onClick={() => setSelectedSubmission(null)}>
                  Close
                </button>
              </div>

              {/* Research Answers */}
              <div className="flex-col gap-sm">
                <h4 className="flex items-center gap-xs text-primary" style={{ margin: 0 }}>
                  <Search size={16} /> Google Research Review
                </h4>
                
                <div style={{ background: 'rgba(0,0,0,0.1)', padding: '0.75rem', borderRadius: '6px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Q1: {selectedSubmission.workorder.q1}</span>
                  <p style={{ margin: '4px 0 8px 0', fontSize: '0.875rem', color: 'var(--accent-primary)' }}>"{selectedSubmission.progress.answers.a1}"</p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-success)', fontWeight: 'bold' }}>Correct Answer Guide: {selectedSubmission.workorder.a1}</span>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.1)', padding: '0.75rem', borderRadius: '6px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Q2: {selectedSubmission.workorder.q2}</span>
                  <p style={{ margin: '4px 0 8px 0', fontSize: '0.875rem', color: 'var(--accent-primary)' }}>"{selectedSubmission.progress.answers.a2}"</p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-success)', fontWeight: 'bold' }}>Correct Answer Guide: {selectedSubmission.workorder.a2}</span>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.1)', padding: '0.75rem', borderRadius: '6px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Q3: {selectedSubmission.workorder.q3}</span>
                  <p style={{ margin: '4px 0 8px 0', fontSize: '0.875rem', color: 'var(--accent-primary)' }}>"{selectedSubmission.progress.answers.a3}"</p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-success)', fontWeight: 'bold' }}>Correct Answer Guide: {selectedSubmission.workorder.a3}</span>
                </div>
              </div>

              {/* Progress summary */}
              <div className="grid grid-cols-2 gap-sm" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
                <div style={{ background: 'rgba(0,0,0,0.05)', padding: '0.5rem', borderRadius: '4px', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.75rem', display: 'block' }}>Steps Checked</span>
                  <strong style={{ fontSize: '1.25rem', color: 'var(--accent-success)' }}>
                    {selectedSubmission.progress.stepsCompleted.length} / {selectedSubmission.workorder.steps.length}
                  </strong>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.05)', padding: '0.5rem', borderRadius: '4px', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.75rem', display: 'block' }}>Sign-offs Checked</span>
                  <strong style={{ fontSize: '1.25rem', color: 'var(--accent-warning)' }}>
                    {selectedSubmission.progress.signoffChecked.length} / {selectedSubmission.workorder.signoff.length}
                  </strong>
                </div>
              </div>

              {/* Sign off button */}
              <button 
                className="btn btn-success" 
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '0.75rem', fontSize: '1rem', color: 'white' }}
                onClick={() => handleApprove(selectedSubmission.user.id, selectedSubmission.workorder.num)}
              >
                <Award size={20} /> Approve & Sign-Off Workorder
              </button>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: PROGRESS MATRIX */}
      {activeTab === 'matrix' && (
        <div className="glass-panel animate-fadeIn">
          <h2 style={{ margin: '0 0 var(--spacing-md) 0' }}>Participant Progress Matrix (90 Labs)</h2>
          <p className="text-muted" style={{ marginBottom: 'var(--spacing-lg)', fontSize: '0.9rem' }}>
            Overview of participants registered at <strong>{filterLocation === 'All' ? 'all centers' : filterLocation}</strong>.
          </p>

          {filteredProgressData.length === 0 ? (
            <div className="card text-center text-muted" style={{ padding: '3rem' }}>No participants registered for this location.</div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border-color)', textAlign: 'left', background: 'rgba(0,0,0,0.2)' }}>
                    <th style={{ padding: '0.75rem 1rem' }}>Participant Name</th>
                    <th style={{ padding: '0.75rem' }}>Location</th>
                    <th style={{ padding: '0.75rem' }}>Completion Rate</th>
                    <th style={{ padding: '0.75rem', width: '60%' }}>Completed Workorder Badges</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProgressData.map(part => {
                    const totalCompleted = Object.values(part.workorders).filter(w => w.status === 'approved').length;
                    const totalSubmitted = Object.values(part.workorders).filter(w => w.status === 'submitted').length;
                    const progressPercent = Math.round((totalCompleted / 90) * 100);
                    
                    return (
                      <tr key={part.user.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                        <td style={{ padding: '1rem', fontWeight: 'bold' }}>
                          {part.user.name}
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <span className="badge" style={{ background: 'rgba(232, 74, 30, 0.1)', color: 'var(--accent-primary)' }}>
                            {part.user.location}
                          </span>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <strong>{totalCompleted} / 90</strong> ({progressPercent}%)
                          {totalSubmitted > 0 && <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--accent-warning)' }}>({totalSubmitted} pending)</span>}
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <div className="flex gap-xs" style={{ flexWrap: 'wrap' }}>
                            {Object.entries(part.workorders).map(([num, wData]) => {
                              const isApproved = wData.status === 'approved';
                              return (
                                <span 
                                  key={num} 
                                  className="badge" 
                                  style={{ 
                                    fontSize: '0.7rem', 
                                    padding: '0.15rem 0.35rem', 
                                    background: isApproved ? 'var(--accent-success)' : 'var(--accent-warning)',
                                    color: 'white',
                                    borderRadius: '4px'
                                  }}
                                  title={`WO #${num} - Status: ${wData.status}`}
                                >
                                  #{num}
                                </span>
                              );
                            })}
                            {Object.keys(part.workorders).length === 0 && (
                              <span className="text-muted" style={{ fontStyle: 'italic' }}>No workorders active yet</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Simple internal checksquare wrapper since it's a separate file import
function CheckSquare(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
