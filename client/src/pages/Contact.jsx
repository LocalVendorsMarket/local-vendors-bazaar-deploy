import React from 'react';

const Contact = ({ cart }) => {
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
          <a href="/cart" style={linkStyle}>🛒 <span style={{ color: '#fff' }}>{cart.length > 0 ? `Cart (${cart.length})` : 'Cart'}</span></a>

          <input
            type="text"
            placeholder="Search products..."
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Zip Code"
            style={{ ...inputStyle, width: '100px' }}
          />
          <button style={searchButtonStyle}>Search</button>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ textAlign: 'center', padding: '2rem', marginTop: '4rem' }}>
        <img
          src="/assets/logo.png"
          alt="Local Vendors Bazaar Logo"
          style={{ width: '180px', marginBottom: '1rem' }}
        />
        <h1 style={{ color: '#2b9348', fontSize: '2rem', marginBottom: '1rem' }}>Contact Us</h1>
        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem' }}>
          Have a question? We're here to help. Fill out the form below and we'll get back to you!
        </p>

        <form
          action="https://formspree.io/f/movdqjgp"
          method="POST"
          style={formStyle}
        >
          <input type="text" name="name" placeholder="Your Name" required style={fieldStyle} />
          <input type="email" name="email" placeholder="you@example.com" required style={fieldStyle} />
          <input type="text" name="subject" placeholder="Subject" required style={fieldStyle} />
          <textarea name="message" placeholder="Your Message" rows="5" required style={fieldStyle} />
          <button type="submit" style={submitButtonStyle}>Send Message</button>
        </form>
      </main>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Styles
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

const formStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#fff',
  padding: '2rem',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
};

const fieldStyle = {
  width: '100%',
  padding: '0.75rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  marginBottom: '1rem',
};

const submitButtonStyle = {
  backgroundColor: '#2b9348',
  color: '#fff',
  fontWeight: 'bold',
  padding: '0.75rem 1.5rem',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '1rem',
};

const footerStyle = {
  backgroundColor: '#f5f5f5',
  padding: '1rem',
  textAlign: 'center',
  color: '#666',
  marginTop: 'auto',
};

export default Contact;














