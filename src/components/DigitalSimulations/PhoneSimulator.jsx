import React, { useState } from 'react';
import { Phone, Mail, FileText, Grid, MessageSquare, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import PhoneApp from './PhoneApp';
import GmailApp from './GmailApp';
import DocsApp from './DocsApp';
import SheetsApp from './SheetsApp';
import AiApp from './AiApp';

export default function PhoneSimulator() {
  const { currentUser } = useAppContext();
  const [activeApp, setActiveApp] = useState(null);

  if (!currentUser) return null;
  const trainingData = currentUser.training || {};

  const apps = [
    { id: 'phone', name: 'Phone', icon: <Phone size={24} color="white" />, bg: '#34d399', field: 'simPhone' },
    { id: 'gmail', name: 'Gmail', icon: <Mail size={24} color="white" />, bg: '#ef4444', field: 'simGmail' },
    { id: 'docs', name: 'Docs', icon: <FileText size={24} color="white" />, bg: '#3b82f6', field: 'simDocs' },
    { id: 'sheets', name: 'Sheets', icon: <Grid size={24} color="white" />, bg: '#10b981', field: 'simSheets' },
    { id: 'ai', name: 'AI Chat', icon: <MessageSquare size={24} color="white" />, bg: '#8b5cf6', field: 'simAi' }
  ];

  const renderAppScreen = () => {
    switch (activeApp) {
      case 'phone': return <PhoneApp onComplete={() => {}} />;
      case 'gmail': return <GmailApp onComplete={() => {}} />;
      case 'docs': return <DocsApp onComplete={() => {}} />;
      case 'sheets': return <SheetsApp onComplete={() => {}} />;
      case 'ai': return <AiApp onComplete={() => {}} />;
      default: return null;
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '2rem 0' }}>
      {/* Smartphone Hardware Frame */}
      <div style={{ 
        width: '320px', 
        height: '650px', 
        backgroundColor: '#111',
        borderRadius: '40px',
        border: '8px solid #222',
        position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Notch */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '120px', height: '25px', backgroundColor: '#222', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', zIndex: 50 }}></div>

        {/* Screen Area */}
        <div style={{ 
          flex: 1, 
          backgroundColor: activeApp ? 'var(--bg-color)' : '#f3f4f6', 
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {activeApp ? (
            // Active App View
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ 
                height: '50px', 
                backgroundColor: 'rgba(255,255,255,0.9)', 
                display: 'flex', 
                alignItems: 'center', 
                padding: '0 1rem',
                borderBottom: '1px solid #e5e7eb',
                paddingTop: '15px'
              }}>
                <button 
                  onClick={() => setActiveApp(null)}
                  style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--primary)', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  <ArrowLeft size={16} /> Home
                </button>
              </div>
              <div style={{ flex: 1, overflowY: 'auto' }}>
                {renderAppScreen()}
              </div>
            </div>
          ) : (
            // Home Screen
            <div style={{ 
              padding: '4rem 1.5rem 2rem 1.5rem', 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundImage: 'linear-gradient(to bottom, #a7f3d0, #60a5fa)',
              color: '#333'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                  {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </div>
                <div style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                  {new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
                </div>
              </div>

              {/* App Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                {apps.map(app => (
                  <div key={app.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <div style={{ position: 'relative' }}>
                      <button
                        onClick={() => setActiveApp(app.id)}
                        style={{
                          width: '50px', height: '50px',
                          borderRadius: '12px',
                          backgroundColor: app.bg,
                          border: 'none',
                          display: 'flex', justifyContent: 'center', alignItems: 'center',
                          cursor: 'pointer',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        {app.icon}
                      </button>
                      {trainingData[app.field] && (
                        <div style={{ position: 'absolute', top: '-4px', right: '-4px', background: 'white', borderRadius: '50%' }}>
                          <CheckCircle2 size={18} color="var(--success)" />
                        </div>
                      )}
                    </div>
                    <span style={{ fontSize: '0.65rem', fontWeight: 'bold', color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>{app.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Home Bar (visual only) */}
        <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '4px', backgroundColor: '#333', borderRadius: '4px', zIndex: 50 }}></div>
      </div>
    </div>
  );
}
