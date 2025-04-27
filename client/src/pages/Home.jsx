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
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', color: 'white' }}>
        <a href="/">
          <img src={logo} alt="Logo" style={{ width: '50px' }} />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="text" placeholder="Search products..." style={{ width: '300px', padding: '6px 10px', borderRadius: '8px', border: '1px solid #ccc' }} />
          <button style={{ backgroundColor: '#d3d3d3', height: '40px', borderRadius: '8px', padding: '0 15px', border: 'none', fontSize: '18px', cursor: 'pointer' }}>🔍</button>
          <span onClick={() => setIsSignInModalOpen(true)} style={{ cursor: 'pointer', fontWeight: 'bold', textDecoration: 'underline' }}>Sign In</span>
          <a href="/cart" style={{ color: '#fff', textDecoration: 'none', fontSize: '26px', fontWeight: 'bold', filter: 'drop-shadow(1px 1px 0 white)' }}>
            🛒 {cart.length > 0 && `(${cart.length})`}
          </a>
        </div>
      </header>

      {/* Sub Nav */}
      <div style={{ backgroundColor: '#003366', padding: '0.5rem', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px' }}>
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
        © {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.
      </footer>

    </div>
  );
};

export default Home;































