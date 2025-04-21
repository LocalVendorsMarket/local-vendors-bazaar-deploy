import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const linkStyle = {
    margin: '5px 10px',
    color: '#fff',
    textDecoration: 'none',
  };

  return (
    <div
      className="App"
      style={{
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {/* Navigation Bar */}
      <header
        style={{
          backgroundColor: '#2b9348',
          padding: '1rem',
          color: '#fff',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          LocalVendorsBazaar
        </div>
        <nav
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '0.5rem',
          }}
        >
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/faq" style={linkStyle}>FAQ</Link>
          <Link to="/blog" style={linkStyle}>Blog</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
          <Link to="/signup" style={linkStyle}>Become a Vendor</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <img
          src="/assets/logo.png"
          alt="Local Vendors Bazaar Logo"
          style={{ width: '200px', marginBottom: '1rem' }}
        />
        <h1 style={{ color: '#2b9348' }}>Welcome to Local Vendors Bazaar 🎉</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Shop and Save Locally — Supporting Chicago and Beyond!
        </p>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#f5f5f5',
          padding: '1rem',
          textAlign: 'center',
          color: '#666',
          marginTop: 'auto',
        }}
      >
        <p>&copy; {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
