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

  const allProducts = [
    { id: 1, name: 'Local Honey', category: 'Food', price: '$12', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Local+Honey' },
    { id: 2, name: 'Handmade Necklace', category: 'Jewelry', price: '$25', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Necklace' },
    { id: 3, name: 'Organic T-Shirt', category: 'Clothing', price: '$18', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Organic+T-Shirt' },
    { id: 4, name: 'Custom Artwork', category: 'Art', price: '$80', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Artwork' },
    { id: 5, name: 'Gourmet Pizza', category: 'Restaurants', price: '$15', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Pizza' },
    { id: 6, name: 'Home Repair Service', category: 'Services', price: '$50/hr', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Home+Repair' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [vendorZip, setVendorZip] = useState('');
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');
  const [isNewCustomer, setIsNewCustomer] = useState(false);

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

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
      <header style={{ backgroundColor: '#003366', padding: '1rem', color: 'white', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
        </a>
        <nav style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/shop" style={navLinkStyle}>Shop</a>
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search products..." style={{ ...searchInputStyle, width: '250px' }} />
          <span onClick={() => alert(`Searching for ${searchQuery}`)} style={{ cursor: 'pointer', fontSize: '20px' }}>🔍</span>
          <span onClick={() => setIsSignInModalOpen(true)} style={navLinkStyle}>Sign In</span>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px' }}>🛒 {cart?.length > 0 && `(${cart.length})`}</a>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ display: 'flex', padding: '1rem' }}>
        {/* Sidebar Filters */}
        <aside style={{ width: '250px', paddingRight: '1rem' }}>
          <h3>Filter By</h3>
          <label>Category</label>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} style={{ width: '100%', marginBottom: '1rem' }}>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <label>Zip Code</label>
          <input type="text" value={vendorZip} onChange={(e) => setVendorZip(e.target.value)} style={{ width: '100%', marginBottom: '1rem' }} />
          <button onClick={handleVendorZipSearch} style={searchButtonStyle}>Search Zip</button>

          <label>Price</label>
          <ul>
            <li>$0 - $25</li>
            <li>$25 - $50</li>
            <li>$50 - $100</li>
            <li>$100 & up</li>
          </ul>

          <label>Rating</label>
          <ul>
            <li>⭐⭐⭐⭐⭐</li>
            <li>⭐⭐⭐⭐</li>
            <li>⭐⭐⭐</li>
            <li>⭐⭐</li>
            <li>⭐</li>
          </ul>

          <label>Availability</label>
          <ul>
            <li>Pickup Available</li>
            <li>Delivery Only</li>
          </ul>

          <label>Product Type</label>
          <ul>
            <li>New</li>
            <li>Used</li>
          </ul>
        </aside>

        {/* Products Display */}
        <main style={{ flex: 1, display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {filteredProducts.map(product => (
            <div key={product.id} style={productCardStyle}>
              <img src={product.image} alt={product.name} style={productImageStyle} />
              <h3>{product.name}</h3>
              <p>{product.rating}</p>
              <p>{product.price}</p>
              <button style={productButtonStyle}>Add to Cart</button>
            </div>
          ))}
        </main>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', textAlign: 'center' }}>
        <p>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>

      {/* Sign In Modal */}
      {isSignInModalOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2 style={{ color: '#003366' }}>{isNewCustomer ? 'Create Account' : 'Sign In'}</h2>
            <form onSubmit={handleSignInSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {isNewCustomer && <input type="text" placeholder="Full Name" style={inputStyle} required />}
              <input type="email" placeholder="Email" value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} style={inputStyle} required />
              {isNewCustomer && <input type="password" placeholder="Create Password" style={inputStyle} required />}
              <button type="submit" style={productButtonStyle}>{isNewCustomer ? 'Create your account' : 'Continue'}</button>
            </form>
            {!isNewCustomer && (
              <p onClick={() => setIsNewCustomer(true)} style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#007185', textDecoration: 'underline', cursor: 'pointer' }}>
                New customer? Start here.
              </p>
            )}
            <button onClick={() => { setIsSignInModalOpen(false); setIsNewCustomer(false); }} style={{ marginTop: '1.5rem', backgroundColor: '#ccc', color: '#000', padding: '0.5rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles
const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px', cursor: 'pointer' };
const searchInputStyle = { padding: '6px 10px', height: '40px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' };
const searchButtonStyle = { marginTop: '0.5rem', backgroundColor: '#40916c', color: 'white', border: 'none', borderRadius: '8px', padding: '6px 12px', fontWeight: 'bold', cursor: 'pointer' };
const productCardStyle = { width: '250px', backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' };
const productImageStyle = { width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' };
const productButtonStyle = { backgroundColor: '#003366', color: 'white', padding: '8px 12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' };
const modalStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 };
const modalContentStyle = { backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', maxWidth: '400px', width: '100%' };
const inputStyle = { padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px' };

export default ShopPage;







































































