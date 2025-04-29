import React, { useState } from 'react';
import logo from '../assets/logo.png';

const VendorSignupPage = ({ cart }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    setSubmitted(true);
  };

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
          <a href="/shop" style={navLinkStyle}>Shop</a>
          <a href="/vendor-signup" style={navLinkStyle}>Become a Vendor</a>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px' }}>🛒 {cart?.length > 0 && `(${cart.length})`}</a>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '3rem 1rem' }}>
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', maxWidth: '600px', width: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', textAlign: 'center' }}>
          {!submitted ? (
            <>
              <h1 style={{ fontSize: '2rem', color: '#003366', marginBottom: '1rem' }}>Become a Vendor</h1>
              <p style={{ color: '#555', marginBottom: '2rem' }}>
                Join our marketplace and grow your local business. It’s fast, easy, and free!
              </p>
              <form action="https://formspree.io/f/movdqjgp" method="POST" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" name="businessName" required placeholder="Business Name" style={inputBoxStyle} />
                <input type="email" name="email" required placeholder="you@example.com" style={inputBoxStyle} />
                <input type="tel" name="phone" placeholder="123-456-7890" style={inputBoxStyle} />
                <input type="url" name="website" placeholder="https://yourbusiness.com" style={inputBoxStyle} />
                <textarea name="description" required placeholder="Tell us about your business..." rows="4" style={inputBoxStyle} />
                <button type="submit" style={submitButtonStyle}>Submit Application</button>
              </form>
            </>
          ) : (
            <div style={{ animation: 'fadeIn 2s' }}>
              <h2 style={{ color: '#003366', fontSize: '1.8rem', marginBottom: '1rem' }}>
                Thank You for Signing Up with Local Vendors Bazaar!
              </h2>
              <p style={{ color: '#555', fontSize: '1rem', marginBottom: '2rem' }}>
                Let’s make a difference together — one product, one neighborhood at a time.
              </p>
              <a href="/" style={homeButtonStyle}>Back to Home</a>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', textAlign: 'center', padding: '1rem' }}>
        <p style={{ fontSize: '0.9rem' }}>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>

      {/* Fade Animation Keyframes */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

// Styles
const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px' };
const inputBoxStyle = { width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' };
const submitButtonStyle = { backgroundColor: '#003366', color: 'white', padding: '0.75rem', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' };
const homeButtonStyle = { backgroundColor: '#00509e', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1rem' };

export default VendorSignupPage;






































