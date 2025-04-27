import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';

const HomePage = ({ cart, setCart }) => {
  const categories = [
    'All', 'Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods',
    'Restaurants', 'Services', 'Best Sellers', "Today's Deals", 'New Releases', 'Gift Ideas',
    'Wedding Planners', 'Wedding Photographers'
  ];

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
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isNewCustomer, setIsNewCustomer] = useState(false);
  const [isUpdateLocationOpen, setIsUpdateLocationOpen] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('Elgin 60120');
  const [newZip, setNewZip] = useState('');
  const [searchCategory, setSearchCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const productContainerRef = useRef(null);

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter((product) => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
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

  const scrollProducts = (direction) => {
    if (direction === 'left') {
      productContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      productContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', backgroundColor: '#e6f0ff', display: 'flex', flexDirection: 'column' }}>

      {/* Header */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px', color: 'white' }}>
        <a href="/">
          <img src={logo} alt="Logo" style={{ width: '50px' }} />
        </a>
        <div style={{ fontSize: '12px' }}>
          <span>Delivering to {deliveryLocation}</span><br />
          <span onClick={() => setIsUpdateLocationOpen(true)} style={{ textDecoration: 'underline', cursor: 'pointer' }}>Update location</span>
        </div>
        {/* Added Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginLeft: '2rem' }}>
          <a href="/faq" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline' }}>FAQ</a>
          <a href="/blog" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline' }}>Blog</a>
          <a href="/contact" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline' }}>Contact</a>
          <a href="/shop" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline' }}>Shop</a>
        </div>
        {/* Search */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', gap: '10px' }}>
          <select value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)} style={{ padding: '6px', height: '40px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px', width: '80px' }}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            style={{ width: '300px', padding: '6px 10px', height: '40px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' }}
          />
          <button style={{ backgroundColor: '#d3d3d3', height: '40px', borderRadius: '8px', padding: '0 15px', border: 'none', fontSize: '18px', cursor: 'pointer' }}>🔍</button>
          <span onClick={() => setIsSignInModalOpen(true)} style={{ cursor: 'pointer', fontWeight: 'bold', textDecoration: 'underline' }}>Sign In</span>
          <a href="/cart" style={{ color: '#fff', textDecoration: 'none', fontSize: '26px', fontWeight: 'bold', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒 {cart.length > 0 && `(${cart.length})`}</a>
        </div>
      </header>

      {/* Subcategory Bar */}
      <div style={{ backgroundColor: '#003366', padding: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'flex-start' }}>
        {categories.map((category) => (
          <span key={category} onClick={() => setSelectedCategory(category)} style={{ padding: '6px 12px', color: '#fff', fontWeight: selectedCategory === category ? 'bold' : 'normal', cursor: 'pointer', fontSize: '14px' }}>
            {category}
          </span>
        ))}
      </div>

      {/* Welcome Message */}
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#003366', marginBottom: '1rem' }}>Shop and Save Locally<sup>®</sup></h1>
      </div>

      {/* Product Scroll Section with Arrows */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '2rem' }}>
        <button onClick={() => scrollProducts('left')} style={arrowButtonStyle}>&lt;</button>
        <div ref={productContainerRef} style={{ overflowX: 'auto', display: 'flex', gap: '2rem', scrollBehavior: 'smooth' }}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={{ minWidth: '250px', backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
              <h2 style={{ marginTop: '10px', color: '#003366', fontSize: '1.2rem', textAlign: 'center' }}>{product.name}</h2>
              <p style={{ color: '#666', marginBottom: '8px', textAlign: 'center' }}>{product.rating}</p>
              <p style={{ fontWeight: 'bold', color: '#333', marginBottom: '12px' }}>{product.price}</p>
              <button onClick={() => handleAddToCart(product)} style={{ padding: '8px 12px', backgroundColor: '#003366', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <button onClick={() => scrollProducts('right')} style={arrowButtonStyle}>&gt;</button>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', textAlign: 'center', padding: '2rem', marginTop: 'auto' }}>
        <p>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>

    </div>
  );
};

const arrowButtonStyle = {
  backgroundColor: '#003366',
  color: 'white',
  border: 'none',
  fontSize: '2rem',
  padding: '0.5rem 1rem',
  borderRadius: '50%',
  cursor: 'pointer'
};

export default HomePage;


























































