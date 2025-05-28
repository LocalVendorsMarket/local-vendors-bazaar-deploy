import React from 'react';
import VendorSidebar from '../components/VendorSidebar';
import logo from '../assets/logo.png';

const AnalyticsReports = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f9f9f9' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none' }}>
          <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
          <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Local Vendors Bazaar</span>
        </a>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="/" style={navLinkStyle}>🏠 Home</a>
          <a href="/vendor-login" style={navLinkStyle}>🚪 Log Out</a>
        </nav>
      </header>

      {/* Content */}
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <VendorSidebar />
        <main style={{ flexGrow: 1, padding: '2rem', backgroundColor: 'white', borderRadius: '12px', margin: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
          <h1 style={{ fontSize: '2rem', color: '#003366', marginBottom: '1rem' }}>Analytics & Reports</h1>
          <p style={{ fontSize: '1rem', color: '#444' }}>
            Here you can view insights on product performance, sales trends, and customer engagement.
          </p>
        </main>
      </div>

      {/* Footer */}
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

const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px' };
const footerLinkStyle = { color: 'white', textDecoration: 'none', fontSize: '14px' };

export default AnalyticsReports;













