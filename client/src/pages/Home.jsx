import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
          Welcome to Local Vendors Bazaar
        </h1>
        <p style={{ fontSize: '24px', marginBottom: '30px' }}>
          Shop and Save Locally — Support Your Neighborhood Businesses!
        </p>
        <Link to="/shop">
          <button style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '15px 30px',
            fontSize: '18px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            Start Shopping
          </button>
        </Link>
      </div>

      {/* Flyer Section (Optional) */}
      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <img 
          src="/assets/flyer-v2.png" 
          alt="Flyer" 
          style={{ maxWidth: '90%', height: 'auto', borderRadius: '10px' }}
        />
      </div>

      {/* About Section */}
      <div style={{ marginTop: '60px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>
          Why Shop Locally?
        </h2>
        <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto' }}>
          LocalVendorsBazaar.com helps you find amazing products and services right in your city.
          Support small businesses, discover unique items, and help build a stronger community.
        </p>
      </div>

    </div>
  );
};

export default Home;







































