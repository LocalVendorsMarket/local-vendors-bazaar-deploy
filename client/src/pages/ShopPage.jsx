import React, { useState } from 'react';
import logo from '../assets/logo.png';

const ShopPage = ({ cart, setCart }) => {
  const categories = [
    'All', 'Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods',
    'Restaurants', 'Services', 'Best Sellers', "Today's Deals", 'New Releases', 'Gift Ideas'
  ];

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
  const [isNewCustomer, setIsNewCustomer] = useState(false);
  const [isUpdateLocationOpen, setIsUpdateLocationOpen] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('Elgin 60120');
  const [newZip, setNewZip] = useState('');
  const [searchCategory, setSearchCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

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
    setIsNewCustomer(false);
  };

  const handleUpdateLocationSubmit = (e) => {
    e.preventDefault();
    if (newZip.trim()) {
      setDeliveryLocation(newZip);
      setNewZip('');
      setIsUpdateLocationOpen(false);
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', backgroundColor: '#e6f0ff', display: 'flex', flexDirection: 'column' }}>

      {/* Top Nav */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px', color: 'white' }}>
        <a href="/">
          <img src={logo} alt="Logo" style={{ width: '50px' }} />
        </a>
        <div style={{ fontSize: '12px' }}>
          <span>Delivering to {deliveryLocation}</span><br/>
          <span onClick={() => setIsUpdateLocationOpen(true)} style={{ textDecoration: 'underline', cursor: 'pointer', color: 'white' }}>Update location</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', gap: '10px' }}>
          <select value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)} style={{ padding: '6px', height: '40px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px', width: '80px' }}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search products..." style={{ width: '550px', padding: '6px 10px', height: '40px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' }} />
          <button style={{ backgroundColor: '#d3d3d3', height: '40px', borderRadius: '8px', padding: '0 15px', border: 'none', fontSize: '18px', cursor: 'pointer' }}>🔍</button>
          <span onClick={() => setIsSignInModalOpen(true)} style={{ cursor: 'pointer', fontWeight: 'bold', textDecoration: 'underline' }}>Sign In</span>
          <a href="/cart" style={{ color: '#fff', textDecoration: 'none', fontSize: '26px', fontWeight: 'bold', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒 {cart.length > 0 && `(${cart.length})`}</a>
        </div>
      </header>

      {/* Subcategory Bar */}
      <div style={{ backgroundColor: '#003366', padding: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'flex-start' }}>
        {categories.map((category) => (
          <span key={category} onClick={() => setSelectedCategory(category)} style={{ padding: '6px 12px', color: '#fff', fontWeight: selectedCategory === category ? 'bold' : 'normal', cursor: 'pointer', fontSize: '14px' }}>
            {category}
          </span>
        ))}
      </div>

      {/* Product Grid */}
      <div style={{ padding: '2rem', display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', flexGrow: 1 }}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
            <h2 style={{ marginTop: '10px', color: '#003366', fontSize: '1.2rem', textAlign: 'center' }}>{product.name}</h2>
            <p style={{ color: '#666', marginBottom: '8px', textAlign: 'center' }}>{product.rating}</p>
            <p style={{ fontWeight: 'bold', color: '#333', marginBottom: '12px' }}>{product.price}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{ padding: '8px 12px', backgroundColor: '#003366', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => setSelectedProduct(product)}>Learn More</button>
              <button style={{ padding: '8px 12px', backgroundColor: '#d3d3d3', color: '#000', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      {isUpdateLocationOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2 style={{ color: '#003366', marginBottom: '1rem' }}>Update Location</h2>
            <form onSubmit={handleUpdateLocationSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input type="text" value={newZip} onChange={(e) => setNewZip(e.target.value)} placeholder="Enter new Zip Code" style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px' }} required />
              <button type="submit" style={{ backgroundColor: '#003366', color: '#fff', padding: '0.75rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Update</button>
              <button type="button" onClick={() => setIsUpdateLocationOpen(false)} style={{ backgroundColor: '#ccc', color: '#000', padding: '0.5rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {isSignInModalOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2 style={{ color: '#003366', marginBottom: '1rem' }}>{isNewCustomer ? 'Create Account' : 'Sign In'}</h2>
            <form onSubmit={handleSignInSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {isNewCustomer && (
                <input type="text" placeholder="Full Name" style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px' }} required />
              )}
              <input type="email" placeholder="Email or mobile number" value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px' }} required />
              {isNewCustomer && (
                <input type="password" placeholder="Create password" style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px' }} required />
              )}
              <button type="submit" style={{ backgroundColor: '#003366', color: '#fff', padding: '0.75rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>{isNewCustomer ? 'Create your account' : 'Continue'}</button>
            </form>
            {!isNewCustomer && (
              <p onClick={() => setIsNewCustomer(true)} style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#007185', textDecoration: 'underline', cursor: 'pointer' }}>
                New customer? Start here.
              </p>
            )}
            <button onClick={() => { setIsSignInModalOpen(false); setIsNewCustomer(false); }} style={{ marginTop: '1.5rem', padding: '0.5rem 1rem', backgroundColor: '#ccc', color: '#000', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

// Styles for modals
const modalStyle = {
  position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
  backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000
};

const modalContentStyle = {
  backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '400px', textAlign: 'center'
};

export default ShopPage;














































