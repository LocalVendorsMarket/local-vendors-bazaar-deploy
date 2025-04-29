import React, { useState } from 'react';
import logo from '../assets/logo.png';

const VendorSignupPage = ({ cart }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFadeIn(true);
    }, 100); // slight delay to trigger fade-in after setting submitted
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Bar */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', color: 'white', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
          <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>Local Vendors Bazaar</span>
        </a>
        <nav style={{ marginLeft: '2rem', display: 'flex', gap: '15px' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/shop" style={navLinkStyle}>Shop</a>
          <a href="/vendor-signup" style={navLinkStyle}>Become a Vendor</a>
        </nav>
        <div style={{ marginLeft: 'auto' }}>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px' }}>🛒 {cart?.length > 0 && `(${cart.length})`}</a>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '3rem 1rem' }}>
        {!formSubmitted ? (
          <div style={formContainerStyle}>
            <h1 style={formTitleStyle}>Become a Vendor</h1>
            <p style={formSubtitleStyle}>Join our marketplace and grow your local business. It's fast, easy, and free!</p>

            <form action="https://formspree.io/f/movdqjgp" method="POST" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input type="text" name="businessName" required placeholder="Business Name" style={inputBox} />
              <input type="email" name="email" required placeholder="you@example.com" style={inputBox} />
              <input type="tel" name="phone" placeholder="123-456-7890" style={inputBox} />
              <input type="url" name="website" placeholder="https://yourbusiness.com" style={inputBox} />
              <textarea name="description" required placeholder="Tell us about your business..." rows="4" style={inputBox} />
              <input type="hidden" name="_redirect" value="https://www.localvendorsbazaar.com/vendor-signup" />
              <button type="submit" style={submitButtonStyle}>Submit Application</button>
            </form>
          </div>
        ) : (
          <div style={{ ...thankYouContainerStyle, opacity: fadeIn ? 1 : 0, transition: 'opacity 1s ease' }}>
            <h1 style={{ color: '#003366', marginBottom: '1rem' }}>Thank You for Signing Up with Local Vendors Bazaar!</h1>
            <p style={{ color: '#555', fontSize: '1.2rem' }}>Let's make a difference together — one product, one neighborhood at a time.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', textAlign: 'center', padding: '1rem' }}>
        <p style={{ fontSize: '0.9rem' }}>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Styles
const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px' };
const formContainerStyle = { backgroundColor: 'white', padding: '2rem', borderRadius: '12px', maxWidth: '600px', width: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', textAlign: 'center' };
const formTitleStyle = { fontSize: '2rem', color: '#003366', marginBottom: '0.5rem' };
const formSubtitleStyle = { color: '#555', marginBottom: '2rem' };
const inputBox = { width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' };
const submitButtonStyle = { backgroundColor: '#003366', color: 'white', padding: '0.75rem', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' };
const thankYouContainerStyle = { textAlign: 'center', padding: '3rem 2rem', backgroundColor: 'white', borderRadius: '12px', maxWidth: '600px', width: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' };

export default VendorSignupPage;



































