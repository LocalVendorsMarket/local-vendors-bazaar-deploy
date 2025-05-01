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

  const departments = ['Apparel', 'Electronics', 'Beauty', 'Home', 'Toys', 'Grocery'];

  const allProducts = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    category: categories[i % categories.length],
    price: `$${(i + 1) * 10}`,
    rating: '⭐⭐⭐⭐',
    sold: 20 + i,
    remaining: 100 - i * 3,
    image: `https://via.placeholder.com/300x200?text=Product+${i + 1}`,
  }));

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [selectedDept, setSelectedDept] = useState('');

  const filteredProducts = selectedCategory === 'All' ? allProducts : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff', minHeight: '100vh' }}>
      {/* Nav Bar */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', color: 'white' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <input
          type="text"
          placeholder="Search Products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ flex: '1', maxWidth: '400px', margin: '0 1rem', padding: '0.5rem', borderRadius: '8px' }}
        />
        <span role="img" aria-label="search">🔍</span>
        <a href="/" style={navLinkStyle}>Home</a>
        <a href="#" style={navLinkStyle}>Sign In</a>
        <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒</a>
      </header>

      {/* Sub Nav */}
      <div style={{ backgroundColor: '#00509e', padding: '0.5rem', display: 'flex', overflowX: 'auto' }}>
        {categories.map(cat => (
          <span key={cat} onClick={() => setSelectedCategory(cat)} style={{ color: 'white', margin: '0 10px', cursor: 'pointer' }}>{cat}</span>
        ))}
      </div>

      {/* Main Section */}
      <div style={{ display: 'flex' }}>
        {/* Sidebar Filter */}
        <aside style={{ width: '250px', backgroundColor: '#fff', padding: '1rem', borderRight: '1px solid #ccc' }}>
          <h3>Filter By</h3>
          <label>Category</label>
          <select style={filterStyle} value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <label>Zip Code</label>
          <input type="text" style={{ ...filterStyle, width: '100%' }} value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
          <label>Price Range</label>
          <div>
            <input type="checkbox" /> Under $25<br />
            <input type="checkbox" /> $25 to $50<br />
            <input type="checkbox" /> $50 to $100<br />
            <input type="checkbox" /> Over $100
          </div>
          <label>Ratings</label>
          <div>
            <input type="checkbox" /> ⭐<br />
            <input type="checkbox" /> ⭐⭐<br />
            <input type="checkbox" /> ⭐⭐⭐<br />
            <input type="checkbox" /> ⭐⭐⭐⭐<br />
            <input type="checkbox" /> ⭐⭐⭐⭐⭐
          </div>
          <label>Department</label>
          <select style={filterStyle} value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)}>
            <option value="">Select Department</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#003366', color: 'white', borderRadius: '8px', border: 'none' }}>Search</button>
        </aside>

        {/* Product Grid */}
        <main style={{ flex: 1, padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
          {filteredProducts.map(product => (
            <div key={product.id} style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
              <h3 style={{ color: '#003366' }}>{product.name}</h3>
              <p>{product.price}</p>
              <p>{product.rating} · {product.sold} sold · {product.remaining} left</p>
              <button style={{ backgroundColor: '#003366', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', border: 'none' }}>Add to Cart</button>
            </div>
          ))}
        </main>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', textAlign: 'center', marginTop: '2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px' }}>
          <div>
            <h3>Get to Know Us</h3>
            <a href="/about" style={footerLinkStyle}>About Us</a><br />
            <a href="/blog" style={footerLinkStyle}>Blog</a><br />
            <a href="/faq" style={footerLinkStyle}>FAQ</a><br />
            <a href="/testimonials" style={footerLinkStyle}>Testimonials</a><br />
            <a href="/careers" style={footerLinkStyle}>Careers</a>
          </div>
          <div>
            <h3>Make Money with Us</h3>
            <a href="/vendor-signup" style={footerLinkStyle}>Become a Vendor</a><br />
            <a href="/advertise" style={footerLinkStyle}>Advertise Products</a><br />
            <a href="/advertise" style={footerLinkStyle}>Advertise Services</a><br />
            <a href="/advertise" style={footerLinkStyle}>Advertise Events</a>
          </div>
          <div>
            <h3>Buyer Resources</h3>
            <a href="/orders" style={footerLinkStyle}>Your Orders</a><br />
            <a href="/shipping" style={footerLinkStyle}>Shipping Info</a><br />
            <a href="/returns" style={footerLinkStyle}>Returns</a><br />
            <a href="/help" style={footerLinkStyle}>Help Center</a>
          </div>
          <div>
            <h3>Stay Connected</h3>
            <a href="/contact" style={footerLinkStyle}>Contact Us</a><br />
            <a href="/newsletter" style={footerLinkStyle}>Newsletter Signup</a><br />
            <a href="/socials" style={footerLinkStyle}>Follow Us</a>
          </div>
        </div>
        <p style={{ marginTop: '1rem', fontSize: '12px' }}>
          © {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'underline', margin: '0 1rem' };
const filterStyle = { width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '8px', border: '1px solid #ccc' };
const footerLinkStyle = { color: 'white', textDecoration: 'none', fontSize: '14px' };

export default ShopPage;













































































