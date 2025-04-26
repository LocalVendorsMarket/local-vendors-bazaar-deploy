import React, { useState } from 'react';
import logo from '../assets/logo.png';

const ShopPage = ({ cart, setCart }) => {
  const categories = ['All', 'Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods', 'Restaurants', 'Services'];

  const allProducts = [
    { id: 1, name: 'Local Honey', category: 'Food', price: '$12', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Local+Honey' },
    { id: 2, name: 'Handmade Necklace', category: 'Jewelry', price: '$25', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Necklace' },
    { id: 3, name: 'Organic T-Shirt', category: 'Clothing', price: '$18', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Organic+T-Shirt' },
    { id: 4, name: 'Custom Artwork', category: 'Art', price: '$80', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Artwork' },
    { id: 5, name: 'Gourmet Pizza', category: 'Restaurants', price: '$15', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Pizza' },
    { id: 6, name: 'Home Repair Service', category: 'Services', price: '$50/hr', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Home+Repair' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter((product) => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    console.log('Signing in with:', signInEmail);
    setIsSignInModalOpen(false);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Nav */}
      <header style={{ backgroundColor: '#2b9348', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', color: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href="/">
            <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <input type="text" placeholder="Search products..." style={{ padding: '6px 10px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px', flexGrow: 1, minWidth: '200px' }} />
          <input type="text" placeholder="Zip Code" style={{ padding: '6px 10px', width: '100px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' }} />
          <button style={{ padding: '6px 12px', backgroundColor: '#40916c', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
            Search
          </button>
          <button
            onClick={() => setIsSignInModalOpen(true)}
            style={{ padding: '6px 12px', backgroundColor: '#40916c', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Sign In
          </button>
          <a href="/cart" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>
            <span style={{ filter: 'brightness(0) invert(1)' }}>🛒</span> {cart.length > 0 && `(${cart.length})`}
          </a>
        </div>
      </header>

      {/* Subcategory Buttons */}
      <div style={{ backgroundColor: '#d8f3dc', padding: '0.5rem', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: '6px 12px',
              backgroundColor: selectedCategory === category ? '#40916c' : '#2b9348',
              color: '#fff',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Section */}
      <div style={{ padding: '2rem', display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', flexGrow: 1 }}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
            <h2 style={{ marginTop: '10px', color: '#1f7a3f', fontSize: '1.2rem', textAlign: 'center' }}>{product.name}</h2>
            <p style={{ color: '#666', marginBottom: '8px', textAlign: 'center' }}>{product.rating}</p>
            <p style={{ fontWeight: 'bold', color: '#333', marginBottom: '12px' }}>{product.price}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                style={{ padding: '8px 12px', backgroundColor: '#2b9348', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
                onClick={() => setSelectedProduct(product)}
              >
                Learn More
              </button>
              <button
                style={{ padding: '8px 12px', backgroundColor: '#f9c74f', color: '#000', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '500px', textAlign: 'center' }}>
            <h2 style={{ color: '#2b9348', marginBottom: '1rem' }}>{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }} />
            <p style={{ color: '#666', marginBottom: '1rem' }}>{selectedProduct.rating}</p>
            <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>{selectedProduct.price}</p>
            <button
              onClick={() => setSelectedProduct(null)}
              style={{ marginTop: '10px', padding: '8px 16px', backgroundColor: '#e63946', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Sign In Modal */}
      {isSignInModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '400px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2b9348', marginBottom: '1rem' }}>
              Sign In or Create Account
            </h2>
            <form onSubmit={handleSignInSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
  <input
    type="email"
    placeholder="Enter email or mobile number"
    value={signInEmail}
    onChange={(e) => setSignInEmail(e.target.value)}
    style={{
      padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px', fontSize: '1rem'
    }}
    required
  />

  {/* New Customer Link */}
  <p style={{ fontSize: '0.85rem', color: '#007185', textAlign: 'center', marginTop: '0.5rem' }}>
    New customer? <a href="/signup" style={{ color: '#007185', textDecoration: 'underline' }}>Start here.</a>
  </p>

  <button
    type="submit"
    style={{
      backgroundColor: '#2b9348', color: '#fff', padding: '0.75rem',
      borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer'
    }}
  >
    Continue
  </button>
</form>

            <p style={{ fontSize: '0.75rem', color: '#777', marginTop: '1rem' }}>
              By continuing, you agree to Local Vendors Bazaar's Terms of Use and Privacy Notice.
            </p>
            <button
              onClick={() => setIsSignInModalOpen(false)}
              style={{ marginTop: '1.5rem', padding: '0.5rem 1rem', backgroundColor: '#ccc', color: '#000', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: '#f1f1f1', padding: '2rem', textAlign: 'center', marginTop: 'auto', fontSize: '14px', color: '#555' }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px', marginBottom: '20px' }}>
          <div>
            <h3 style={{ color: '#2b9348', marginBottom: '8px' }}>Get to Know Us</h3>
            <a href="/" style={footerLinkStyle}>Home</a><br />
            <a href="/faq" style={footerLinkStyle}>FAQ</a><br />
            <a href="/blog" style={footerLinkStyle}>Blog</a><br />
            <a href="/contact" style={footerLinkStyle}>Contact</a><br />
          </div>
          <div>
            <h3 style={{ color: '#2b9348', marginBottom: '8px' }}>Make Money with Us</h3>
            <a href="/signup" style={footerLinkStyle}>Become a Vendor</a><br />
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

const footerLinkStyle = {
  color: '#555',
  textDecoration: 'none',
  fontSize: '14px',
};

export default ShopPage;































