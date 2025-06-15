import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

function VendorLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'vendor@example.com' && password === 'password') {
      localStorage.setItem('vendorLoggedIn', 'true');
      navigate('/vendor-dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <>
      <NavigationBar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <form
          onSubmit={handleLogin}
          style={{
            background: '#f4f4f4',
            padding: 30,
            borderRadius: 8,
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            width: '100%',
            maxWidth: 400,
            marginTop: 50
          }}
        >
          <h2 style={{ textAlign: 'center' }}>Vendor Login</h2>
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          <div style={{ marginBottom: 15 }}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: 10, borderRadius: 4 }}
            />
          </div>
          <div style={{ marginBottom: 15 }}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: 10, borderRadius: 4 }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px 20px',
              backgroundColor: '#198754',
              color: 'white',
              border: 'none',
              borderRadius: 4,
              fontWeight: 'bold'
            }}
          >
            Login
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default VendorLoginPage;






























