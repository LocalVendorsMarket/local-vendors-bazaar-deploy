import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient'; // ✅ NEW
import logo from '../assets/logo.png';

const VendorLoginPage = () => {
  const [vendorId, setVendorId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    // ✅ Query Supabase for a matching vendor
    const { data, error: queryError } = await supabase
      .from('vendors')
      .select('*')
      .eq('vendor_id', vendorId)
      .eq('password', password)
      .single();

    if (queryError || !data) {
      setError('Invalid Vendor ID or Password. Please try again.');
    } else {
      console.log('✅ Login successful:', data);
      navigate('/vendor-dashboard');
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
          <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>Local Vendors Bazaar</span>
        </a>
        <nav style={{ display: 'flex', gap: '15px' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/shop" style={navLinkStyle}>Shop</a>
          <a href="/vendor-login" style={navLinkStyle}>Vendor Login</a>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px' }}>🛒</a>
        </nav>
      </header>

      {/* Login Form */}
      <main style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', maxWidth: '500px', width: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <h1 style={{ color: '#003366', marginBottom: '1.5rem' }}>Vendor Login</h1>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" value={vendorId} onChange={(e) => setVendorId(e.target.value)} placeholder="Vendor ID" required style={inputStyle} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required style={inputStyle} />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button type="submit" style={buttonStyle}>Login</button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', textAlign: 'center', padding: '1rem' }}>
        <p style={{ fontSize: '0.9rem' }}>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px' };
const inputStyle = { padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' };
const buttonStyle = { backgroundColor: '#003366', color: 'white', padding: '0.75rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' };

export default VendorLoginPage;

















