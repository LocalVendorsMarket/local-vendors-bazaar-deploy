import React from 'react';
import logo from '../assets/logo.png';

const VendorWelcome = () => {
  const vendorId = "VEND-2025-0012"; // Static for now — make dynamic later

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒</a>
        </nav>
      </header>

      {/* Content */}
      <main style={{ flexGrow: 1, padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginTop: '2rem' }}>
        <h1 style={{ color: '#003366', marginBottom: '1rem' }}>🎉 Welcome to Local Vendors Bazaar!</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          We're excited to have you onboard. Your Vendor ID is:
        </p>
        <div style={{ fontSize: '1.5rem', color: '#00509e', fontWeight: 'bold', marginBottom: '2rem' }}>
          {vendorId}
        </div>

        <ul style={{ lineHeight: '1.8', fontSize: '1rem', paddingLeft: '1rem' }}>
          <li><strong>🌟 Dual Exposure:</strong> Your products appear on the HomePage and ShopPage.</li>
          <li><strong>🛍️ Smart Filtering:</strong> Shoppers find your items by price, rating, and category.</li>
          <li><strong>🖼️ Showcase Layout:</strong> Upload 5 product images in a sleek, Amazon-style display.</li>
          <li><strong>📍 Local Visibility:</strong> Get discovered by nearby buyers using location filters.</li>
          <li><strong>📈 Growth Tools Coming Soon:</strong> Sales insights, newsletters, and ad tools.</li>
        </ul>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a href="/vendor-products" style={{
            backgroundColor: '#003366',
            color: 'white',
            padding: '0.75rem 2rem',
            borderRadius: '8px',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: '1.1rem'
          }}>
            🚀 Start Uploading Products
          </a>
          <p style={{ marginTop: '1.5rem' }}>
            <a href="/" style={{ textDecoration: 'underline', color: '#003366', fontWeight: 'bold' }}>
              ← Back to Home
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', textAlign: 'center', marginTop: '2rem' }}>
        <p style={{ fontSize: '12px' }}>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px' };

export default VendorWelcome;


