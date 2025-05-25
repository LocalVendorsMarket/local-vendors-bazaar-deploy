import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AuthContext } from '../context/AuthContext';

const VendorLoginPage = () => {
  const [vendorId, setVendorId] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Temporary hardcoded credentials
    if (vendorId === 'VEND-2025-0012' && password === 'demo123') {
      login(vendorId);
      navigate('/vendor-dashboard');
    } else {
      alert('Invalid Vendor ID or password.');
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f4f4f4' }}>
      {/* Nav */}
      <header style={{ backgroundColor: '#003366', color: 'white', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
          <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>Local Vendors Bazaar</span>
        </a>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/shop" style={navLinkStyle}>Shop</a>
          <a href="/vendor-signup" style={navLinkStyle}>Become a Vendor</a>
        </nav>
      </header>

      {/* Login Form */}
      <main style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', maxWidth: '400px', width: '100%' }}>
          <h2 style={{ color: '#003366', textAlign: 'center', marginBottom: '1.5rem' }}>Vendor Login</h2>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text"
              placeholder="Vendor ID"
              value={vendorId}
              onChange={(e) => setVendorId(e.target.value)}
              style={inputStyle}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
            />
            <button type="submit" style={buttonStyle}>Login</button>
          </form>
        </div>
      </main>
    </div>
  );
};

const navLinkStyle = { color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' };
const inputStyle = { padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' };
const buttonStyle = { backgroundColor: '#003366', color: 'white', padding: '0.75rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' };

export default VendorLoginPage;



