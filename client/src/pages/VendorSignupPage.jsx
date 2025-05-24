import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const VendorSignupPage = ({ cart }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      navigate('/vendor-welcome');
    }, 1500);
  };

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
        <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', maxWidth: '720px', width: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', textAlign: 'center' }}>
          {!formSubmitted ? (
            <>
              <h1 style={{ color: '#003366', marginBottom: '1rem' }}>Become a Vendor</h1>
              <p style={{ marginBottom: '1.5rem', color: '#555' }}>Join our marketplace and grow your local business. It’s fast, easy, and free!</p>

              {/* Info Section */}
              <div style={{ textAlign: 'left', backgroundColor: '#f0f8ff', padding: '1.5rem', borderRadius: '10px', marginBottom: '2rem' }}>
                <h3 style={{ color: '#003366' }}>📌 Before You Apply</h3>
                <ul style={{ lineHeight: '1.7', fontSize: '1rem', paddingLeft: '1rem' }}>
                  <li><strong>✔️ No signup fees</strong> — it’s free to list and start selling.</li>
                  <li><strong>💰 5% fee</strong> per completed transaction.</li>
                  <li><strong>📢 Optional Advertising:</strong> Promote your listings on our homepage or ShopPage. Starting at $10 per week.</li>
                  <li><strong>🚫 Prohibited items:</strong> We don’t allow offensive, harmful, or illegal goods.</li>
                  <li><strong>⚖️ Content guidelines:</strong> Use clear images and honest descriptions. We review your listings periodically.</li>
                </ul>
              </div>

              {/* Signup Form */}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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

      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', textAlign: 'center' }}>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px' }}>
    <div>
      <h3>Get to Know Us</h3>
      <a href="/about" style={footerLinkStyle}>About Us</a><br />
      <a href="/blog" style={footerLinkStyle}>Blog</a><br />
      <a href="/faq" style={footerLinkStyle}>FAQ</a><br />
      <a href="/testimonials" style={footerLinkStyle}>Testimonials</a><br />
      <a href="/careers" style={footerLinkStyle}>Careers</a>
    </div>
    <div>
      <h3>Make Money with Us</h3>
      <a href="/vendor-signup" style={footerLinkStyle}>Become a Vendor</a><br />
      <a href="/advertise" style={footerLinkStyle}>Advertise Products</a><br />
      <a href="/advertise" style={footerLinkStyle}>Advertise Services</a><br />
      <a href="/advertise" style={footerLinkStyle}>Advertise Events</a><br />
      <a href="/vendor-login" style={{ ...footerLinkStyle, textDecoration: 'underline' }}>Vendor Login</a>
    </div>
    <div>
      <h3>Buyer Resources</h3>
      <a href="/orders" style={footerLinkStyle}>Your Orders</a><br />
      <a href="/shipping" style={footerLinkStyle}>Shipping Info</a><br />
      <a href="/returns" style={footerLinkStyle}>Returns</a><br />
      <a href="/help" style={footerLinkStyle}>Help Center</a>
    </div>
    <div>
      <h3>Stay Connected</h3>
      <a href="/contact" style={footerLinkStyle}>Contact Us</a><br />
      <a href="/newsletter" style={footerLinkStyle}>Newsletter Signup</a><br />
      <a href="/socials" style={footerLinkStyle}>Follow Us</a>
    </div>
  </div>
  <p style={{ marginTop: '1rem', fontSize: '12px' }}>
    © {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.
  </p>
</footer>
    </div>
  );
};

// Styles
const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px' };
const inputStyle = { padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' };
const buttonStyle = { backgroundColor: '#003366', color: 'white', padding: '0.75rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' };
const homeButtonStyle = { display: 'inline-block', backgroundColor: '#00509e', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px' };
const footerLinkStyle = { color: 'white', textDecoration: 'none', fontSize: '14px' };

export default VendorSignupPage;











































