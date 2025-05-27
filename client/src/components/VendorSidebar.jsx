import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const VendorSidebar = () => {
  const location = useLocation();

  const navItemStyle = (path) => ({
    display: 'block',
    padding: '0.75rem 1rem',
    marginBottom: '0.5rem',
    backgroundColor: location.pathname === path ? '#00509e' : '#ffffff',
    color: location.pathname === path ? '#ffffff' : '#003366',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)'
  });

  return (
    <aside style={{ width: '240px', padding: '2rem 1rem', backgroundColor: '#f0f8ff' }}>
      <h2 style={{ color: '#003366', marginBottom: '1rem', fontSize: '1.2rem' }}>Vendor Panel</h2>
      <nav>
        <Link to="/vendor-dashboard" style={navItemStyle('/vendor-dashboard')}>Dashboard</Link>
        <Link to="/vendor-products" style={navItemStyle('/vendor-products')}>Products</Link>
        <Link to="/vendor-orders" style={navItemStyle('/vendor-orders')}>Orders</Link>
        <Link to="/vendor-analytics" style={navItemStyle('/vendor-analytics')}>Analytics</Link>
        <Link to="/vendor-settings" style={navItemStyle('/vendor-settings')}>Account</Link>
        <Link to="/vendor-support" style={navItemStyle('/vendor-support')}>Support</Link>
      </nav>
    </aside>
  );
};

export default VendorSidebar;









