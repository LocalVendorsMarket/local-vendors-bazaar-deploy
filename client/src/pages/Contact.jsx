import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
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
          flexDirection: 'row',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/assets/logo.png"
            alt="Logo"
            style={{ width: '40px', height: '40px', marginRight: '10px' }}
          />
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
            LocalVendorsBazaar
          </div>
        </div>

        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a href="/" style={linkStyle}>Home</a>
          <a href="/faq" style={linkStyle}>FAQ</a>
          <a href="/blog" style={linkStyle}>Blog</a>
          <a href="/contact" style={linkStyle}>Contact</a>
          <a href="/signup" style={linkStyle}>Become a Vendor</a>

          {/* Search + Zip inside navbar */}
          <input
            type="text"
            placeholder="Search products..."
            style={{
              marginLeft: '10px',
              padding: '6px 10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '14px',
            }}
          />
          <input
            type="text"
            placeholder="Zip Code"
            style={{
              marginLeft: '10px',
              padding: '6px 10px',
              width: '100px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '14px',
            }}
          />
          <button
            style={{
              marginLeft: '10px',
              padding: '6px 12px',
              backgroundColor: '#40916c',
              color: '#fff',
              borderRadius: '8px',
              border: 'none',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Search
          </button>
        </nav>
      </header>

      {/* Main Contact Content */}
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ color: '#2b9348', fontSize: '2.5rem', marginBottom: '2rem' }}>
          Contact Us
        </h1>

        <div
          style={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '12px',
            maxWidth: '600px',
            margin: '0 auto',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            textAlign: 'left',
          }}
        >
          <p style={{ marginBottom: '1rem', fontSize: '1.1rem', color: '#555' }}>
            📧 Email: support@localvendorsbazaar.com
          </p>
          <p style={{ marginBottom: '1rem', fontSize: '1.1rem', color: '#555' }}>
            📞 Phone: (123) 456-7890
          </p>
          <p style={{ fontSize: '1.1rem', color: '#555' }}>
            🏢 Address: 123 Main Street, Chicago, IL 60601
          </p>
        </div>
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

export default Contact;







