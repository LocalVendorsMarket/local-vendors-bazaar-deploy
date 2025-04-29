import React from 'react';
import logo from '../assets/logo.png';

const ThankYouPage = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', color: 'white' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <h1 style={{ marginLeft: '1rem', fontSize: '1.5rem' }}>Local Vendors Bazaar</h1>
      </header>

      {/* Thank You Content */}
      <main style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '2rem' }}>
        <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#2b9348', fontSize: '2rem', marginBottom: '1rem' }}>Thank You for Signing Up!</h2>
          <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '2rem' }}>
            We’ve received your vendor application and will review it shortly.  
            You’ll get a confirmation email once your listing is active.
          </p>
          <a href="/" style={buttonStyle}>Back to Home</a>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', textAlign: 'center', padding: '1rem' }}>
        <p style={{ fontSize: '12px' }}>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>

    </div>
  );
};

const buttonStyle = {
  backgroundColor: '#2b9348',
  color: 'white',
  padding: '0.75rem 1.5rem',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1rem',
};

export default ThankYouPage;




















