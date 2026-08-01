import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Briefcase } from 'lucide-react';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const { login } = useAppContext();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (firstName && lastName && location) {
      login(firstName, lastName, location);
      navigate('/dashboard');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '2rem' }}>
      <div className="glass-card animate-fade-in" style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{ background: 'rgba(79, 70, 229, 0.1)', padding: '1rem', borderRadius: '50%' }}>
            <Briefcase size={48} color="var(--primary)" />
          </div>
        </div>
        <h1 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Turn90 Briefcase</h1>
        <p className="text-muted" style={{ marginBottom: '2rem' }}>Track your progress and needs.</p>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <input 
              type="text" 
              className="input-field" 
              placeholder="First Name" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)}
              required 
            />
          </div>
          <div>
            <input 
              type="text" 
              className="input-field" 
              placeholder="Last Name" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)}
              required 
            />
          </div>
          <div>
            <select 
              className="input-field" 
              value={location} 
              onChange={(e) => setLocation(e.target.value)}
              required
            >
              <option value="" disabled>Select Location</option>
              <option value="Charleston">Charleston</option>
              <option value="Columbia">Columbia</option>
              <option value="Spartanburg">Spartanburg</option>
            </select>
          </div>
          
          <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>
            Open Briefcase
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
