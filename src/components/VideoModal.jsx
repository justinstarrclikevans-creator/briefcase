import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { X, CheckCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const VideoModal = ({ videoConfig, onClose }) => {
  const { updateSection, logActivity, currentUser } = useAppContext();
  const [completed, setCompleted] = useState(false);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0, // Disable controls so they can't fast forward
      disablekb: 1, // Disable keyboard controls
      modestbranding: 1,
      rel: 0,
    },
  };

  const handleEnd = () => {
    setCompleted(true);
    
    // Check if it's already completed so we don't spam the log if they watch it twice
    if (!currentUser[videoConfig.section][videoConfig.field]) {
      updateSection(videoConfig.section, { [videoConfig.field]: true });
      logActivity(`Watched video to completion: ${videoConfig.title}`);
    }
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.9)', zIndex: 1000, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div style={{ background: 'var(--bg-card)', width: '100%', maxWidth: '800px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
        <div style={{ padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)' }}>
          <h3 style={{ margin: 0 }}>{videoConfig.title}</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>
        
        <div style={{ background: 'black', position: 'relative' }}>
          <YouTube 
            videoId={videoConfig.id} 
            opts={opts} 
            onEnd={handleEnd}
            style={{ display: 'block' }}
          />
        </div>
        
        <div style={{ padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-card)' }}>
          {completed ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--success)' }}>
              <CheckCircle size={20} />
              <span>Great job! You have completed this video requirement.</span>
            </div>
          ) : (
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Please watch the video to the very end to get credit for this task.
            </p>
          )}
          
          {completed && (
            <button className="btn-primary" onClick={onClose}>
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
