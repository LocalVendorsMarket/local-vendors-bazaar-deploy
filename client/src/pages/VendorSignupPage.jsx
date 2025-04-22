import React from 'react';

const VendorSignupPage = () => {
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
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', marginLeft: '1rem' }}>
          LocalVendorsBazaar
        </div>
        <nav style={{ marginRight: '1rem', display: 'flex', alignItems: 'center' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/faq" style={navLinkStyle}>FAQ</a>
          <a href="/blog" style={navLinkStyle}>Blog</a>
          <a href="/contact" style={navLinkStyle}>Contact</a>
          <a href="/signup" style={navLinkStyle}>Become a Vendor</a>
          <a href="/shop" style={navLinkStyle}>Shop</a>
          <a href="/cart" style={navLinkStyle}>🛒 <span style={{ textShadow: '0 0 2px #fff' }}>Cart</span></a>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ textAlign: 'center', padding: '2rem', marginTop: '4rem' }}>
        <img
          src="/assets/logo.png"
          alt="Local Vendors Bazaar Logo"
          style={{ width: '180px', marginBottom: '1rem' }}
        />
        <h1 style={{ color: '#2b9348', fontSize: '2rem', marginBottom: '1rem' }}>Become a Vendor</h1>
        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem' }}>
          Join our growing community of local vendors. It’s free to get started!
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
          <input type="text" name="businessName" placeholder="Business Name" required style={inputStyle} />
          <input type="email" name="email" placeholder="Email Address" required style={inputStyle} />
          <input type="tel" name="phone" placeholder="Phone Number" style={inputStyle} />
          <input type="url" name="website" placeholder="Website (optional)" style={inputStyle} />
          <textarea name="description" placeholder="Tell us about your business..." rows="4" required style={inputStyle} />

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
              marginTop: '1rem',
              width: '100%',
            }}
          >
            Submit Application
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

// Reusable styles
const navLinkStyle = {
  margin: '0 10px',
  color: '#fff',
  textDecoration: 'none',
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  marginBottom: '1rem',
};

export default VendorSignupPage;


