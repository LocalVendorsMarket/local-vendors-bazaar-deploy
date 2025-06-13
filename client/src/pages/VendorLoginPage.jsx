// src/pages/VendorLoginPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VendorLoginPage() {
  console.log("✅ VendorLoginPage loaded");

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // For now: simulate a successful login
    if (email === 'vendor@example.com' && password === 'password') {
      localStorage.setItem('vendorLoggedIn', 'true');
      navigate('/vendor-dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form
        onSubmit={handleLogin}
        style={{
          background: '#f4f4f4',
          padding: 30,
          borderRadius: 8,
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: 400
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Vendor Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div style={{ marginBottom: 15 }}>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>
        <div style={{ marginBottom: 15 }}>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: 10 }}>Login</button>
      </form>
    </div>
  );
}

export default VendorLoginPage;



























