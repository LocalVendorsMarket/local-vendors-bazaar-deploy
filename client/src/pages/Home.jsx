import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      
      {/* Top Navigation Bar */}
      <nav style={{ backgroundColor: 'green', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Left side: Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/assets/logo.png" alt="Logo" style={{ height: '40px', marginRight: '20px' }} />
          <div style={{ display: 'flex', gap: '15px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
            <Link to="/faq" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>FAQ</Link>
            <Link to="/blog" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Blog</Link>
            <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Contact</Link>
            <Link to="/vendor-signup" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Become a Vendor</Link>
            <Link to="/shop" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Shop</Link>
          </div>
        </div>

        {/* Right side: Search and Cart */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="text"
            placeholder="Search"
            style={{ padding: '5px 10px', borderRadius: '5px', border: 'none' }}
          />
          <input
            type="text"
            placeholder="Zip Code"
            style={{ padding: '5px 10px', borderRadius: '5px', border: 'none' }}
          />
          <Link to="/cart">
            <img src="/assets/cart-icon-white.png" alt="Cart" style={{ height: '30px' }} />
          </Link>
        </div>
      </nav>

      {/* Main Banner Section */}
      <div style={{ textAlign: 'center', marginTop: '40px', padding: '20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Welcome to Local Vendors Bazaar!</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>Connecting Local Sellers and Buyers Together</p>
        <img 
          src="/assets/flyer-v2.png" 
          alt="Shop Local Flyer" 
          style={{ width: '80%', maxWidth: '700px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
        />
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: 'green', color: 'white', textAlign: 'center', padding: '10px', marginTop: '50px' }}>
        © {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.
      </footer>

    </div>
  );
};

export default Home;




















































