import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Home = ({ cart, setCart }) => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isNewCustomer, setIsNewCustomer] = useState(false);
  const [location, setLocation] = useState('Deliver to Elgin 60120');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const productExamples = [
    { id: 1, name: 'Fresh Honey', price: '$12', image: 'https://via.placeholder.com/150x100?text=Fresh+Honey' },
    { id: 2, name: 'Handmade Scarf', price: '$20', image: 'https://via.placeholder.com/150x100?text=Handmade+Scarf' },
    { id: 3, name: 'Organic Soap', price: '$8', image: 'https://via.placeholder.com/150x100?text=Organic+Soap' },
    { id: 4, name: 'Wooden Art', price: '$40', image: 'https://via.placeholder.com/150x100?text=Wooden+Art' },
  ];

  const allCategories = [
    'All', 'Food', 'Jewelry', 'Clothing', 'Restaurants', 'Services', 'Home Goods', 'Coupons',
    'Local Events', 'Flyers', 'Caterers', 'Wedding Planners', 'Wedding Photographers', 'DJs',
    'Mehndi Artists', 'Wedding Decorators', 'Beauty Services', 'Gift Shops', 'Grocery Stores',
    'Florists', 'Health & Wellness', 'Auto Services', 'Cleaning Services', 'Electronics',
    'Pet Services', 'Real Estate'
  ];

  const handleUpdateLocation = () => {
    const newLocation = prompt('Enter your new location (City, Zip):');
    if (newLocation) {
      setLocation(`Deliver to ${newLocation}`);
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Nav */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', color: 'white', gap: '10px' }}>
        <a href="/">
          <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
        </a>

        {/* Location */}
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: '12px', cursor: 'pointer' }}>
          <span>{location}</span>
          <span onClick={handleUpdateLocation} style={{ textDecoration: 'underline', fontSize: '12px' }}>Update location</span>
        </div>

        {/* Search */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px', flexGrow: 1 }}>
          <select style={{ height: '40px', width: '60px', borderRadius: '8px 0 0 8px', border: '1px solid #ccc', padding: '0 5px', backgroundColor: '#d3d3d3' }}>
            {allCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search products..."
            style={{ height: '40px', flexGrow: 1, padding: '6px 10px', borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc', borderLeft: 'none', fontSize: '14px' }}
          />
          <button style={{ height: '40px', padding: '0 15px', border: '1px solid #ccc', borderRadius: '0 8px 8px 0', backgroundColor: '#d3d3d3', cursor: 'pointer' }}>
            🔍
          </button>
        </div>

        {/* Sign In + Cart */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginLeft: 'auto' }}>
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

      {/* Deals Banner */}
      <div style={{ margin: '1rem', padding: '1rem', backgroundColor: '#cce0ff', textAlign: 'center', fontSize: '20px', fontWeight: 'bold', borderRadius: '10px' }}>
        🌟 Spring Special: Save up to 20% on Local Foods and Goods! 🌟
      </div>

      {/* Shop by Category */}
      <div style={{ padding: '2rem', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {['Food', 'Jewelry', 'Clothing', 'Restaurants', 'Services', 'Home Goods'].map((cat, idx) => (
          <div key={idx} style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#003366', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
            {cat}
          </div>
        ))}
      </div>

      {/* Product Sections */}
      <div style={{ padding: '1rem' }}>
        {['New Releases', 'Best Seller Foods', 'Best Seller Clothing', 'Top Rated Restaurants', 'Trending Now', 'Local Favorites', 'New Restaurants', 'Best Deals Today'].map((sectionTitle, index) => (
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

const footerLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '14px',
};

export default Home;



































