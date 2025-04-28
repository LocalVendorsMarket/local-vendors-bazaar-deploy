import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';

const HomePage = ({ cart, setCart }) => {
  const categories = [
    'All', 'Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods',
    'Restaurants', 'Services', 'Best Sellers', "Today's Deals", 'New Releases', 'Gift Ideas',
    'Wedding Planners', 'Wedding Photographers'
  ]; // <-- Shortened list to Wedding Photographers

  const allProducts = [
    { id: 1, name: 'Local Honey', category: 'Food', price: '$12', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Local+Honey' },
    { id: 2, name: 'Handmade Necklace', category: 'Jewelry', price: '$25', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Necklace' },
    { id: 3, name: 'Organic T-Shirt', category: 'Clothing', price: '$18', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Organic+T-Shirt' },
    { id: 4, name: 'Custom Artwork', category: 'Art', price: '$80', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Artwork' },
    { id: 5, name: 'Gourmet Pizza', category: 'Restaurants', price: '$15', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Pizza' },
    { id: 6, name: 'Home Repair Service', category: 'Services', price: '$50/hr', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Home+Repair' },
    { id: 7, name: 'Wedding Cake Bakery', category: 'Food', price: '$300', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Wedding+Cake' },
    { id: 8, name: 'Henna Artist', category: 'Services', price: '$100/hr', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Henna+Artist' },
    { id: 9, name: 'Wedding DJ', category: 'Services', price: '$500', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Wedding+DJ' },
    { id: 10, name: 'Florist Service', category: 'Home Goods', price: '$60', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Florist' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [deliveryLocation, setDeliveryLocation] = useState('Elgin 60120');
  const [searchCategory, setSearchCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isNewCustomer, setIsNewCustomer] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');
  const [isUpdateLocationOpen, setIsUpdateLocationOpen] = useState(false);
  const [newZip, setNewZip] = useState('');

  const productRefs = [useRef(null), useRef(null), useRef(null)]; // Three product rows

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter((product) => product.category === selectedCategory);

  const scrollProducts = (row, direction) => {
    if (direction === 'left') {
      productRefs[row].current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      productRefs[row].current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    setIsSignInModalOpen(false);
    setIsNewCustomer(false);
  };

  const handleUpdateLocationSubmit = (e) => {
    e.preventDefault();
    if (newZip.trim()) {
      setDeliveryLocation(newZip);
      setNewZip('');
      setIsUpdateLocationOpen(false);
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', color: 'white' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <div style={{ fontSize: '12px', marginLeft: '1rem' }}>
          <span>Delivering to {deliveryLocation}</span><br />
          <span onClick={() => setIsUpdateLocationOpen(true)} style={{ textDecoration: 'underline', cursor: 'pointer' }}>Update location</span>
        </div>
        <div style={{ display: 'flex', gap: '15px', marginLeft: '2rem' }}>
          <a href="/faq" style={navLinkStyle}>FAQ</a>
          <a href="/blog" style={navLinkStyle}>Blog</a>
          <a href="/contact" style={navLinkStyle}>Contact</a>
          <a href="/shop" style={navLinkStyle}>Shop</a>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <select value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)} style={searchSelectStyle}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search products..." style={searchInputStyle} />
          <button style={searchButtonStyle}>🔍</button>
          <span onClick={() => setIsSignInModalOpen(true)} style={navLinkStyle}>Sign In</span>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px' }}>🛒</a>
        </div>
      </header>

      {/* Subcategories */}
      <div style={{ backgroundColor: '#003366', padding: '0.5rem', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <span key={cat} onClick={() => setSelectedCategory(cat)} style={{ color: 'white', cursor: 'pointer', fontSize: '14px' }}>
            {cat}
          </span>
        ))}
      </div>

      {/* Welcome Banner */}
      <div style={{ backgroundColor: '#003366', textAlign: 'center', padding: '2rem 1rem', margin: '1rem 0' }}>
        <h1 style={{ color: 'white', fontSize: '1.75rem', margin: 0 }}>Shop and Save Locally<sup>®</sup></h1>
      </div>

      {/* Products Section */}
      {[0, 1, 2].map((row) => (
        <div key={row} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '1rem 2rem' }}>
          <button onClick={() => scrollProducts(row, 'left')} style={arrowButtonStyle}>&lt;</button>
          <div ref={productRefs[row]} style={{ overflowX: 'auto', display: 'flex', gap: '2rem', scrollBehavior: 'smooth' }}>
            {filteredProducts.map(product => (
              <div key={product.id} style={productCardStyle}>
                <img src={product.image} alt={product.name} style={productImageStyle} />
                <h2 style={productNameStyle}>{product.name}</h2>
                <p style={productRatingStyle}>{product.rating}</p>
                <p style={productPriceStyle}>{product.price}</p>
                <button style={productButtonStyle}>Add to Cart</button>
              </div>
            ))}
          </div>
          <button onClick={() => scrollProducts(row, 'right')} style={arrowButtonStyle}>&gt;</button>
        </div>
      ))}

      {/* Modals */}
      {/* (Update Location Modal + Sign In Modal) will go here */}

      {/* Footer */}
      {/* (Footer full section will go here — same as your Shop page footer style) */}

    </div>
  );
};

// -- Helper styles --
const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' };
const searchSelectStyle = { padding: '6px', height: '40px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px', width: '80px' };
const searchInputStyle = { width: '300px', padding: '6px 10px', height: '40px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' };
const searchButtonStyle = { backgroundColor: '#d3d3d3', height: '40px', borderRadius: '8px', padding: '0 15px', border: 'none', fontSize: '18px', cursor: 'pointer' };
const arrowButtonStyle = { backgroundColor: '#003366', color: 'white', border: 'none', fontSize: '2rem', padding: '0.5rem 1rem', borderRadius: '50%', cursor: 'pointer' };
const productCardStyle = { minWidth: '250px', backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' };
const productImageStyle = { width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' };
const productNameStyle = { color: '#003366', fontSize: '1.2rem', margin: '10px 0' };
const productRatingStyle = { color: '#666', marginBottom: '8px' };
const productPriceStyle = { fontWeight: 'bold', color: '#333', marginBottom: '12px' };
const productButtonStyle = { backgroundColor: '#003366', color: 'white', padding: '8px 12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' };

export default HomePage;




























































