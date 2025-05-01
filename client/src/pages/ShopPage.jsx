import React, { useState } from 'react';
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

  const [searchQuery, setSearchQuery] = useState('');
  const [vendorZip, setVendorZip] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      {/* Nav Bar */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', color: 'white' }}>
        <a href="/">
          <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '1rem' }} />
        </a>
        <a href="/" style={navLinkStyle}>Home</a>
        <div style={{ flex: 1 }}></div>
        <div style={{ position: 'relative', marginRight: '1rem' }}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            style={searchInputStyle}
          />
          <span style={searchIconStyle}>🔍</span>
        </div>
        <a href="/signin" style={navLinkStyle}>Sign In</a>
        <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px', marginLeft: '1rem' }}>🛒 {cart?.length > 0 && `(${cart.length})`}</a>
      </header>

      {/* Layout */}
      <div style={{ display: 'flex' }}>
        {/* Sidebar Filters */}
        <aside style={{ width: '250px', backgroundColor: '#ffffff', padding: '1rem', borderRight: '1px solid #ddd' }}>
          <h3>Filter By</h3>

          <div style={{ marginBottom: '1rem' }}>
            <label>Category:</label>
            <select style={selectStyle} value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Zip Code:</label>
            <input
              type="text"
              value={vendorZip}
              onChange={(e) => setVendorZip(e.target.value)}
              placeholder="Enter Zip"
              style={zipInputStyle}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Price Range:</label>
            <div>
              <input type="checkbox" /> Under $25<br />
              <input type="checkbox" /> $25 to $50<br />
              <input type="checkbox" /> $50 to $100<br />
              <input type="checkbox" /> $100 & Above
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Rating:</label>
            <div>
              <input type="checkbox" /> ⭐⭐⭐⭐⭐<br />
              <input type="checkbox" /> ⭐⭐⭐⭐ & Up<br />
              <input type="checkbox" /> ⭐⭐⭐ & Up
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Shipping:</label>
            <div>
              <input type="checkbox" /> Free Shipping<br />
              <input type="checkbox" /> Pickup Available
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, padding: '2rem' }}>
          <h2>Featured Products</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
            {[...Array(12).keys()].map((id) => (
              <div key={id} style={productCardStyle}>
                <img src={`https://via.placeholder.com/300x200?text=Product+${id + 1}`} alt={`Product ${id + 1}`} style={productImageStyle} />
                <h3 style={productNameStyle}>Product {id + 1}</h3>
                <p style={productRatingStyle}>⭐⭐⭐⭐ · 200 sold this month · 5 left</p>
                <p style={productPriceStyle}>$29.99</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button style={productButtonStyle}>Add to Cart</button>
                  <a href="#" style={{ textDecoration: 'underline', color: '#003366', fontSize: '0.85rem' }}>See Customer Reviews</a>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', textAlign: 'center' }}>
        <p>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Styles
const navLinkStyle = { color: 'white', fontWeight: 'bold', margin: '0 10px', textDecoration: 'none' };
const searchInputStyle = { width: '500px', padding: '10px 40px 10px 12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' };
const searchIconStyle = { position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', fontSize: '16px', color: '#666' };
const zipInputStyle = { width: '80px', padding: '6px', borderRadius: '6px', border: '1px solid #ccc' };
const selectStyle = { width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #ccc' };
const productCardStyle = { backgroundColor: '#fff', borderRadius: '10px', padding: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', textAlign: 'center' };
const productImageStyle = { width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px' };
const productNameStyle = { color: '#003366', fontSize: '1.1rem', margin: '0.5rem 0' };
const productRatingStyle = { color: '#555', fontSize: '0.9rem', marginBottom: '0.5rem' };
const productPriceStyle = { fontWeight: 'bold', color: '#333', fontSize: '1rem' };
const productButtonStyle = { backgroundColor: '#003366', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.9rem' };

export default ShopPage;
































































