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
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Top Nav */}
      <header style={{ backgroundColor: '#2b9348', padding: '1rem', display: 'flex', alignItems: 'center', color: '#fff', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a href="/">
            <img src={logo} alt="Logo" style={{ width: '50px' }} />
          </a>
          <div style={{ fontSize: '12px' }}>
            <span>Delivering to {deliveryLocation}</span><br/>
            <span onClick={() => setIsUpdateLocationOpen(true)} style={{ textDecoration: 'underline', cursor: 'pointer', color: '#aad576' }}>Update location</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1, marginLeft: '20px', gap: '10px' }}>
          <select value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)} style={{ padding: '6px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px', height: '38px', width: '80px' }}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <input type="text" placeholder="Search products..." style={{ width: '300px', padding: '6px 10px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' }} />
          <button style={{ backgroundColor: '#40916c', borderRadius: '8px', padding: '8px', border: 'none', fontSize: '18px', cursor: 'pointer', color: 'white' }}>🔍</button>
          <button onClick={() => setIsSignInModalOpen(true)} style={{ padding: '8px 12px', backgroundColor: '#40916c', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Sign In</button>
          <a href="/cart" style={{ color: '#fff', textDecoration: 'none', fontSize: '26px', fontWeight: 'bold', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒 {cart.length > 0 && `(${cart.length})`}</a>
        </div>
      </header>

      {/* Subcategory Bar */}
      <div style={{ backgroundColor: '#d8f3dc', padding: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)} style={{ padding: '6px 12px', backgroundColor: selectedCategory === category ? '#40916c' : '#2b9348', color: '#fff', border: 'none', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}>{category}</button>
        ))}
      </div>

      {/* Product Grid */}
      <div style={{ padding: '2rem', display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', flexGrow: 1 }}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
            <h2 style={{ marginTop: '10px', color: '#1f7a3f', fontSize: '1.2rem', textAlign: 'center' }}>{product.name}</h2>
            <p style={{ color: '#666', marginBottom: '8px', textAlign: 'center' }}>{product.rating}</p>
            <p style={{ fontWeight: 'bold', color: '#333', marginBottom: '12px' }}>{product.price}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{ padding: '8px 12px', backgroundColor: '#2b9348', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => setSelectedProduct(product)}>Learn More</button>
              <button style={{ padding: '8px 12px', backgroundColor: '#f9c74f', color: '#000', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      {/* Sign In Modal */}
      {isSignInModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '400px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2b9348', marginBottom: '1rem' }}>{isNewCustomer ? 'Create Your Customer Account' : 'Sign In or Create Account'}</h2>
            <form onSubmit={handleSignInSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {isNewCustomer && (<input type="text" placeholder="Full Name" style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px', fontSize: '1rem' }} required />)}
              <input type="email" placeholder="Enter mobile number or email" value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px', fontSize: '1rem' }} required />
              {isNewCustomer && (<input type="password" placeholder="Create password" style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px', fontSize: '1rem' }} required />)}
              <button type="submit" style={{ backgroundColor: '#2b9348', color: '#fff', padding: '0.75rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>{isNewCustomer ? 'Create your account' : 'Continue'}</button>
            </form>
            <p style={{ fontSize: '0.75rem', color: '#777', marginTop: '1rem' }}>By continuing, you agree to LocalVendorsBazaar's Conditions of Use and Privacy Notice.</p>
            {!isNewCustomer && (<p onClick={() => setIsNewCustomer(true)} style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#007185', textDecoration: 'underline', cursor: 'pointer', textAlign: 'center' }}>New customer? Start here.</p>)}
            <button onClick={() => { setIsSignInModalOpen(false); setIsNewCustomer(false); }} style={{ marginTop: '1.5rem', padding: '0.5rem 1rem', backgroundColor: '#ccc', color: '#000', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>Cancel</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default ShopPage;









































