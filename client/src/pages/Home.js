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
          <a href="/" style={linkStyle}>Home</a>
          <a href="/faq" style={linkStyle}>FAQ</a>
          <a href="/blog" style={linkStyle}>Blog</a>
          <a href="/contact" style={linkStyle}>Contact</a>
          <a href="/signup" style={linkStyle}>Become a Vendor</a>
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

        {/* 🚀 NEW SHOP BUTTON */}
        <div style={{ marginTop: '2rem' }}>
          <Link
            to="/shop"
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: '#2b9348',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
            }}
          >
            Shop Local Products
          </Link>
        </div>

        {/* Flyer Image */}
        <img
          src="/assets/flyer-v2.png"
          alt="Local Vendors Bazaar Flyer"
          style={{
            maxWidth: '100%',
            marginTop: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        />

        {/* Vendor CTA */}
        <div
          style={{
            marginTop: '3rem',
            padding: '2rem',
            backgroundColor: '#f0fdf4',
            borderRadius: '12px',
          }}
        >
          <h2 style={{ color: '#1f7a3f' }}>Are You a Local Vendor?</h2>
          <p style={{ color: '#333', fontSize: '1.1rem' }}>
            Join our marketplace and connect with buyers near you.
          </p>
          <a
            href="/signup"
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '10px 20px',
              backgroundColor: '#2b9348',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
            }}
          >
            Become a Vendor
          </a>
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

export default Home;









