import React, { useState } from 'react';
import logo from '../assets/logo.png';

const ShopPage = ({ cart, setCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [vendorZip, setVendorZip] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedStars, setSelectedStars] = useState('');

  const categories = [
    'All', 'Women’s Apparel', 'Jewelry', 'Makeup', 'Clothing', 'Art', 'Home Goods', 'Restaurants', 'Services',
    'Best Sellers', "Today's Deals", 'New Releases', 'Gift Ideas', 'Wedding Planners', 'Henna Tattoos', 'Bakeries',
    'Coffee Shops', 'Florists', 'Furniture', 'Grocery Stores', 'Health & Beauty', 'Mobile Repair', 'Pet Services',
    'Photobooth Rentals', 'Tutors', 'Yoga Studios', 'Landscaping', 'Auto Repair', 'Travel Agents', 'Accountants'
  ];

  const products = new Array(12).fill(null).map((_, idx) => ({
    id: idx + 1,
    name: `Product ${idx + 1}`,
    category: categories[(idx + 1) % categories.length],
    price: `$${(10 + idx * 2)}`,
    rating: '⭐⭐⭐⭐',
    sold: `${10 + idx} sold this month`,
    remaining: `${20 - idx} remaining`,
    image: `https://via.placeholder.com/300x200?text=Product+${idx + 1}`,
  }));

  const filtered = products.filter(
    (p) =>
      (selectedCategory === 'All' || p.category === selectedCategory) &&
      (!selectedPrice || p.price <= selectedPrice) &&
      (!selectedStars || p.rating.length === parseInt(selectedStars))
  );

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff' }}>
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', justifyContent: 'space-between', color: 'white', alignItems: 'center' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
          <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>Local Vendors Bazaar</span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search products..." style={{ height: '35px', borderRadius: '8px', padding: '0 10px' }} />
          <input type="text" value={vendorZip} onChange={(e) => setVendorZip(e.target.value)} placeholder="Zip Code" style={{ height: '35px', width: '100px', borderRadius: '8px', padding: '0 10px' }} />
          <a href="/vendor-signup" style={{ color: 'white', textDecoration: 'underline' }}>Become a Vendor</a>
          <a href="/cart" style={{ fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)', textDecoration: 'none', color: 'white' }}>🛒</a>
        </nav>
      </header>

      <div style={{ display: 'flex' }}>
        <aside style={{ width: '240px', background: '#f5f5f5', padding: '1rem' }}>
          <h3>Filter By</h3>
          <label>Category:</label><br />
          <select style={{ width: '100%' }} value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <br /><br />

          <label>Price:</label><br />
          <select style={{ width: '100%' }} value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}>
            <option value="">Any</option>
            <option value="20">Under $20</option>
            <option value="40">Under $40</option>
            <option value="60">Under $60</option>
            <option value="80">Under $80</option>
          </select>
          <br /><br />

          <label>Rating:</label><br />
          <select style={{ width: '100%' }} value={selectedStars} onChange={(e) => setSelectedStars(e.target.value)}>
            <option value="">Any</option>
            <option value="5">★★★★★</option>
            <option value="4">★★★★</option>
            <option value="3">★★★</option>
          </select>
        </aside>

        <main style={{ flexGrow: 1, padding: '1rem' }}>
          <h2 style={{ color: '#003366' }}>Explore Products</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
            {filtered.map((product) => (
              <div key={product.id} style={{ background: 'white', padding: '1rem', borderRadius: '12px', boxShadow: '0 0 8px rgba(0,0,0,0.1)' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
                <h3 style={{ margin: '0.5rem 0' }}>{product.name}</h3>
                <p style={{ margin: 0 }}>{product.price}</p>
                <p style={{ margin: '4px 0', fontSize: '13px', color: '#003366' }}>{product.rating}</p>
                <p style={{ margin: '4px 0', fontSize: '13px', color: '#003366' }}>{product.sold}</p>
                <p style={{ margin: '4px 0', fontSize: '13px', color: '#003366' }}>{product.remaining}</p>
                <div style={{ marginTop: '0.5rem' }}>
                  <a href="#" style={{ textDecoration: 'underline', fontSize: '12px', color: '#007185' }}>See customer reviews</a>
                </div>
                <button style={{ marginTop: '0.5rem', backgroundColor: '#003366', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>

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
        <p style={{ marginTop: '1rem', fontSize: '12px' }}>
          © {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

const footerLinkStyle = { color: 'white', textDecoration: 'none', fontSize: '14px' };

export default ShopPage;






























































