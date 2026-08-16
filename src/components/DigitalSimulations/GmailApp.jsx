import React, { useState } from 'react';
import { Mail, Send, Paperclip, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

export default function GmailApp() {
  const { updateSection, currentUser } = useAppContext();
  const [to, setTo] = useState('hiring.manager@constructionco.com');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  
  const isCompleted = currentUser?.training?.simGmail;

  const handleSend = () => {
    if (subject.trim().length > 3 && body.trim().length > 10) {
      updateSection('training', { simGmail: true }, 'Completed Gmail Simulation');
    } else {
      alert('Please enter a subject and a short professional message before sending.');
    }
  };

  if (isCompleted) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'white', height: '100%' }}>
        <CheckCircle2 size={48} color="var(--success)" style={{ margin: '0 auto 1rem auto' }} />
        <h3 style={{ color: '#333' }}>Email Sent!</h3>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>You successfully practiced drafting and sending a professional email.</p>
        <button onClick={() => updateSection('training', { simGmail: false })} style={{ marginTop: '1rem', padding: '0.5rem 1rem', borderRadius: '20px', border: '1px solid #ccc', background: 'white', cursor: 'pointer' }}>
          Practice Again
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'white', color: '#333' }}>
      <div style={{ padding: '1rem', backgroundColor: '#ef4444', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Mail size={20} />
          <span style={{ fontWeight: 'bold' }}>Compose</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Paperclip size={20} />
          <Send size={20} onClick={handleSend} style={{ cursor: 'pointer' }} />
        </div>
      </div>

      <div style={{ padding: '0 1rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ borderBottom: '1px solid #eee', padding: '0.75rem 0', display: 'flex' }}>
          <span style={{ color: '#666', width: '40px' }}>To</span>
          <input 
            type="text" 
            value={to} 
            onChange={(e) => setTo(e.target.value)}
            style={{ border: 'none', outline: 'none', flex: 1, fontSize: '0.9rem' }} 
          />
        </div>
        <div style={{ borderBottom: '1px solid #eee', padding: '0.75rem 0', display: 'flex' }}>
          <span style={{ color: '#666', width: '40px' }}>Subj</span>
          <input 
            type="text" 
            placeholder="e.g. Job Application - Jane Doe"
            value={subject} 
            onChange={(e) => setSubject(e.target.value)}
            style={{ border: 'none', outline: 'none', flex: 1, fontSize: '0.9rem' }} 
          />
        </div>
        
        <div style={{ flex: 1, padding: '1rem 0' }}>
          <textarea 
            placeholder="Compose email..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            style={{ width: '100%', height: '100%', border: 'none', outline: 'none', resize: 'none', fontSize: '0.9rem', fontFamily: 'inherit' }}
          />
        </div>
      </div>
    </div>
  );
}
