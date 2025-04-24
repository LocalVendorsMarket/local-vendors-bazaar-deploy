import React from 'react';

const Home = ({ cart }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50" style={{ fontFamily: 'sans-serif' }}>
      {/* Navigation Bar */}
      <header
        style={{
          backgroundColor: '#2b9348',
          padding: '1rem',
          color: '#fff',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/assets/logo.png"
              alt="Local Vendors Bazaar Logo"
              style={{ width: '40px', marginRight: '10px' }}
            />
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>LocalVendorsBazaar</span>
          </div>

          {/* Navigation Links */}
          <nav style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="/" style={navLink}>Home</a>
            <a href="/faq" style={navLink}>FAQ</a>
            <a href="/blog" style={navLink}>Blog</a>
            <a href="/contact" style={navLink}>Contact</a>
            <a href="/signup" style={navLink}>Become a Vendor</a>
            <a href="/shop" style={navLink}>Shop</a>
            <a href="/cart" style={navLink}>
              <span style={{ filter: 'brightness(0) invert(1)' }}>🛒</span>{' '}
              {cart?.length > 0 && `(${cart.length})`}
            </a>
            <input type="text" placeholder="Search products..." style={inputStyle} />
            <input type="text" placeholder="Zip Code" style={{ ...inputStyle, width: '100px' }} />
            <button style={searchButtonStyle}>Search</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '2rem', maxWidth: '1024px', margin: '0 auto', textAlign: 'center' }}>
        <img
          src="/assets/logo.png"
          alt="Local Vendors Bazaar Logo"
          style={{ width: '180px', marginBottom: '1rem' }}
        />
        <h1 className="text-4xl font-bold text-green-600 mb-4">Welcome to Local Vendors Bazaar 🎉</h1>
        <p className="text-gray-600 text-lg">
          Shop and Save Locally — Supporting Chicago and Beyond!
        </p>

        <img
          src="/assets/flyer-v2.png"
          alt="Flyer"
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
            textAlign: 'center',
          }}
        >
          <h2 className="text-2xl font-semibold text-green-700">Are You a Local Vendor?</h2>
          <p className="text-gray-700 mt-2">
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

const navLink = {
  margin: '0 10px',
  color: '#fff',
  textDecoration: 'none',
  fontSize: '14px',
};

const inputStyle = {
  marginLeft: '10px',
  padding: '6px 10px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '14px',
};

const searchButtonStyle = {
  marginLeft: '10px',
  padding: '6px 12px',
  backgroundColor: '#40916c',
  color: '#fff',
  borderRadius: '8px',
  border: 'none',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default Home;


























