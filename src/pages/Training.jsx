import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { VIDEOS } from '../config/videos';
import { PlayCircle, CheckCircle, Hammer, Wrench, HardHat, Tv, CheckSquare, Sparkles } from 'lucide-react';
import VideoModal from '../components/VideoModal';
import PhoneSimulator from '../components/DigitalSimulations/PhoneSimulator';

const Training = () => {
  const { currentUser, updateSection } = useAppContext();
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeTab, setActiveTab] = useState('basics');

  if (!currentUser) return null;
  const data = currentUser.training || {};

  const handleCheck = (field) => {
    updateSection('training', { [field]: !data[field] }, `Updated external training: ${field}`);
  };

  const renderVideoList = (videos) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {videos.map((v, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.03)', padding: '1rem', borderRadius: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {data[v.field] ? <CheckCircle size={24} color="var(--success)" /> : <PlayCircle size={24} color="var(--text-muted)" />}
            <span style={{ fontWeight: 500, color: data[v.field] ? 'var(--text-primary)' : 'var(--text-primary)' }}>{v.title}</span>
          </div>
          <button onClick={() => setActiveVideo(v)} className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
            {data[v.field] ? 'Watch Again' : 'Watch Video'}
          </button>
        </div>
      ))}
    </div>
  );

  const tabs = [
    { id: 'basics', label: 'Basics', icon: <Wrench size={18} /> },
    { id: 'drywall', label: 'Drywall', icon: <Hammer size={18} /> },
    { id: 'welding', label: 'Welding', icon: <HardHat size={18} /> },
    { id: 'hvac', label: 'HVAC', icon: <Wrench size={18} /> },
    { id: 'digital', label: 'Digital Literacy', icon: <Tv size={18} /> },
    { id: 'ai', label: 'AI Training', icon: <Sparkles size={18} /> },
    { id: 'external', label: 'External Certs', icon: <CheckSquare size={18} /> }
  ];

  return (
    <div className="page-container animate-fade-in">
      {activeVideo && <VideoModal videoConfig={activeVideo} onClose={() => setActiveVideo(null)} />}
      
      <h1 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Training Modules</h1>
      <p className="text-muted" style={{ marginBottom: '2rem' }}>Complete the required trade training and safety certifications.</p>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)', marginBottom: '2rem' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.75rem 1.25rem',
              background: activeTab === tab.id ? 'var(--primary)' : 'rgba(0,0,0,0.05)',
              color: activeTab === tab.id ? 'white' : 'var(--text-primary)',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              transition: 'all 0.2s'
            }}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="glass-card">
        {activeTab === 'basics' && (
          <div>
            <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Tools & Basics</h3>
            {renderVideoList([
              VIDEOS.basicsDrillBits, VIDEOS.basicsCordlessDrills, VIDEOS.basicsHandTools, VIDEOS.basicsTapeMeasure
            ])}
          </div>
        )}

        {activeTab === 'drywall' && (
          <div>
            <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Drywall Installation</h3>
            {renderVideoList([
              VIDEOS.drywallRemove, VIDEOS.drywallTapeMud, VIDEOS.drywallAnchors, 
              VIDEOS.drywallHang, VIDEOS.drywallTypes, VIDEOS.drywallCut
            ])}
          </div>
        )}

        {activeTab === 'welding' && (
          <div>
            <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Welding Skills</h3>
            {renderVideoList([
              VIDEOS.weldingTips, VIDEOS.weldingMig, VIDEOS.weldingHelmets, 
              VIDEOS.weldingStainless, VIDEOS.weldingAluminum, VIDEOS.weldingFluxCore
            ])}
          </div>
        )}

        {activeTab === 'hvac' && (
          <div>
            <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>HVAC Systems</h3>
            {renderVideoList([
              VIDEOS.hvacBasics, VIDEOS.hvacPressures, VIDEOS.hvacCompressors, 
              VIDEOS.hvacDuctwork, VIDEOS.hvacCapacitors
            ])}
          </div>
        )}

        {activeTab === 'digital' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Digital Literacy Videos</h3>
              {renderVideoList([
                VIDEOS.digitalGmail, VIDEOS.digitalDocs, VIDEOS.digitalSheets
              ])}
            </div>
            <div style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '2rem' }}>
              <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Interactive Practice</h3>
              <p className="text-muted" style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>Use the simulator below to practice your digital skills on a simulated device.</p>
              <PhoneSimulator />
            </div>
          </div>
        )}

        {activeTab === 'ai' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>AI Training Videos</h3>
              {renderVideoList([
                VIDEOS.digitalAi
              ])}
            </div>
            <div style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '2rem' }}>
              <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Interactive AI Practice</h3>
              <p className="text-muted" style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>Use the simulator below, tap on "AI Chat", and practice communicating with an AI.</p>
              <PhoneSimulator />
            </div>
          </div>
        )}

        {activeTab === 'external' && (
          <div>
            <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>External Certifications</h3>
            <p className="text-muted" style={{ marginBottom: '1.5rem' }}>These certifications are completed outside of the app. Check the box once you have received your official certification.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <label className="checkbox-wrapper" style={{ background: 'rgba(0,0,0,0.03)', padding: '1rem', borderRadius: '8px' }}>
                <input type="checkbox" checked={data.forkliftExternal} onChange={() => handleCheck('forkliftExternal')} />
                <span style={{ fontWeight: 600 }}>Forklift Operator Certification</span>
              </label>
              <label className="checkbox-wrapper" style={{ background: 'rgba(0,0,0,0.03)', padding: '1rem', borderRadius: '8px' }}>
                <input type="checkbox" checked={data.osha10External} onChange={() => handleCheck('osha10External')} />
                <span style={{ fontWeight: 600 }}>OSHA 10 Certification</span>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Training;
