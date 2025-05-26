import React from 'react';
import VendorSidebar from '../components/VendorSidebar';
import logo from '../assets/logo.png';

const VendorDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center text-white font-bold text-lg">
          <img src={logo} alt="Logo" className="w-10 mr-3" />
          Local Vendors Bazaar
        </a>
        <nav className="flex items-center gap-4">
          <a href="/" className="hover:underline text-sm">🏠 Home</a>
          <a href="/vendor-login" className="hover:underline text-sm">🚪 Log Out</a>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex flex-grow">
        <VendorSidebar />
        <main className="flex-1 px-8 py-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Vendor Dashboard Overview</h1>
          <p className="text-gray-700 text-base">
            Welcome to your vendor dashboard! Use the sidebar to manage your store, view performance
            analytics, and update your account settings.
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

const footerLinkStyle = { color: 'white', textDecoration: 'none', fontSize: '14px' };

export default VendorDashboard;



























