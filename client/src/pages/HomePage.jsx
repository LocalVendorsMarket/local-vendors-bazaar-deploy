// HomePage.jsx (enhanced with sign-in modal + product detail modal)
import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';

const HomePage = ({ cart, setCart }) => {
  const allProducts = [
    { id: 1, name: 'Embroidered Kurti', category: "Women's Apparel", price: '$30', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Kurti' },
    { id: 2, name: 'Gold Plated Earrings', category: 'Jewelry', price: '$22', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Earrings' }
  ];

  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', color: 'white' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <a href="/" style={{ ...navLinkStyle, marginLeft: '2rem' }}>Home</a>
        <span onClick={() => setIsSignInModalOpen(true)} style={{ ...navLinkStyle, marginLeft: 'auto' }}>Sign In</span>
        <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px', marginLeft: '1rem', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒</a>
      </header>

      {/* Featured Products */}
      <section style={{ padding: '2rem' }}>
        <h2 style={{ color: '#003366' }}>Featured Products</h2>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {allProducts.map(product => (
            <div key={product.id} style={productCardStyle}>
              <img
                src={product.image}
                alt={product.name}
                onClick={() => setSelectedProduct(product)}
                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px', cursor: 'pointer' }}
              />
              <h3>{product.name}</h3>
              <p>{product.price} · {product.rating}</p>
              <button onClick={() => setSelectedProduct(product)} style={buttonStyle}>Learn More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Sign In Modal */}
      {isSignInModalOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2 style={{ color: '#003366' }}>Sign In</h2>
            <input type="email" placeholder="Email" style={inputStyle} />
            <input type="password" placeholder="Password" style={inputStyle} />
            <button style={buttonStyle}>Continue</button>
            <button onClick={() => setIsSignInModalOpen(false)} style={{ ...buttonStyle, backgroundColor: '#ccc', color: '#000' }}>Cancel</button>
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '50%' }} />
              <div>
                <h2 style={{ color: '#003366' }}>{selectedProduct.name}</h2>
                <p style={{ fontSize: '18px' }}>{selectedProduct.price} · {selectedProduct.rating}</p>
                <p style={{ marginTop: '1rem' }}>Product details, description, vendor info here...</p>
                <button style={buttonStyle}>Add to Cart</button>
              </div>
            </div>
            <button onClick={() => setSelectedProduct(null)} style={{ ...buttonStyle, backgroundColor: '#ccc', color: '#000', marginTop: '1rem' }}>Close</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', textAlign: 'center' }}>
        <p>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' };
const productCardStyle = { minWidth: '250px', backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' };
const modalStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 };
const modalContentStyle = { backgroundColor: 'white', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '600px' };
const buttonStyle = { backgroundColor: '#003366', color: 'white', padding: '10px 16px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '0.5rem' };
const inputStyle = { width: '100%', padding: '0.75rem', margin: '0.5rem 0', borderRadius: '8px', border: '1px solid #ccc' };

export default HomePage;
















































































