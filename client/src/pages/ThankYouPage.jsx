import React from 'react';

const ThankYouPage = ({ cart }) => {
  return (
    <div
      className="min-h-screen flex flex-col items-center bg-gray-50"
      style={{ fontFamily: 'sans-serif' }}
    >
      {/* Navigation Bar */}
      <header
        style={{
          backgroundColor: '#2b9348',
          padding: '1rem',
          color: '#fff',
          width: '100%',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ marginLeft: '1rem' }}>
          <img
            src="/assets/logo.png"
            alt="Local Vendors Bazaar Logo"
            style={{ height: '40px', width: 'auto' }}
          />
        </div>

        <nav style={{ marginRight: '1rem', display: 'flex', alignItems: 'center' }}>
          <a href="/" style={linkStyle}>Home</a>
          <a href="/faq" style={linkStyle}>FAQ</a>
          <a href="/blog" style={linkStyle}>Blog</a>
          <a href="/contact" style={linkStyle}>Contact</a>
          <a href="/signup" style={linkStyle}>Become a Vendor</a>
          <a href="/shop" style={linkStyle}>Shop</a>
          <a href="/cart" style={linkStyle}>
            🛒 <span style={{ color: '#fff' }}>{cart.length > 0 ? `Cart (${cart.length})` : 'Cart'}</span>
          </a>
          <input type="text" placeholder="Search products..." style={inputStyle} />
          <input type="text" placeholder="Zip Code" style={{ ...inputStyle, width: '100px' }} />
          <button style={searchButtonStyle}>Search</button>
        </nav>
      </header>

      {/* Main Thank You Content */}
      <main className="flex flex-col items-center justify-center flex-grow p-8">
        <h1 className="text-4xl font-bold text-green-600 mb-4 text-center">
          🎉 Thank You!
        </h1>
        <p className="text-gray-600 text-lg mb-8 text-center max-w-lg">
          Your application has been submitted successfully.
          <br /> We will review and contact you shortly!
        </p>
        <a
          href="/"
          style={{
            marginTop: '1rem',
            padding: '10px 20px',
            backgroundColor: '#2b9348',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
          }}
        >
          Back to Home
        </a>
      </main>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Reusable Styles
const linkStyle = {
  margin: '0 10px',
  color: '#fff',
  textDecoration: 'none',
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

const footerStyle = {
  backgroundColor: '#f5f5f5',
  padding: '1rem',
  textAlign: 'center',
  color: '#666',
  marginTop: 'auto',
};

export default ThankYouPage;









