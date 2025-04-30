import React, { useState } from 'react';
import logo from '../assets/logo.png';

const VendorSignupPage = ({ cart }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', color: 'white' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
          <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>Local Vendors Bazaar</span>
        </a>
        <nav style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/shop" style={navLinkStyle}>Shop</a>
          <a href="/vendor-signup" style={navLinkStyle}>Become a Vendor</a>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px' }}>🛒 {cart?.length > 0 && `(${cart.length})`}</a>
        </nav>
      </header>

      {/* Main */}
      <main style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', padding: '3rem 1rem' }}>
        <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', maxWidth: '600px', width: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', textAlign: 'center' }}>
          {!formSubmitted ? (
            <>
              <h1 style={{ color: '#003366', marginBottom: '1rem' }}>Become a Vendor</h1>
              <p style={{ marginBottom: '2rem', color: '#555' }}>Join our marketplace and grow your local business. It’s fast, easy, and free!</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <input type="text" name="businessName" required placeholder="Business Name" style={inputStyle} />
                <input type="email" name="email" required placeholder="you@example.com" style={inputStyle} />
                <input type="tel" name="phone" placeholder="123-456-7890" style={inputStyle} />
                <input type="url" name="website" placeholder="https://yourbusiness.com" style={inputStyle} />
                <textarea name="description" required placeholder="Tell us about your business..." rows="4" style={inputStyle} />
                <button type="submit" style={buttonStyle}>Submit Application</button>
              </form>
            </>
          ) : (
            <>
              <h2 style={{ color: '#003366' }}>Thank You for Signing Up with Local Vendors Bazaar!</h2>
              <p style={{ margin: '1.5rem 0', fontSize: '1.1rem', color: '#555' }}>
                Let’s make a difference together — one product, one neighborhood at a time.
              </p>
              <a href="/" style={homeButtonStyle}>Back to Home</a>
            </>
          )}
        </div>
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
const inputStyle = { padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' };
const buttonStyle = { backgroundColor: '#003366', color: 'white', padding: '0.75rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' };
const homeButtonStyle = { display: 'inline-block', backgroundColor: '#00509e', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px' };

export default VendorSignupPage;








































