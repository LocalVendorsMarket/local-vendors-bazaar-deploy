import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Testimonials = ({ cart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [vendorZip, setVendorZip] = useState('');

  const testimonials = [
    {
      name: "Sarah M.",
      feedback: "Local Vendors Bazaar helped me discover amazing local shops I never knew existed! Highly recommended!",
      image: "https://via.placeholder.com/80"
    },
    {
      name: "John D.",
      feedback: "As a vendor, I've gained so many new customers since joining. Best decision ever!",
      image: "https://via.placeholder.com/80"
    },
    {
      name: "Emily R.",
      feedback: "Shopping local has never been this easy. Love the platform and the community feel!",
      image: "https://via.placeholder.com/80"
    },
    {
      name: "Michael T.",
      feedback: "The zip code search made finding services nearby super convenient. 10/10 experience!",
      image: "https://via.placeholder.com/80"
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
          <a href="/testimonials" style={navLinkStyle}>Testimonials</a>
          <a href="/contact" style={navLinkStyle}>Contact</a>
          <a href="/shop" style={navLinkStyle}>Shop</a>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search products..." style={searchInputStyle} />
          <input type="text" value={vendorZip} onChange={(e) => setVendorZip(e.target.value)} placeholder="Zip Code" style={zipInputStyle} />
          <button onClick={handleVendorZipSearch} style={searchButtonStyle}>Find Vendors</button>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)' }}>
            🛒 {cart?.length > 0 && `(${cart.length})`}
          </a>
        </div>
      </header>

      {/* Testimonials Section */}
      <main style={{ textAlign: 'center', padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ color: '#003366', fontSize: '2.5rem', marginBottom: '2rem' }}>
          What Our Customers Are Saying
        </h1>

        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {testimonials.map((testi, index) => (
            <div key={index} style={testimonialCardStyle}>
              <img src={testi.image} alt={testi.name} style={testimonialImageStyle} />
              <blockquote style={testimonialQuoteStyle}>
                “{testi.feedback}”
              </blockquote>
              <p style={testimonialNameStyle}>- {testi.name}</p>
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

// Styles
const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' };
const searchInputStyle = { width: '250px', padding: '6px 10px', height: '40px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' };
const zipInputStyle = { width: '120px', padding: '6px 10px', height: '40px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' };
const searchButtonStyle = { backgroundColor: '#d3d3d3', height: '40px', borderRadius: '8px', padding: '0 15px', border: 'none', fontSize: '14px', cursor: 'pointer' };
const footerLinkStyle = { color: 'white', textDecoration: 'none', fontSize: '14px' };

const testimonialCardStyle = { backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center' };
const testimonialImageStyle = { borderRadius: '50%', width: '80px', height: '80px', objectFit: 'cover', marginBottom: '1rem' };
const testimonialQuoteStyle = { fontStyle: 'italic', color: '#555', fontSize: '1rem', marginBottom: '1rem' };
const testimonialNameStyle = { fontWeight: 'bold', color: '#003366' };

export default Testimonials;
