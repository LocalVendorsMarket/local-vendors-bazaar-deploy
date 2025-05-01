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
    category: categories[(i % categories.length)],
    price: `$${(i + 1) * 5}`,
    rating: '⭐⭐⭐⭐',
    sold: 25 + i,
    remaining: 100 - i * 2,
    image: `https://via.placeholder.com/300x200?text=Product+${i + 1}`,
  }));

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [vendorZip, setVendorZip] = useState('');
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter((product) => product.category === selectedCategory);

  const handleVendorZipSearch = (e) => {
    e.preventDefault();
    alert(`Searching vendors near ${vendorZip}`);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', color: 'white' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <a href="/" style={{ ...navLinkStyle, marginLeft: '2rem' }}>Home</a>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          style={{ width: '600px', padding: '8px 40px 8px 12px', marginLeft: '1rem', borderRadius: '8px', fontSize: '14px' }}
        />
        <span style={{ position: 'relative', right: '32px', fontSize: '18px', cursor: 'pointer' }}>🔍</span>
        <span onClick={() => setIsSignInModalOpen(true)} style={{ ...navLinkStyle, marginLeft: 'auto' }}>Sign In</span>
        <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px', marginLeft: '1rem', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒</a>
      </header>

      {/* Sub Nav Bar */}
      <div style={{ backgroundColor: '#00509e', padding: '0.5rem', display: 'flex', gap: '20px', flexWrap: 'nowrap', overflowX: 'auto' }}>
        {categories.map(cat => (
          <span key={cat} onClick={() => setSelectedCategory(cat)} style={{ color: 'white', cursor: 'pointer', fontSize: '14px', whiteSpace: 'nowrap' }}>{cat}</span>
        ))}
      </div>

      {/* Filter & Product Grid */}
      <div style={{ display: 'flex', padding: '2rem' }}>
        {/* Sidebar Filters */}
        <aside style={{ width: '250px', marginRight: '2rem' }}>
          <h3 style={{ color: '#003366' }}>Filter By</h3>
          <label style={{ fontWeight: 'bold', display: 'block', margin: '1rem 0 0.5rem' }}>Category</label>
          <select style={{ width: '100%', padding: '0.5rem' }}>
            {categories.map(cat => <option key={cat}>{cat}</option>)}
          </select>
          <label style={{ fontWeight: 'bold', display: 'block', margin: '1rem 0 0.5rem' }}>Price</label>
          <div>
            <label><input type="checkbox" /> Under $25</label><br />
            <label><input type="checkbox" /> $25 - $50</label><br />
            <label><input type="checkbox" /> $50 - $100</label><br />
            <label><input type="checkbox" /> Over $100</label>
          </div>
          <label style={{ fontWeight: 'bold', display: 'block', margin: '1rem 0 0.5rem' }}>Zip Code</label>
          <input type="text" placeholder="Enter Zip" style={{ width: '100%', padding: '0.5rem' }} />
          <label style={{ fontWeight: 'bold', display: 'block', margin: '1rem 0 0.5rem' }}>Rating</label>
          <div>
            <label><input type="checkbox" /> ⭐⭐⭐⭐</label><br />
            <label><input type="checkbox" /> ⭐⭐⭐</label><br />
            <label><input type="checkbox" /> ⭐⭐</label><br />
            <label><input type="checkbox" /> ⭐</label>
          </div>
          <label style={{ fontWeight: 'bold', display: 'block', margin: '1rem 0 0.5rem' }}>Availability</label>
          <div>
            <label><input type="checkbox" /> In Stock</label><br />
            <label><input type="checkbox" /> Out of Stock</label>
          </div>
          <button style={{ marginTop: '1rem', backgroundColor: '#003366', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>Search</button>
        </aside>

        {/* Product Grid */}
        <section style={{ flexGrow: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
          {filteredProducts.map(product => (
            <div key={product.id} style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
              <h2 style={{ color: '#003366' }}>{product.name}</h2>
              <p>{product.rating}</p>
              <p>{product.price}</p>
              <p style={{ fontSize: '13px', color: '#003366' }}>{product.sold} sold this month</p>
              <p style={{ fontSize: '13px', color: '#003366' }}>{product.remaining} left</p>
              <button style={{ backgroundColor: '#003366', color: 'white', padding: '8px 12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Add to Cart</button>
            </div>
          ))}
        </section>
      </div>

      {/* Sign In Modal */}
      {isSignInModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '400px', textAlign: 'center' }}>
            <h2 style={{ color: '#003366' }}>Sign In</h2>
            <input type="email" placeholder="Email" style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px', width: '100%', marginBottom: '1rem' }} required />
            <input type="password" placeholder="Password" style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px', width: '100%', marginBottom: '1rem' }} required />
            <button style={{ backgroundColor: '#003366', color: 'white', padding: '0.75rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>Continue</button>
            <button onClick={() => setIsSignInModalOpen(false)} style={{ marginTop: '1rem', backgroundColor: '#ccc', color: '#000', padding: '0.5rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Cancel</button>
          </div>
        </div>
      )}

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

const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' };
const footerLinkStyle = { color: 'white', textDecoration: 'none', fontSize: '14px' };

export default ShopPage;















































































