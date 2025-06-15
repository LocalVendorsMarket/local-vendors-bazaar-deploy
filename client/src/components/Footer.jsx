// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0f5132', color: '#fff', padding: '20px 0', textAlign: 'center', marginTop: '50px' }}>
      <div style={{ fontSize: '14px' }}>
        <p>&copy; {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
        <p>
          <a href="/vendor-login" style={{ color: '#fff', textDecoration: 'underline' }}>Vendor Login</a> |{' '}
          <a href="/contact" style={{ color: '#fff', textDecoration: 'underline' }}>Contact Us</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
