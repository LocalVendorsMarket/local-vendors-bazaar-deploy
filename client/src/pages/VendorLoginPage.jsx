import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const VendorLoginPage = () => {
  const [vendorId, setVendorId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate credential check
    if (vendorId === 'VEND-2025-0012' && password === 'test1234') {
      navigate('/vendor-dashboard');
    } else {
      alert('Invalid Vendor ID or Password. Please try again.');
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f0f4f8', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Nav */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
          <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
          <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Local Vendors Bazaar</span>
        </a>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="/" style={navLinkStyle}>🏠 Home</a>
          <a href="/vendor-signup" style={navLinkStyle}>🚪 Log Out</a>
        </nav>
      </header>

      {/* Form */}
      <main style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form onSubmit={handleLogin} style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
          <h2 style={{ color: '#003366', marginBottom: '1rem' }}>Vendor Login</h2>
          <input
            type="text"
            placeholder="Vendor ID"
            value={vendorId}
            onChange={(e) => setVendorId(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
      </main>
    </div>
  );
};

const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px' };
const inputStyle = { width: '100%', padding: '0.75rem', margin: '0.5rem 0', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' };
const buttonStyle = { width: '100%', backgroundColor: '#003366', color: 'white', padding: '0.75rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' };

export default VendorLoginPage;






