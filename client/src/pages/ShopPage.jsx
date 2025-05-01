import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';

const ShopPage = ({ cart, setCart }) => {
  const categories = [
    'All', 'Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods', 'Restaurants', 'Services',
    'Best Sellers', "Today's Deals", 'New Releases', 'Gift Ideas', 'Wedding Planners',
    'Wedding Photographers', 'Henna Tattoos', 'Bakeries', 'Coffee Shops', 'Florists', 'Furniture',
    'Grocery Stores', 'Health & Beauty', 'Local Events', 'Mobile Repair', 'Music & Bands',
    'Party Supplies', 'Pet Services', 'Photobooth Rentals', 'Real Estate Agents', 'Tutors',
    'Yoga Studios', 'Landscaping', 'Auto Repair', 'Travel Agents', 'Accountants'
  ];

  const allProducts = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    category: categories[i % categories.length],
    price: `$${10 + i * 5}`,
    rating: '⭐⭐⭐⭐',
    image: `https://via.placeholder.com/300x200?text=Product+${i + 1}`,
    sold: 20 + i,
    remaining: 10 - (i % 5)
  }));

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [vendorZip, setVendorZip] = useState('');
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isNewCustomer, setIsNewCustomer] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for "${searchQuery}" in ${selectedCategory}`);
  };

  const handleVendorZipSearch = (e) => {
    e.preventDefault();
    alert(`Searching vendors near ${vendorZip}`);
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    setIsSignInModalOpen(false);
    setIsNewCustomer(false);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff', minHeight: '100vh' }}>

      {/* Header */}
      <header style={{ backgroundColor: '#003366', color: 'white', padding: '1rem', display: 'flex', alignItems: 'center' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <a href="/" style={navLink}>Home</a>
        <form onSubmit={handleSearchSubmit} style={{ marginLeft: '2rem', position: 'relative' }}>
          <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search products..." style={searchInput} />
          <button type="submit" style={magnifierButton}>🔍</button>
        </form>
        <span onClick={() => setIsSignInModalOpen(true)} style={{ ...navLink, marginLeft: 'auto' }}>Sign In</span>
        <a href="/cart" style={{ ...navLink, fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒 {cart?.length > 0 && `(${cart.length})`}</a>
      </header>

      {/* Subnav */}
      <div style={{ backgroundColor: '#00509e', padding: '0.5rem', display: 'flex', gap: '10px', overflowX: 'auto' }}>
        {categories.map(cat => (
          <span key={cat} onClick={() => setSelectedCategory(cat)} style={{ color: 'white', cursor: 'pointer' }}>{cat}</span>
        ))}
      </div>

      {/* Filters and Products */}
      <div style={{ display: 'flex', padding: '1rem' }}>
        <aside style={{ width: '250px', background: 'white', padding: '1rem', borderRadius: '12px', marginRight: '1rem' }}>
          <h3>Filter By</h3>
          <div>
            <label>Category</label><br />
            <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} style={filterInput}>
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label>Zip Code</label><br />
            <input type="text" value={vendorZip} onChange={e => setVendorZip(e.target.value)} placeholder="Enter zip" style={filterInput} />
            <button onClick={handleVendorZipSearch} style={filterButton}>Search</button>
          </div>
          <div>
            <label>Price</label><br />
            <label><input type="checkbox" /> $0 - $25</label><br />
            <label><input type="checkbox" /> $25 - $50</label><br />
            <label><input type="checkbox" /> $50+</label>
          </div>
          <div>
            <label>Rating</label><br />
            <label><input type="checkbox" /> ⭐⭐⭐⭐</label><br />
            <label><input type="checkbox" /> ⭐⭐⭐</label>
          </div>
        </aside>

        <main style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {filteredProducts.map(product => (
            <div key={product.id} style={productCard}>
              <img src={product.image} alt={product.name} style={productImage} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <p>{product.rating}</p>
              <p style={{ fontSize: '13px' }}>{product.sold} bought this month · {product.remaining} left</p>
              <button style={addToCart}>Add to Cart</button>
            </div>
          ))}
        </main>
      </div>

      {/* Sign-In Modal */}
      {isSignInModalOpen && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h2 style={{ color: '#003366' }}>{isNewCustomer ? 'Create Account' : 'Sign In'}</h2>
            <form onSubmit={handleSignInSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {isNewCustomer && <input type="text" placeholder="Full Name" style={inputStyle} required />}
              <input type="email" placeholder="Email" value={signInEmail} onChange={e => setSignInEmail(e.target.value)} style={inputStyle} required />
              {isNewCustomer && <input type="password" placeholder="Create Password" style={inputStyle} required />}
              <button type="submit" style={signInButton}>{isNewCustomer ? 'Create your account' : 'Continue'}</button>
            </form>
            {!isNewCustomer && (
              <p onClick={() => setIsNewCustomer(true)} style={newCustomerText}>New customer? Start here.</p>
            )}
            <button onClick={() => { setIsSignInModalOpen(false); setIsNewCustomer(false); }} style={cancelButton}>Cancel</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', textAlign: 'center', padding: '2rem', marginTop: '2rem' }}>
        <div>
          <a href="/about" style={footerLink}>About Us</a> | 
          <a href="/faq" style={footerLink}> FAQ</a> | 
          <a href="/contact" style={footerLink}> Contact</a>
        </div>
        <p style={{ fontSize: '12px' }}>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Styles
const navLink = { color: 'white', marginLeft: '1rem', textDecoration: 'none', fontWeight: 'bold', cursor: 'pointer' };
const searchInput = { height: '35px', borderRadius: '8px', padding: '0 10px', width: '250px', fontSize: '14px' };
const magnifierButton = { position: 'absolute', right: '10px', top: '7px', background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer' };
const productCard = { background: 'white', borderRadius: '12px', padding: '1rem', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' };
const productImage = { width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' };
const addToCart = { backgroundColor: '#003366', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };
const filterInput = { width: '100%', padding: '0.5rem', margin: '0.25rem 0', borderRadius: '8px', border: '1px solid #ccc' };
const filterButton = { marginTop: '0.5rem', backgroundColor: '#003366', color: 'white', border: 'none', padding: '8px', borderRadius: '8px', cursor: 'pointer' };
const footerLink = { color: 'white', margin: '0 10px', textDecoration: 'underline', fontSize: '14px' };
const modalOverlay = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 };
const modalContent = { background: 'white', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '400px', textAlign: 'center' };
const inputStyle = { padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px' };
const signInButton = { backgroundColor: '#003366', color: 'white', padding: '0.75rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' };
const newCustomerText = { marginTop: '1rem', fontSize: '0.85rem', color: '#007185', textDecoration: 'underline', cursor: 'pointer' };
const cancelButton = { marginTop: '1rem', backgroundColor: '#ccc', color: '#000', padding: '0.5rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' };

export default ShopPage;










































































