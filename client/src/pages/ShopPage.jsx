import React, { useState } from 'react';
import logo from '../assets/logo.png';

const ShopPage = ({ cart }) => {
  const categories = [
    'All', 'Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods', 'Restaurants', 'Services',
    'Best Sellers', "Today's Deals", 'New Releases', 'Gift Ideas', 'Wedding Planners',
    'Wedding Photographers', 'Henna Tattoos', 'Bakeries', 'Coffee Shops', 'Florists', 'Furniture',
    'Grocery Stores', 'Health & Beauty', 'Local Events', 'Mobile Repair', 'Music & Bands',
    'Party Supplies', 'Pet Services', 'Photobooth Rentals', 'Real Estate Agents', 'Tutors',
    'Yoga Studios', 'Landscaping', 'Auto Repair', 'Travel Agents', 'Accountants', 'Makeup', 'Books'
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Nav Bar */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <div style={{ flexGrow: 1, margin: '0 1rem', position: 'relative' }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '100%', padding: '10px 40px 10px 12px', borderRadius: '8px', fontSize: '14px' }}
          />
          <span style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#003366', background: '#fff', padding: '4px', borderRadius: '50%', cursor: 'pointer' }}>🔍</span>
        </div>
        <nav style={{ display: 'flex', gap: '15px' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/signin" style={navLinkStyle}>Sign In</a>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒</a>
        </nav>
      </header>

      {/* Sub Nav Bar */}
      <div style={{ backgroundColor: '#00509e', padding: '0.5rem 1rem', display: 'flex', flexWrap: 'nowrap', overflowX: 'auto', gap: '1rem' }}>
        {categories.map((cat) => (
          <span key={cat} style={{ color: 'white', whiteSpace: 'nowrap', cursor: 'pointer', fontSize: '14px' }}>{cat}</span>
        ))}
      </div>

      {/* Filter Bar */}
      <aside style={{ padding: '1rem', backgroundColor: '#f1f1f1', display: 'flex', flexDirection: 'column', gap: '1rem', width: '250px' }}>
        <label style={filterLabelStyle}>Category</label>
        <select style={filterSelectStyle}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <label style={filterLabelStyle}>Zip Code</label>
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          placeholder="Enter Zip Code"
          style={{ ...filterInputStyle, width: '120px' }}
        />

        <label style={filterLabelStyle}>Department</label>
        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          style={filterSelectStyle}
        >
          <option value="All">All Departments</option>
          <option value="Women's Apparel">Women's Apparel</option>
          <option value="Electronics">Electronics</option>
          <option value="Services">Services</option>
          <option value="Books">Books</option>
          <option value="Beauty">Beauty</option>
        </select>

        <button style={{ ...searchButtonStyle, backgroundColor: '#003366', color: 'white' }}>Search</button>
      </aside>

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

const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px' };
const filterLabelStyle = { fontWeight: 'bold', fontSize: '14px' };
const filterSelectStyle = { width: '100%', padding: '8px', borderRadius: '6px' };
const filterInputStyle = { padding: '8px', borderRadius: '6px', border: '1px solid #ccc' };
const searchButtonStyle = { padding: '10px', borderRadius: '8px', border: 'none', fontSize: '14px', cursor: 'pointer' };
const footerLinkStyle = { color: 'white', textDecoration: 'none', fontSize: '14px' };

export default ShopPage;














































































