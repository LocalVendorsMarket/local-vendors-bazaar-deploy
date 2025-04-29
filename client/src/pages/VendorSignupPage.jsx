import React from 'react';
import logo from '../assets/logo.png';

const VendorSignupPage = ({ cart }) => {
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

      {/* Banner */}
      <div style={{ backgroundColor: '#00509e', padding: '2rem', textAlign: 'center', color: 'white' }}>
        <h1 style={{ margin: 0, fontSize: '2rem' }}>Become a Vendor</h1>
        <p style={{ marginTop: '0.5rem', fontSize: '1rem' }}>Join our marketplace and grow your local business!</p>
      </div>

      {/* Form Section */}
      <main style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        <form 
          action="https://formspree.io/f/movdqjgp"
          method="POST"
          style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', maxWidth: '600px', width: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <input type="text" name="businessName" required placeholder="Business Name" style={inputBox} />
          <input type="email" name="email" required placeholder="Email Address" style={inputBox} />
          <input type="tel" name="phone" placeholder="Phone Number" style={inputBox} />
          <input type="url" name="website" placeholder="Website (Optional)" style={inputBox} />
          <textarea name="description" required placeholder="Tell us about your business..." rows="4" style={inputBox} />
          <button type="submit" style={submitButtonStyle}>Submit Application</button>
        </form>
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
const inputBox = { width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' };
const submitButtonStyle = { backgroundColor: '#00509e', color: 'white', padding: '12px', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' };

export default VendorSignupPage;
































