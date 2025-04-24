import React from 'react';

const Home = ({ cart }) => {
  const navLinkStyle = {
    margin: '0 10px',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
  };

  const inputStyle = {
    padding: '6px 10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '14px',
    marginLeft: '10px',
  };

  const searchButtonStyle = {
    padding: '6px 12px',
    backgroundColor: '#40916c',
    color: '#fff',
    borderRadius: '8px',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginLeft: '10px',
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/assets/logo.png"
            alt="Local Vendors Bazaar Logo"
            style={{ width: '40px', marginRight: '10px' }}
          />
          <div style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>LocalVendorsBazaar</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/faq" style={navLinkStyle}>FAQ</a>
          <a href="/blog" style={navLinkStyle}>Blog</a>
          <a href="/contact" style={navLinkStyle}>Contact</a>
          <a href="/signup" style={navLinkStyle}>Become a Vendor</a>
          <a href="/shop" style={navLinkStyle}>Shop</a>
          <a href="/cart" style={navLinkStyle}>
            <span style={{ filter: 'brightness(0) invert(1)' }}>🛒</span> {cart?.length > 0 && `(${cart.length})`}
          </a>
          <input type="text" placeholder="Search products..." style={inputStyle} />
          <input type="text" placeholder="Zip Code" style={{ ...inputStyle, width: '100px' }} />
          <button style={searchButtonStyle}>Search</button>
        </div>
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





















