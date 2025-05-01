import React, { useState } from 'react';
import logo from '../assets/logo.png';

const ShopPage = ({ cart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All', 'Women’s Apparel', 'Jewelry', 'Makeup', 'Clothing', 'Home Goods', 'Restaurants', 'Services', 'Grocery', 'Toys', 'Electronics'
  ];

  const products = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    category: categories[i % categories.length],
    price: `$${10 + i * 3}`,
    rating: '⭐⭐⭐⭐',
    sold: 50 + i * 2,
    remaining: 100 - i * 5,
    image: `https://via.placeholder.com/300x200?text=Product+${i + 1}`,
  }));

  const filteredProducts = products.filter(
    (product) => selectedCategory === 'All' || product.category === selectedCategory
  );

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f6f8' }}>
      {/* Nav Bar */}
      <header style={{ backgroundColor: '#003366', color: 'white', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
          <img src={logo} alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>LocalVendorsBazaar</span>
        </a>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ccc', width: '300px' }}
        />
        <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/signin" style={navLinkStyle}>Sign In</a>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒 {cart?.length > 0 && `(${cart.length})`}</a>
        </nav>
      </header>

      <div style={{ display: 'flex' }}>
        {/* Sidebar Filter */}
        <aside style={{ width: '250px', backgroundColor: '#fff', padding: '1rem', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
          <h3 style={filterHeaderStyle}>Filter By</h3>

          <div style={{ marginBottom: '1rem' }}>
            <label style={filterLabelStyle}>Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={filterSelectStyle}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={filterLabelStyle}>Zip Code</label>
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="Enter Zip"
              style={filterInputStyle}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={filterLabelStyle}>Price Range</label>
            <div>
              <input type="checkbox" id="p1" /><label htmlFor="p1"> Under $25</label><br />
              <input type="checkbox" id="p2" /><label htmlFor="p2"> $25 to $50</label><br />
              <input type="checkbox" id="p3" /><label htmlFor="p3"> $50 to $100</label><br />
              <input type="checkbox" id="p4" /><label htmlFor="p4"> $100 & Above</label>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={filterLabelStyle}>Star Rating</label>
            <div>
              <input type="checkbox" id="r4" /><label htmlFor="r4"> ⭐⭐⭐⭐ & Up</label><br />
              <input type="checkbox" id="r3" /><label htmlFor="r3"> ⭐⭐⭐ & Up</label>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main style={{ flexGrow: 1, padding: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2rem' }}>
            {filteredProducts.map(product => (
              <div key={product.id} style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', padding: '1rem', textAlign: 'center' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px' }} />
                <h3 style={{ color: '#003366', margin: '0.5rem 0' }}>{product.name}</h3>
                <p style={{ margin: '0.3rem 0', fontSize: '14px' }}>{product.price} · {product.rating}</p>
                <p style={{ color: '#555', fontSize: '13px' }}>Sold this month: {product.sold}</p>
                <p style={{ color: '#555', fontSize: '13px' }}>Items left: {product.remaining}</p>
                <div style={{ marginTop: '1rem' }}>
                  <button style={actionButtonStyle}>Add to Cart</button>
                  <a href="#" style={{ display: 'block', color: '#007185', fontSize: '13px', marginTop: '8px', textDecoration: 'underline' }}>See Customer Reviews</a>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', textAlign: 'center', marginTop: '2rem' }}>
        <p style={{ fontSize: '14px' }}>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

const navLinkStyle = { color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' };
const filterHeaderStyle = { color: '#003366', fontSize: '16px', marginBottom: '10px' };
const filterLabelStyle = { display: 'block', marginBottom: '4px', fontSize: '14px', fontWeight: 'bold', color: '#003366' };
const filterSelectStyle = { width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #ccc' };
const filterInputStyle = { width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #ccc' };
const actionButtonStyle = { backgroundColor: '#003366', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' };

export default ShopPage;































































