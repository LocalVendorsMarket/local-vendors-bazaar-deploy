import React from 'react';
import logo from '../assets/logo.png';

const ProductManagement = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#003366', color: 'white', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
          <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>Local Vendors Bazaar</span>
        </a>
        <nav style={{ display: 'flex', gap: '15px' }}>
          <a href="/vendor-dashboard" style={navLinkStyle}>← Dashboard</a>
          <a href="/" style={navLinkStyle}>🏠 Home</a>
          <a href="/vendor-signup" style={navLinkStyle}>🚪 Log Out</a>
        </nav>
      </header>

      {/* Content */}
      <main style={{ maxWidth: '900px', margin: '2rem auto', backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#003366', marginBottom: '1.5rem' }}>📦 Add New Product</h1>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" placeholder="Product Name" required style={inputStyle} />
          <textarea placeholder="Product Description" rows="4" required style={inputStyle} />
          <input type="number" placeholder="Price ($)" required style={inputStyle} />
          <input type="number" placeholder="Quantity Available" required style={inputStyle} />
          <input type="text" placeholder="Category" required style={inputStyle} />
          <input type="url" placeholder="Main Image URL" required style={inputStyle} />
          <input type="url" placeholder="Alt Image 1 URL" style={inputStyle} />
          <input type="url" placeholder="Alt Image 2 URL" style={inputStyle} />
          <input type="url" placeholder="Alt Image 3 URL" style={inputStyle} />
          <input type="url" placeholder="Alt Image 4 URL" style={inputStyle} />
          <button type="submit" style={buttonStyle}>Add Product</button>
        </form>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '1rem', textAlign: 'center', marginTop: '2rem' }}>
        <p style={{ fontSize: '0.9rem' }}>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Styles
const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px' };
const inputStyle = { padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem', width: '100%' };
const buttonStyle = { backgroundColor: '#003366', color: 'white', padding: '0.75rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' };

export default ProductManagement;













