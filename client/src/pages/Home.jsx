import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ cart, setCart }) => {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#E6F0FA', minHeight: '100vh', paddingTop: '120px' }}>
      
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginTop: '40px', marginBottom: '50px', padding: '0 20px' }}>
        <h1 style={{ fontSize: '48px', color: '#0056b3', marginBottom: '20px' }}>
          Welcome to Local Vendors Bazaar
        </h1>
        <p style={{ fontSize: '22px', color: '#333', maxWidth: '800px', margin: '0 auto 30px' }}>
          Discover amazing local products and services. Shop and save while supporting your neighborhood businesses!
        </p>
        <Link to="/shop">
          <button style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '15px 30px',
            fontSize: '18px',
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
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <img 
          src="/assets/flyer-v2.png" 
          alt="Shop Local Flyer" 
          style={{ maxWidth: '90%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
        />
      </div>

      {/* About Section */}
      <div style={{ textAlign: 'center', padding: '0 20px', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '36px', color: '#0056b3', marginBottom: '20px' }}>
          Why Shop Locally?
        </h2>
        <p style={{ fontSize: '22px', color: '#555', maxWidth: '900px', margin: '0 auto' }}>
          LocalVendorsBazaar.com helps you find the best local products, services, and experiences.  
          Support your community and discover amazing businesses around you by shopping locally today!
        </p>
      </div>

    </div>
  );
};

export default Home;



















































