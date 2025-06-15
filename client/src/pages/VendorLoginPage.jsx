// src/pages/VendorLoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';

function VendorLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary login logic
    if (email === 'vendor@example.com' && password === 'password') {
      localStorage.setItem('vendorLoggedIn', 'true');
      navigate('/vendor-dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <>
      <MainNavbar />
      <div style={{ padding: '60px 20px', minHeight: '80vh', background: '#f9f9f9' }}>
        <div style={{
          maxWidth: '400px',
          margin: '0 auto',
          background: '#fff',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Vendor Login</h2>
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '15px' }}>
              <label>Email:</label><br />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Password:</label><br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#4CAF50',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VendorLoginPage;





























