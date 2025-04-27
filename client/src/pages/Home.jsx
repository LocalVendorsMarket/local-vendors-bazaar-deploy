import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#E6F0FA', minHeight: '100vh', padding: '40px 20px' }}>
      
      {/* Welcome Section */}
      <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '52px', color: '#0056b3', marginBottom: '20px' }}>
          Welcome to Local Vendors Bazaar
        </h1>
        <p style={{ fontSize: '24px', color: '#333', marginBottom: '30px', maxWidth: '800px', marginInline: 'auto' }}>
          Discover amazing local products and services.  
          Shop and save while supporting your neighborhood businesses!
        </p>
        <Link to="/shop">
          <button style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '15px 30px',
            fontSize: '20px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}>
            Start Shopping
          </button>
        </Link>
      </div>

      {/* Flyer Section */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <img 
          src="/assets/flyer-v2.png" 
          alt="Shop Local Flyer" 
          style={{ maxWidth: '90%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
        />
      </div>

      {/* About Section */}
      <div style={{ textAlign: 'center', marginBottom: '60px', padding: '0 20px' }}>
        <h2 style={{ fontSize: '38px', color: '#0056b3', marginBottom: '20px' }}>
          Why Shop Locally?
        </h2>
        <p style={{ fontSize: '22px', color: '#555', maxWidth: '900px', margin: '0 auto' }}>
          LocalVendorsBazaar.com makes it easy to find and shop from the best local vendors near you.
          Every purchase you make helps a small business grow, strengthens your community,
          and brings you unique, quality products you won't find anywhere else.
        </p>
      </div>

    </div>
  );
};

export default Home;











































