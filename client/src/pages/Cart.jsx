import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50" style={{ fontFamily: 'sans-serif' }}>
      {/* Navigation Bar */}
      <header
        style={{
          backgroundColor: '#2b9348',
          padding: '1rem 1.5rem',
          color: '#fff',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {/* Logo and Title */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/assets/logo.png"
            alt="Local Vendors Bazaar Logo"
            style={{ width: '40px', marginRight: '10px' }}
          />
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>LocalVendorsBazaar</span>
        </div>

        {/* Navigation Links and Search */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '10px',
            maxWidth: '100%',
            overflow: 'hidden',
          }}
        >
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
        </div>
      </header>

      {/* Cart Content */}
      <main style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h1 className="text-4xl font-bold text-green-600 mb-6">🛍️ Your Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-lg text-gray-600">Your cart is currently empty.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="text-gray-700 text-lg">
                {item.name} — {item.price}
              </li>
            ))}
          </ul>
        )}
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
  color: '#fff',
  textDecoration: 'none',
  fontSize: '14px',
};

const inputStyle = {
  padding: '6px 10px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '14px',
};

const searchButtonStyle = {
  padding: '6px 12px',
  backgroundColor: '#40916c',
  color: '#fff',
  borderRadius: '8px',
  border: 'none',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default Cart;














