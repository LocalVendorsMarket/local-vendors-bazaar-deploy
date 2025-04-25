import React from 'react';

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (indexToRemove) => {
    const newCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(newCart);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f0fdf4', minHeight: '100vh' }}>
      {/* Nav Bar */}
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/assets/logo.png"
            alt="Local Vendors Bazaar Logo"
            style={{ width: '40px', marginRight: '10px' }}
          />
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
            <span style={{ filter: 'brightness(0) invert(1)' }}>🛒</span>
            {cart.length > 0 && ` (${cart.length})`}
          </a>
          <input type="text" placeholder="Search products..." style={inputStyle} />
          <input type="text" placeholder="Zip Code" style={{ ...inputStyle, width: '100px' }} />
          <button style={searchButtonStyle}>Search</button>
        </nav>
      </header>

      {/* Cart Content */}
      <main style={{ maxWidth: '900px', margin: '2rem auto', padding: '1rem', backgroundColor: '#fff', borderRadius: '12px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2b9348', textAlign: 'center', marginBottom: '1.5rem' }}>
          🛍️ Your Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#555', fontSize: '1.1rem' }}>
            Your cart is currently empty.
          </p>
        ) : (
          <div style={{ display: 'grid', gap: '1rem' }}>
            {cart.map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f9f9f9', padding: '1rem', borderRadius: '8px' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '100px', height: '80px', objectFit: 'cover', borderRadius: '8px', marginRight: '1rem' }}
                />
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '1.2rem', color: '#1f7a3f', margin: 0 }}>{item.name}</h2>
                  <p style={{ margin: '5px 0', color: '#555' }}>{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#d00000',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#f5f5f5', padding: '1rem', textAlign: 'center', color: '#666' }}>
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

export default Cart;





