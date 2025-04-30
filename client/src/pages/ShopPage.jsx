import React, { useState } from 'react';
import logo from '../assets/logo.png';

const ShopPage = ({ cart, setCart }) => {
  const categories = [
    'All', 'Women’s Apparel', 'Jewelry', 'Makeup', 'Food', 'Clothing', 'Art', 'Home Goods',
    'Restaurants', 'Services', 'Gift Ideas', 'Florists', 'Coffee Shops'
  ];

  const allProducts = [
    { id: 1, name: 'Silk Saree', category: 'Women’s Apparel', price: '$60', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Saree' },
    { id: 2, name: 'Gold Bangles', category: 'Jewelry', price: '$45', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Bangles' },
    { id: 3, name: 'Natural Lipstick', category: 'Makeup', price: '$15', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Lipstick' },
    { id: 4, name: 'Handcrafted Mug', category: 'Home Goods', price: '$18', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Mug' },
    { id: 5, name: 'Paneer Wrap', category: 'Food', price: '$10', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Wrap' },
    { id: 6, name: 'Henna Kit', category: 'Services', price: '$25', rating: '⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Henna+Kit' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f7f9fb', minHeight: '100vh' }}>

      {/* Nav Bar */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem', color: 'white' }}>Local Vendors Bazaar</span>
        </a>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/shop" style={navLinkStyle}>Shop</a>
          <a href="/vendor-signup" style={navLinkStyle}>Become a Vendor</a>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px' }}>🛒</a>
        </nav>
      </header>

      {/* Banner */}
      <div style={{ backgroundColor: '#00509e', color: 'white', textAlign: 'center', padding: '1.5rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
        Discover Local Treasures – Shop Women’s Apparel, Jewelry, and More
      </div>

      {/* Layout Grid */}
      <div style={{ display: 'flex', padding: '2rem', gap: '2rem' }}>
        {/* Sidebar */}
        <aside style={{ width: '220px' }}>
          <h3 style={{ color: '#003366' }}>Categories</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {categories.map(cat => (
              <li key={cat} onClick={() => setSelectedCategory(cat)} style={{ cursor: 'pointer', padding: '0.5rem 0', color: selectedCategory === cat ? '#00509e' : '#333' }}>
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* Products Grid */}
        <main style={{ flex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {filteredProducts.map(product => (
              <div key={product.id} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px' }} />
                <h3 style={{ color: '#003366' }}>{product.name}</h3>
                <p style={{ margin: '0.5rem 0' }}>{product.price}</p>
                <p>{product.rating}</p>
                <button style={{ backgroundColor: '#003366', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '14px' }}>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

const navLinkStyle = {
  color: 'white',
  fontWeight: 'bold',
  textDecoration: 'none'
};

export default ShopPage;






















































