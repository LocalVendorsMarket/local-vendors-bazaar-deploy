import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Faq = ({ cart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [vendorZip, setVendorZip] = useState('');
  
  const faqs = [
    {
      question: "What is Local Vendors Bazaar?",
      answer: "Local Vendors Bazaar connects buyers and local businesses in your community to support shopping local and saving big.",
    },
    {
      question: "How can I become a vendor?",
      answer: "You can sign up easily using the 'Become a Vendor' button in the navigation. We will review and activate your listing quickly!",
    },
    {
      question: "Is there a fee to join?",
      answer: "Currently, vendor signup is free! As we grow, optional premium features will be available.",
    },
    {
      question: "Can I shop from anywhere?",
      answer: "Yes! Start by entering your ZIP code to discover vendors near you and beyond.",
    },
  ];

  const handleVendorZipSearch = (e) => {
    e.preventDefault();
    alert(`Searching vendors near ${vendorZip}`);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', color: 'white' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <div style={{ display: 'flex', gap: '15px', marginLeft: '2rem' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/faq" style={navLinkStyle}>FAQ</a>
          <a href="/blog" style={navLinkStyle}>Blog</a>
          <a href="/contact" style={navLinkStyle}>Contact</a>
          <a href="/shop" style={navLinkStyle}>Shop</a>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search products..." style={searchInputStyle} />
          <input type="text" value={vendorZip} onChange={(e) => setVendorZip(e.target.value)} placeholder="Zip Code" style={zipInputStyle} />
          <button onClick={handleVendorZipSearch} style={searchButtonStyle}>Find Vendors</button>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒 {cart?.length > 0 && `(${cart.length})`}</a>
        </div>
      </header>

      {/* Subcategories */}
<div style={{ backgroundColor: '#00509e', padding: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'flex-start' }}>
  {[
    'All', 'Food', 'Jewelry', 'Clothing', 'Home Goods', 'Restaurants', 'Services', 
    'Art', 'Grocery Stores', 'Best Sellers', 'New Releases', 'Wedding Planners', 
    'Wedding Photographers'
  ].map((cat) => (
    <span key={cat} style={{ color: 'white', cursor: 'pointer', fontSize: '14px' }}>
      {cat}
    </span>
  ))}
</div>


      {/* FAQ Content */}
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ color: '#003366', fontSize: '2.5rem', marginBottom: '2rem' }}>
          Frequently Asked Questions
        </h1>

        <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              <h2 style={{ color: '#003366', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                {faq.question}
              </h2>
              <p style={{ color: '#555', fontSize: '1rem' }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px' }}>
          <div>
            <h3>Get to Know Us</h3>
            <a href="/about" style={footerLinkStyle}>About Us</a><br />
            <a href="/blog" style={footerLinkStyle}>Blog</a><br />
            <a href="/faq" style={footerLinkStyle}>FAQ</a><br />
            <a href="/careers" style={footerLinkStyle}>Careers</a>
          </div>
          <div>
            <h3>Make Money with Us</h3>
            <a href="/vendor-signup" style={footerLinkStyle}>Become a Vendor</a><br />
            <a href="/advertise" style={footerLinkStyle}>Advertise Products</a>
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

// Helper Styles
const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' };
const searchInputStyle = { width: '250px', padding: '6px 10px', height: '40px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' };
const zipInputStyle = { width: '120px', padding: '6px 10px', height: '40px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' };
const searchButtonStyle = { backgroundColor: '#d3d3d3', height: '40px', borderRadius: '8px', padding: '0 15px', border: 'none', fontSize: '14px', cursor: 'pointer' };
const footerLinkStyle = { color: 'white', textDecoration: 'none', fontSize: '14px' };

export default Faq;


























