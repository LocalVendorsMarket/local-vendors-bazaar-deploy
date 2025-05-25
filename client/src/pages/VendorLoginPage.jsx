import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const VendorLoginPage = () => {
  const [vendorId, setVendorId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulated credentials
    if (vendorId === 'VEND-2025-0012' && password === 'secure123') {
      localStorage.setItem('vendorAuth', JSON.stringify({ vendorId }));
      navigate('/vendor-dashboard');
    } else {
      setError('Invalid Vendor ID or Password');
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f0f4f8', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ backgroundColor: '#003366', padding: '1rem', color: 'white', display: 'flex', alignItems: 'center' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
          <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>Local Vendors Bazaar</span>
        </a>
      </header>

      <main style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', width: '100%', maxWidth: '400px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#003366', marginBottom: '1rem', textAlign: 'center' }}>Vendor Login</h2>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text"
              value={vendorId}
              onChange={(e) => setVendorId(e.target.value)}
              placeholder="Vendor ID"
              required
              style={inputStyle}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              style={inputStyle}
            />
            {error && <p style={{ color: 'red', fontSize: '0.9rem' }}>{error}</p>}
            <button type="submit" style={buttonStyle}>Log In</button>
          </form>
        </div>
      </main>
    </div>
  );
};

const inputStyle = {
  padding: '0.75rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '1rem'
};

const buttonStyle = {
  backgroundColor: '#003366',
  color: 'white',
  padding: '0.75rem',
  borderRadius: '8px',
  fontWeight: 'bold',
  fontSize: '1rem',
  cursor: 'pointer'
};

export default VendorLoginPage;

