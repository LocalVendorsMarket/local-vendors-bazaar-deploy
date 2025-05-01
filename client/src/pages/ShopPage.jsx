import React, { useState } from 'react';
import logo from '../assets/logo.png';

const ShopPage = ({ cart, setCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [vendorZip, setVendorZip] = useState('');
  const [searchCategory, setSearchCategory] = useState('All');

  const categories = [
    'All', 'Women’s Apparel', 'Jewelry', 'Makeup', 'Clothing', 'Art', 'Home Goods', 'Restaurants',
    'Services', 'Best Sellers', "Today's Deals", 'New Releases', 'Gift Ideas', 'Wedding Planners',
    'Henna Tattoos', 'Bakeries', 'Coffee Shops', 'Florists', 'Furniture', 'Grocery Stores',
    'Health & Beauty', 'Local Events', 'Pet Services', 'Auto Repair', 'Tutors', 'Accountants'
  ];

  const allProducts = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    category: categories[i % categories.length],
    price: `$${(10 + i * 5).toFixed(2)}`,
    rating: '⭐⭐⭐⭐',
    sold: Math.floor(Math.random() * 200),
    remaining: Math.floor(Math.random() * 50) + 5,
    image: `https://via.placeholder.com/300x200?text=Product+${i + 1}`
  }));

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f2f2f2', minHeight: '100vh' }}>

      {/* Nav Bar */}
      <header style={{ backgroundColor: '#003366', color: 'white', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
          <img src={logo} alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Local Vendors Bazaar</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search products..." style={searchInputStyle} />
          <input type="text" value={vendorZip} onChange={(e) => setVendorZip(e.target.value)} placeholder="Zip Code" style={zipInputStyle} />
          <button style={searchButtonStyle}>Search</button>
          <a href="/vendor-signup" style={navLinkStyle}>Become a Vendor</a>
          <a href="/signin" style={navLinkStyle}>Sign In</a>
          <a href="/cart" style={{ fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)', textDecoration: 'none', color: 'white' }}>🛒 {cart?.length > 0 && `(${cart.length})`}</a>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ display: 'flex' }}>
        {/* Sidebar Filters */}
        <aside style={{ width: '250px', backgroundColor: '#e6f0ff', padding: '1rem' }}>
          <h3 style={{ marginBottom: '1rem', color: '#003366' }}>Filters</h3>
          <label>Category</label><br />
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <label>Price Range</label>
          <input type="range" min="5" max="200" style={{ width: '100%' }} /><br /><br />
          <label>Department</label>
          <select style={{ width: '100%', padding: '8px' }}>
            <option>All</option>
            <option>Clothing</option>
            <option>Services</option>
            <option>Retail</option>
          </select><br /><br />
          <label>Star Rating</label>
          <div>
            <input type="checkbox" /> ⭐⭐⭐⭐⭐<br />
            <input type="checkbox" /> ⭐⭐⭐⭐ & up<br />
            <input type="checkbox" /> ⭐⭐⭐ & up<br />
          </div>
        </aside>

        {/* Product Grid */}
        <main style={{ flex: 1, padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
              <h3 style={{ margin: '0.5rem 0' }}>{product.name}</h3>
              <p style={{ margin: '0.25rem 0' }}>{product.price}</p>
              <p style={{ margin: '0.25rem 0' }}>Sold this month: {product.sold}</p>
              <p style={{ margin: '0.25rem 0' }}>Items remaining: {product.remaining}</p>
              <p style={{ margin: '0.25rem 0' }}>{product.rating}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button style={learnMoreButtonStyle}>Learn More</button>
                <button style={addToCartButtonStyle}>Add to Cart</button>
              </div>
              <a href="#" style={{ fontSize: '0.85rem', color: '#007185', textDecoration: 'underline', display: 'block', marginTop: '0.5rem' }}>See customer reviews</a>
            </div>
          ))}
        </main>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
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
        <p style={{ marginTop: '1rem', fontSize: '12px' }}>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Styles
const navLinkStyle = { color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' };
const searchInputStyle = { width: '200px', padding: '6px', borderRadius: '8px', border: '1px solid #ccc' };
const zipInputStyle = { width: '100px', padding: '6px', borderRadius: '8px', border: '1px solid #ccc' };
const searchButtonStyle = { padding: '6px 12px', borderRadius: '8px', border: 'none', backgroundColor: '#40916c', color: 'white', fontWeight: 'bold' };
const learnMoreButtonStyle = { backgroundColor: '#007185', color: 'white', border: 'none', padding: '6px 10px', borderRadius: '6px', cursor: 'pointer' };
const addToCartButtonStyle = { backgroundColor: '#2b9348', color: 'white', border: 'none', padding: '6px 10px', borderRadius: '6px', cursor: 'pointer' };
const footerLinkStyle = { color: 'white', textDecoration: 'none', fontSize: '14px' };

export default ShopPage;





























































