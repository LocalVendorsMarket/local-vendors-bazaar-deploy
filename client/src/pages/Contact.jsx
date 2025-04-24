import React from 'react';

const Contact = ({ cart }) => {
  return (
    <div style={{ fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Nav Bar */}
      <header
        style={{
          backgroundColor: '#2b9348',
          padding: '1rem',
          color: '#fff',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/assets/logo.png" alt="Local Vendors Bazaar Logo" style={{ width: '40px', marginRight: '10px' }} />
          <div style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>LocalVendorsBazaar</div>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
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
        </nav>
      </header>

      {/* Contact Form */}
      <main style={{ textAlign: 'center', padding: '2rem', flex: 1 }}>
        <h1 style={{ color: '#2b9348', fontSize: '2rem', marginBottom: '1rem' }}>Contact Us</h1>
        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem' }}>
          Have a question? Fill out the form below and we’ll get back to you!
        </p>

        <form
          action="https://formspree.io/f/movdqjgp"
          method="POST"
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              style={inputBlockStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              style={inputBlockStyle}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              style={inputBlockStyle}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              style={inputBlockStyle}
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#2b9348',
              color: '#fff',
              fontWeight: 'bold',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Send Message
          </button>
        </form>
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

const navLinkStyle = {
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

const inputBlockStyle = {
  width: '100%',
  padding: '0.75rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  marginBottom: '1rem',
};

export default Contact;

























