import React, { useState } from 'react';
import { Phone, Voicemail, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

export default function PhoneApp() {
  const { updateSection, currentUser } = useAppContext();
  const [number, setNumber] = useState('');
  const [callState, setCallState] = useState('idle'); // idle, calling, connected, voicemail
  
  const isCompleted = currentUser?.training?.simPhone;

  const handleDial = (num) => {
    if (number.length < 10) {
      setNumber(prev => prev + num);
    }
  };

  const handleCall = () => {
    if (number.length >= 7) {
      setCallState('calling');
      setTimeout(() => setCallState('voicemail'), 2000);
    }
  };

  const handleLeaveVoicemail = () => {
    updateSection('training', { simPhone: true }, 'Completed Phone Etiquette Simulation');
    setCallState('idle');
    setNumber('');
  };

  if (isCompleted && callState === 'idle') {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <CheckCircle2 size={48} color="var(--success)" style={{ margin: '0 auto 1rem auto' }} />
        <h3 style={{ color: '#333' }}>Phone Etiquette Complete!</h3>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>You successfully practiced dialing and leaving a professional voicemail.</p>
        <button onClick={() => updateSection('training', { simPhone: false })} style={{ marginTop: '1rem', padding: '0.5rem 1rem', borderRadius: '20px', border: '1px solid #ccc', background: 'white', cursor: 'pointer' }}>
          Practice Again
        </button>
      </div>
    );
  }

  if (callState === 'voicemail') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#1a1a1a', color: 'white', padding: '2rem', alignItems: 'center' }}>
        <Voicemail size={48} color="#aaa" style={{ marginBottom: '1rem' }} />
        <h2 style={{ margin: '0 0 0.5rem 0' }}>{number}</h2>
        <p style={{ color: '#aaa', margin: 0 }}>00:03</p>
        
        <div style={{ marginTop: '2rem', backgroundColor: '#333', padding: '1rem', borderRadius: '12px', fontSize: '0.9rem', lineHeight: '1.5' }}>
          <strong>Prompt:</strong> Leave a professional voicemail. Say your name, reason for calling, and your phone number.
        </div>

        <button 
          onClick={handleLeaveVoicemail}
          style={{ marginTop: 'auto', backgroundColor: 'var(--success)', color: 'white', border: 'none', padding: '1rem 2rem', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          End Call & Save Voicemail
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'white' }}>
      <div style={{ padding: '2rem 1rem 1rem 1rem', textAlign: 'center', backgroundColor: '#f9fafb' }}>
        <h3 style={{ margin: 0, color: '#333' }}>Call the Hiring Manager</h3>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.8rem', color: '#666' }}>Dial a 7 to 10 digit number and press call.</p>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
        <div style={{ fontSize: '2rem', minHeight: '3rem', fontWeight: '300', color: '#333', letterSpacing: '2px' }}>
          {number || ' '}
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((btn) => (
            <button
              key={btn}
              onClick={() => handleDial(btn.toString())}
              style={{
                width: '60px', height: '60px', borderRadius: '50%',
                backgroundColor: '#f3f4f6', border: 'none',
                fontSize: '1.5rem', color: '#333',
                cursor: 'pointer'
              }}
            >
              {btn}
            </button>
          ))}
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <button 
            onClick={handleCall}
            style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--success)', border: 'none', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
          >
            <Phone size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
