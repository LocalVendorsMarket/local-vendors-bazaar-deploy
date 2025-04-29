import React from 'react';
import logo from '../assets/logo.png';

const VendorSignupThankYouPage = ({ cart }) => {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Navigation */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', color: 'white', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
          <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>Local Vendors Bazaar</span>
        </a>
        <nav style={{ marginLeft: '2rem', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/faq" style={navLinkStyle}>FAQ</a>
          <a href="/blog" style={navLinkStyle}>Blog</a>
          <a href="/testimonials" style={navLinkStyle}>Testimonials</a>
          <a href="/contact" style={navLinkStyle}>Contact</a>
          <a href="/shop" style={navLinkStyle}>Shop</a>
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px' }}>🛒 {cart?.length > 0 && `(${cart.length})`}</a>
        </div>
      </header>

      {/* Main Thank You Content */}
      <main style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3rem 1rem', textAlign: 'center' }}>
        <div style={{ backgroundColor: 'white', padding: '3rem 2rem', borderRadius: '12px', maxWidth: '600px', width: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <h1 style={{ color: '#003366', marginBottom: '1.5rem', fontSize: '2rem' }}>Thank You for Signing Up!</h1>
          <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Your vendor application has been received.<br />
            Our team will review it and get back to you shortly.
          </p>
          <a href="/" style={buttonStyle}>Return to Home</a>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', textAlign: 'center', padding: '1.5rem 1rem', marginTop: '2rem' }}>
        <p style={{ fontSize: '0.9rem' }}>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>

    </div>
  );
};

// Styles
const navLinkStyle = { 
  color: 'white', 
  fontWeight: 'bold', 
  textDecoration: 'none', 
  fontSize: '14px' 
};

const buttonStyle = { 
  display: 'inline-block', 
  backgroundColor: '#00509e', 
  color: 'white', 
  padding: '12px 24px', 
  borderRadius: '8px', 
  textDecoration: 'none', 
  fontWeight: 'bold', 
  fontSize: '16px', 
  marginTop: '1rem' 
};

export default VendorSignupThankYouPage;

































