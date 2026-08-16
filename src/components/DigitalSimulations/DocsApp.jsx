import React, { useState } from 'react';
import { FileText, Save, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

export default function DocsApp() {
  const { updateSection, currentUser } = useAppContext();
  const [content, setContent] = useState('');
  
  const isCompleted = currentUser?.training?.simDocs;

  const handleSave = () => {
    if (content.trim().length > 20) {
      updateSection('training', { simDocs: true }, 'Completed Google Docs Simulation');
    } else {
      alert('Please type a longer sentence (at least 20 characters) before saving.');
    }
  };

  if (isCompleted) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'white', height: '100%' }}>
        <CheckCircle2 size={48} color="var(--success)" style={{ margin: '0 auto 1rem auto' }} />
        <h3 style={{ color: '#333' }}>Document Saved!</h3>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>You successfully practiced using a word processor.</p>
        <button onClick={() => updateSection('training', { simDocs: false })} style={{ marginTop: '1rem', padding: '0.5rem 1rem', borderRadius: '20px', border: '1px solid #ccc', background: 'white', cursor: 'pointer' }}>
          Practice Again
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#f1f3f4', color: '#333' }}>
      <div style={{ padding: '0.75rem 1rem', backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e0e0e0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1a73e8' }}>
          <FileText size={20} />
          <span style={{ fontWeight: 'bold', color: '#333', fontSize: '0.9rem' }}>Cover Letter</span>
        </div>
        <button 
          onClick={handleSave}
          style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#1a73e8', color: 'white', border: 'none', padding: '0.4rem 0.75rem', borderRadius: '4px', fontSize: '0.8rem', cursor: 'pointer' }}
        >
          <Save size={14} /> Save
        </button>
      </div>
      
      {/* Toolbar fake */}
      <div style={{ display: 'flex', gap: '1rem', padding: '0.5rem 1rem', backgroundColor: 'white', borderBottom: '1px solid #e0e0e0', fontSize: '0.8rem', fontWeight: 'bold', color: '#5f6368' }}>
        <span>B</span>
        <span style={{ fontStyle: 'italic' }}>I</span>
        <span style={{ textDecoration: 'underline' }}>U</span>
      </div>

      <div style={{ flex: 1, padding: '1rem', display: 'flex', justifyContent: 'center' }}>
        <textarea 
          placeholder="Type a brief professional introduction..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ width: '100%', height: '100%', maxWidth: '800px', backgroundColor: 'white', border: '1px solid #ddd', outline: 'none', resize: 'none', padding: '1rem', fontSize: '0.9rem', fontFamily: 'serif', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
        />
      </div>
    </div>
  );
}
