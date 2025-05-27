import React from 'react';
import VendorSidebar from '../components/VendorSidebar';
import logo from '../assets/logo.png';

const OrderManagement = () => {
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
          <h1 style={{ fontSize: '2rem', color: '#003366', marginBottom: '1rem' }}>Order Management</h1>
          <p style={{ fontSize: '1rem', color: '#444' }}>
            Here you can view, track, and manage your customer orders.
          </p>
        </main>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.9rem' }}>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px' };

export default OrderManagement;
















