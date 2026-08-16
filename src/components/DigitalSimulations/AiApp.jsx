import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

export default function AiApp() {
  const { updateSection, currentUser } = useAppContext();
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! I am your AI assistant. How can I help you today?' }
  ]);
  
  const isCompleted = currentUser?.training?.simAi;

  const handleSend = () => {
    if (prompt.trim().length > 10) {
      setMessages([...messages, { sender: 'user', text: prompt }]);
      setPrompt('');
      
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'ai', text: "Here is a draft for your cover letter based on your request..." }]);
        updateSection('training', { simAi: true }, 'Completed AI Simulation');
      }, 1500);
    } else {
      alert('Please write a longer, more descriptive prompt for the AI (at least 10 characters).');
    }
  };

  if (isCompleted) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'white', height: '100%' }}>
        <CheckCircle2 size={48} color="var(--success)" style={{ margin: '0 auto 1rem auto' }} />
        <h3 style={{ color: '#333' }}>AI Prompt Successful!</h3>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>You successfully practiced communicating with an AI assistant.</p>
        <button onClick={() => updateSection('training', { simAi: false })} style={{ marginTop: '1rem', padding: '0.5rem 1rem', borderRadius: '20px', border: '1px solid #ccc', background: 'white', cursor: 'pointer' }}>
          Practice Again
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'white', color: '#333' }}>
      <div style={{ padding: '0.75rem 1rem', backgroundColor: '#8b5cf6', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Sparkles size={20} />
        <span style={{ fontWeight: 'bold' }}>AI Assistant</span>
      </div>

      <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: '#f9fafb' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ 
            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            backgroundColor: msg.sender === 'user' ? '#e5e7eb' : '#ede9fe',
            color: '#333',
            padding: '0.75rem',
            borderRadius: '12px',
            borderBottomRightRadius: msg.sender === 'user' ? 0 : '12px',
            borderBottomLeftRadius: msg.sender === 'ai' ? 0 : '12px',
            maxWidth: '85%',
            fontSize: '0.9rem',
            lineHeight: 1.4
          }}>
            {msg.text}
          </div>
        ))}
        {messages.length === 1 && (
           <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.8rem', color: '#888' }}>
              <strong>Task:</strong> Ask the AI to write a short cover letter for a welding position.
           </div>
        )}
      </div>

      <div style={{ padding: '0.75rem', borderTop: '1px solid #e5e7eb', backgroundColor: 'white', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <input 
          type="text" 
          placeholder="Message AI..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          style={{ flex: 1, border: '1px solid #ddd', borderRadius: '20px', padding: '0.5rem 1rem', outline: 'none', fontSize: '0.9rem' }}
        />
        <button 
          onClick={handleSend}
          style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#8b5cf6', border: 'none', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}
