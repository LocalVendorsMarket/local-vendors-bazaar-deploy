import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Home = ({ cart, setCart }) => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isNewCustomer, setIsNewCustomer] = useState(false);
  const [location, setLocation] = useState('Deliver to Elgin 60120');

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
      <div style={{ backgroundColor: '#003366', padding: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'flex-start' }}>
        {allCategories.map((category) => (
          <span key={category} style={{ color: 'white', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }}>{category}</span>
        ))}
      </div>

      {/* Shop and Save Locally Message */}
      <div style={{ textAlign: 'center', margin: '1rem', fontSize: '22px', fontWeight: 'bold', color: '#003366' }}>
        Shop and Save Locally
      </div>

      {/* Shop by Category Boxes */}
      <div style={{ padding: '1rem', display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {allCategories.map((cat, idx) => (
          <div key={idx} style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '10px', width: '120px', minWidth: '120px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#003366', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
            {cat}
          </div>
        ))}
      </div>

      {/* Category Sections */}
      <div style={{ padding: '1rem' }}>
        {[
          'New Releases', 'Best Seller Foods', 'Best Seller Clothing', 'Top Rated Restaurants',
          'Local Events', 'Coupons & Deals', 'Gift Shops Specials', 'Top Rated Services',
          'Wedding Vendors', 'Health & Wellness Deals'
        ].map((sectionTitle, index) => (
          <div key={index} style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#003366', fontSize: '1.4rem', marginBottom: '0.5rem' }}>{sectionTitle}</h2>
            <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '1rem' }}>
              {[1,2,3,4,5,6].map((n) => (
                <div key={n} style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '10px', width: '140px', minWidth: '140px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <img src={`https://via.placeholder.com/150x100?text=Product+${n}`} alt="Product" style={{ width: '100%', height: '90px', objectFit: 'cover', borderRadius: '8px' }} />
                  <h4 style={{ color: '#003366', marginTop: '8px', fontSize: '14px' }}>Product {n}</h4>
                  <p style={{ fontWeight: 'bold', fontSize: '13px', marginTop: '5px' }}>$20</p>
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




































