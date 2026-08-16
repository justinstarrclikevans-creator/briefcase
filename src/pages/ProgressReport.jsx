import React from 'react';
import { useAppContext } from '../context/AppContext';
import { ShieldCheck, HeartPulse, DollarSign, Map, Briefcase, Printer, AlertTriangle } from 'lucide-react';

const PRIORITY_ORDER = [
  { key: 'coreStability', title: 'Core Stability', icon: <ShieldCheck size={18} /> },
  { key: 'healthWellness', title: 'Health & Wellness', icon: <HeartPulse size={18} /> },
  { key: 'financial', title: 'Financial', icon: <DollarSign size={18} /> },
  { key: 'careerPlanning', title: 'Career Planning', icon: <Map size={18} /> },
  { key: 'employmentReadiness', title: 'Employment Readiness', icon: <Briefcase size={18} /> },
];

const LABELS = {
  coreStability: {
    stateId: 'State ID',
    driversLicense: 'Drivers License',
    ssnCard: 'SSN Card',
    birthCertificate: 'Birth Certificate',
    reliablePhone: 'Reliable Phone',
    professionalEmail: 'Professional Email',
    professionalVoicemail: 'Professional Voicemail',
    libraryCard: 'Library Card',
    bankAccount: 'Bank Account',
    childSupportContact: 'Child Support Contact'
  },
  healthWellness: {
    healthInsurance: 'Health Insurance',
    welvistaReferral: 'Welvista Referral',
    primaryCare: 'Primary Care',
    visionAppointment: 'Vision Appointment',
    prescriptionNeeds: 'Prescription Needs',
    medicationsCurrent: 'Medications Current',
    mentalHealthReferral: 'Mental Health Referral',
    substanceRecovery: 'Substance Recovery'
  },
  financial: {
    bankAccountOpened: 'Bank Account Opened',
    budgetWorksheetCompleted: 'Budget Worksheet Completed',
    understandingPaychecks: 'Understanding Paychecks',
    savingsGoal: 'Savings Goal',
    creditReport: 'Credit Report',
    childSupportReviewed: 'Child Support Reviewed',
    probationObligations: 'Probation Obligations'
  },
  careerPlanning: {},
  employmentReadiness: {
    resumeCompleted: 'Resume Completed',
    workplaceReferences: 'Workplace References',
    interviewPractice: 'Interview Practice',
    interviewClothing: 'Interview Clothing',
    workTools: 'Work Tools'
  }
};

export default function ProgressReport() {
  const { currentUser } = useAppContext();

  if (!currentUser) {
    return <div className="container">Please log in to view your report.</div>;
  }

  // Calculate completed and incomplete for each section
  const reportData = PRIORITY_ORDER.map(section => {
    const data = currentUser[section.key] || {};
    const labels = LABELS[section.key] || {};
    
    const completed = [];
    const incomplete = [];

    Object.keys(labels).forEach(field => {
      if (data[field] === true) {
        completed.push(labels[field]);
      } else if (data[field] === false) {
        incomplete.push(labels[field]);
      }
    });

    return { ...section, completed, incomplete };
  });

  // Determine top 3 suggested priorities
  const suggestedPriorities = [];
  for (const section of reportData) {
    for (const item of section.incomplete) {
      if (suggestedPriorities.length < 3) {
        suggestedPriorities.push({ section: section.title, item, icon: section.icon });
      }
    }
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container" style={{ maxWidth: '900px' }}>
      <div className="flex justify-between items-center no-print" style={{ marginBottom: '2rem' }}>
        <div>
          <h1 className="title">Priority Progress Report</h1>
          <p className="subtitle">Review your achievements and focus on what matters most right now.</p>
        </div>
        <button className="btn btn-primary" onClick={handlePrint} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Printer size={20} /> Print / Save PDF
        </button>
      </div>

      <div className="print-area glass-panel" style={{ padding: '3rem', backgroundColor: 'var(--bg-card)', color: 'var(--text-main)' }}>
        <div style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '2.5rem', color: 'var(--text-main)' }}>{currentUser.firstName} {currentUser.lastName}</h1>
          <p style={{ margin: '0.5rem 0 0 0', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Personal Progress & Priority Report &bull; {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Suggested Priorities */}
        {suggestedPriorities.length > 0 && (
          <div style={{ marginBottom: '3rem', backgroundColor: '#fffbeb', borderLeft: '5px solid #f59e0b', padding: '1.5rem', borderRadius: '0 8px 8px 0' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: 0, color: '#92400e', fontSize: '1.4rem' }}>
              <AlertTriangle size={24} /> Top Priorities
            </h2>
            <p style={{ color: '#b45309', marginBottom: '1rem' }}>Based on your current progress, we suggest focusing on these items next:</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {suggestedPriorities.map((priority, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', marginBottom: '0.75rem', color: '#92400e', fontWeight: 'bold' }}>
                  <span style={{ backgroundColor: '#fde68a', padding: '6px', borderRadius: '50%', display: 'flex' }}>
                    {priority.icon}
                  </span>
                  {priority.item} <span style={{ fontWeight: 'normal', color: '#b45309', fontSize: '0.9rem' }}>({priority.section})</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid grid-cols-2 gap-xl">
          {reportData.map((section, idx) => (
            <div key={idx} style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem', color: 'var(--text-main)' }}>
                <span style={{ color: 'var(--primary)' }}>{section.icon}</span> {section.title}
              </h3>
              
              <div style={{ marginTop: '1rem' }}>
                <strong style={{ color: 'var(--success)', display: 'block', marginBottom: '0.5rem' }}>Completed ✓</strong>
                {section.completed.length > 0 ? (
                  <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
                    {section.completed.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                ) : (
                  <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', margin: '0 0 1rem 0' }}>None yet</p>
                )}

                <strong style={{ color: 'var(--danger)', display: 'block', marginBottom: '0.5rem' }}>Incomplete ◯</strong>
                {section.incomplete.length > 0 ? (
                  <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-main)' }}>
                    {section.incomplete.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                ) : (
                  <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', margin: 0 }}>All items completed!</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
