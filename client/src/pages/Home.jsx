import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Home = ({ cart, setCart }) => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isNewCustomer, setIsNewCustomer] = useState(false);

  const productExamples = [
    { id: 1, name: 'Fresh Honey', price: '$12', image: 'https://via.placeholder.com/150x100?text=Fresh+Honey' },
    { id: 2, name: 'Handmade Scarf', price: '$20', image: 'https://via.placeholder.com/150x100?text=Handmade+Scarf' },
    { id: 3, name: 'Organic Soap', price: '$8', image: 'https://via.placeholder.com/150x100?text=Organic+Soap' },
    { id: 4, name: 'Wooden Art', price: '$40', image: 'https://via.placeholder.com/150x100?text=Wooden+Art' },
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Nav */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', color: 'white', gap: '10px' }}>
        <a href="/">
          <img src={logo} alt="Logo" style={{ width: '50px' }} />
        </a>
        <nav style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/faq" style={navLinkStyle}>FAQ</a>
          <a href="/blog" style={navLinkStyle}>Blog</a>
          <a href="/contact" style={navLinkStyle}>Contact</a>
          <a href="/signup" style={navLinkStyle}>Become a Vendor</a>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', gap: '10px' }}>
          <input type="text" placeholder="Search products..." style={{ width: '300px', padding: '6px 10px', borderRadius: '8px', border: '1px solid #ccc', height: '40px' }} />
          <button style={{ backgroundColor: '#d3d3d3', height: '40px', borderRadius: '8px', padding: '0 15px', border: 'none', fontSize: '18px', cursor: 'pointer' }}>🔍</button>
          <span onClick={() => setIsSignInModalOpen(true)} style={{ cursor: 'pointer', fontWeight: 'bold', textDecoration: 'underline' }}>Sign In</span>
          <a href="/cart" style={{ color: '#fff', textDecoration: 'none', fontSize: '26px', fontWeight: 'bold', filter: 'drop-shadow(1px 1px 0 white)' }}>
            🛒 {cart.length > 0 && `(${cart.length})`}
          </a>
        </div>
      </header>

      {/* Sub Nav */}
      <div style={{ backgroundColor: '#003366', padding: '0.5rem', display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', gap: '15px' }}>
        {['All', 'Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods', 'Restaurants', 'Services', 'New Releases', 'Best Sellers', 'Top Rated'].map(category => (
          <span key={category} style={{ color: 'white', cursor: 'pointer', fontSize: '14px' }}>{category}</span>
        ))}
      </div>

      {/* Slogan */}
      <div style={{ textAlign: 'center', margin: '2rem 0', fontSize: '24px', fontWeight: 'bold', color: '#003366' }}>
        Shop and Save Locally
      </div>

      {/* Highlighted Sections */}
      <div style={{ padding: '1rem' }}>
        {['New Releases', 'Best Seller Foods', 'Best Seller Clothing', 'Top Rated Restaurants'].map((sectionTitle, index) => (
          <div key={index} style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: '#003366', fontSize: '1.5rem', marginBottom: '1rem' }}>{sectionTitle}</h2>
            <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '1rem' }}>
              {productExamples.map((product) => (
                <div key={product.id} style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', width: '150px', minWidth: '150px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
                  <h4 style={{ color: '#003366', marginTop: '10px', fontSize: '16px' }}>{product.name}</h4>
                  <p style={{ fontWeight: 'bold', marginTop: '5px' }}>{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', padding: '2rem', textAlign: 'center', fontSize: '14px', color: 'white', marginTop: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px', marginBottom: '20px' }}>
          <div style={{ minWidth: '150px' }}>
            <h3>Get to Know Us</h3>
            <a href="/about" style={footerLinkStyle}>About Us</a><br/>
            <a href="/blog" style={footerLinkStyle}>Blog</a><br/>
            <a href="/faq" style={footerLinkStyle}>FAQ</a><br/>
            <a href="/careers" style={footerLinkStyle}>Careers</a><br/>
          </div>
          <div style={{ minWidth: '150px' }}>
            <h3>Make Money with Us</h3>
            <a href="/signup" style={footerLinkStyle}>Become a Vendor</a><br/>
            <a href="/advertise" style={footerLinkStyle}>Advertise Products</a><br/>
          </div>
          <div style={{ minWidth: '150px' }}>
            <h3>Buyer Resources</h3>
            <a href="/orders" style={footerLinkStyle}>Your Orders</a><br/>
            <a href="/shipping" style={footerLinkStyle}>Shipping Info</a><br/>
            <a href="/returns" style={footerLinkStyle}>Returns</a><br/>
            <a href="/help" style={footerLinkStyle}>Help Center</a><br/>
          </div>
          <div style={{ minWidth: '150px' }}>
            <h3>Stay Connected</h3>
            <a href="/contact" style={footerLinkStyle}>Contact Us</a><br/>
            <a href="/newsletter" style={footerLinkStyle}>Newsletter Signup</a><br/>
            <a href="/socials" style={footerLinkStyle}>Follow Us</a><br/>
          </div>
        </div>
        <p style={{ marginTop: '1rem', fontSize: '12px' }}>
          © {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.
        </p>
      </footer>

    </div>
  );
};

const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: 'bold'
};

const footerLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '14px',
};

export default Home;
































