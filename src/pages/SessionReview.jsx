import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Send, CheckCircle } from 'lucide-react';

export default function SessionReview() {
  const { currentUser: user, logActivity } = useAppContext();
  const [completedItems, setCompletedItems] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemsList = completedItems.split(',').map(s => s.trim()).filter(Boolean).join(', ');
    const activityDesc = `Daily Review - Completed: ${itemsList || 'None'}. Notes: ${notes || 'None'}`;
    logActivity(activityDesc);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container flex-col items-center justify-center text-center" style={{ minHeight: '60vh' }}>
        <CheckCircle size={64} color="var(--accent-success)" style={{ marginBottom: 'var(--spacing-md)' }} />
        <h2>Great job today!</h2>
        <p className="text-muted">Your daily session review has been sent to your Program Manager.</p>
        <button className="btn btn-outline" style={{ marginTop: 'var(--spacing-lg)' }} onClick={() => window.location.href = '/'}>
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="container" style={{ maxWidth: '600px' }}>
      <div className="glass-panel">
        <h1 style={{ marginBottom: 'var(--spacing-md)' }}>End of Session Review</h1>
        <p className="text-muted" style={{ marginBottom: 'var(--spacing-xl)' }}>
          Take a moment to reflect on what you accomplished today. Your Program Manager will review this to track your progress.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">What items did you complete today?</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. State ID, Resume Draft, Interview Practice"
              value={completedItems}
              onChange={e => setCompletedItems(e.target.value)}
              required
            />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Separate multiple items with commas.</span>
          </div>

          <div className="form-group" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <label className="form-label">Any barriers, questions, or notes for your PM?</label>
            <textarea 
              className="form-textarea" 
              rows="4"
              placeholder="I'm still waiting on my birth certificate to arrive..."
              value={notes}
              onChange={e => setNotes(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            <Send size={18} /> Submit Daily Report
          </button>
        </form>
      </div>
    </div>
  );
}
