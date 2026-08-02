import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Briefcase, Shield } from 'lucide-react';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const { login, currentUser } = useAppContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  React.useEffect(() => {
    if (currentUser) {
      navigate('/dashboard');
    }
  }, [currentUser, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (firstName && lastName && location) {
      setIsLoading(true);
      try {
        const res = await login(firstName, lastName, location);
        if (res && !res.success) {
          setErrorMsg(res.error || "An unknown error occurred.");
        }
      } catch (err) {
        console.error("Login Exception:", err);
        setErrorMsg("System error: " + err.message);
      }
      setIsLoading(false);
    } else {
      setErrorMsg('Please fill out all fields, including location.');
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
        {errorMsg && <div style={{ color: 'var(--danger)', marginBottom: '1rem', padding: '0.5rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px' }}>{errorMsg}</div>}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <input 
              type="text" 
              className="input-field" 
              placeholder="First Name" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <input 
              type="text" 
              className="input-field" 
              placeholder="Last Name" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <select 
              className="input-field" 
              value={location} 
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="" disabled>Select Location</option>
              <option value="Charleston">Charleston</option>
              <option value="Columbia">Columbia</option>
              <option value="Spartanburg">Spartanburg</option>
            </select>
          </div>
          
          <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Open Briefcase'}
          </button>
        </form>
        
        <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'center' }}>
          <Link to="/admin" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>
            <Shield size={16} /> Program Manager Access
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
