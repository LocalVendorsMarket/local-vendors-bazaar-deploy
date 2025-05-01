import React, { useState } from 'react';
import logo from '../assets/logo.png';

const ShopPage = ({ cart, setCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Women’s Apparel', 'Jewelry', 'Makeup', 'Home Goods', 'Restaurants', 'Services', 'Gift Ideas'];
  const priceRanges = ['Under $25', '$25 to $50', '$50 to $100', '$100 & Above'];
  const starRatings = [5, 4, 3, 2, 1];

  const allProducts = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    category: categories[i % categories.length],
    price: `$${10 + i * 5}`,
    rating: '⭐⭐⭐⭐',
    sold: 25 + i,
    remaining: 20 - (i % 6),
    image: `https://via.placeholder.com/300x200?text=Product+${i + 1}`
  }));

  const filteredProducts = allProducts.filter(p => selectedCategory === 'All' || p.category === selectedCategory);

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleSearch = (e) => e.preventDefault();
  const handleSignIn = () => alert('Sign-in modal coming soon!');

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f3f4f6' }}>
      {/* Nav Bar */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', color: 'white', flexWrap: 'wrap' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
          <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>Local Vendors Bazaar</span>
        </a>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <form onSubmit={handleSearch} style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '250px', padding: '8px 36px 8px 12px', borderRadius: '8px', border: '1px solid #ccc' }}
            />
            <span
              onClick={handleSearch}
              style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
            >🔍</span>
          </form>
          <a onClick={handleSignIn} style={{ color: 'white', textDecoration: 'underline', cursor: 'pointer' }}>Sign In</a>
          <a href="/cart" style={{ fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)', color: 'white' }}>🛒</a>
        </div>
      </header>

      {/* Layout */}
      <div style={{ display: 'flex' }}>
        {/* Sidebar Filters */}
        <aside style={{ width: '250px', padding: '1rem', backgroundColor: '#e0ecf7' }}>
          <h3>Filters</h3>
          <div>
            <label>Category:</label>
            <select value={selectedCategory} onChange={handleCategoryChange} style={{ width: '100%', padding: '6px' }}>
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <label>Zip Code:</label>
            <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} placeholder="Enter Zip" style={{ width: '100%', padding: '6px', borderRadius: '6px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <label>Price:</label>
            {priceRanges.map(range => (
              <div key={range}><input type="checkbox" /> {range}</div>
            ))}
          </div>
          <div style={{ marginTop: '1rem' }}>
            <label>Star Rating:</label>
            {starRatings.map(star => (
              <div key={star}><input type="checkbox" /> {'⭐'.repeat(star)}</div>
            ))}
          </div>
        </aside>

        {/* Product Grid */}
        <main style={{ flexGrow: 1, padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {filteredProducts.map(product => (
            <div key={product.id} style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
              <h3>{product.name}</h3>
              <p>{product.price} · {product.rating}</p>
              <p style={{ fontSize: '0.85rem', color: '#003366' }}>{product.sold} bought this month · {product.remaining} left</p>
              <button style={{ backgroundColor: '#003366', color: 'white', padding: '8px 12px', borderRadius: '8px', marginTop: '0.5rem', cursor: 'pointer' }}>Add to Cart</button>
            </div>
          ))}
        </main>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', textAlign: 'center' }}>
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

const footerLinkStyle = { color: 'white', textDecoration: 'none', fontSize: '14px' };

export default ShopPage;






































































