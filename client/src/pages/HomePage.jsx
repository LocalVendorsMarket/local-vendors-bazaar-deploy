import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';

const HomePage = ({ cart, setCart }) => {
  const categories = [
    'All', 'Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods', 'Restaurants', 'Services',
    'Best Sellers', "Today's Deals", 'New Releases', 'Gift Ideas', 'Wedding Planners',
    'Wedding Photographers', 'Henna Tattoos', 'Bakeries', 'Coffee Shops', 'Florists', 'Furniture',
    'Grocery Stores', 'Health & Beauty', 'Local Events', 'Mobile Repair', 'Music & Bands',
    'Party Supplies', 'Pet Services', 'Photobooth Rentals', 'Real Estate Agents', 'Tutors',
    'Yoga Studios', 'Landscaping', 'Auto Repair', 'Travel Agents', 'Accountants', 'Make-Up Artists'
  ];

  const allProducts = [
    {
      id: 1,
      name: 'Local Honey',
      category: 'Food',
      price: '$12',
      rating: '⭐⭐⭐⭐⭐',
      images: [
        'https://via.placeholder.com/300x200?text=Local+Honey',
        'https://via.placeholder.com/300x200?text=Raw+Honey+Jar',
        'https://via.placeholder.com/300x200?text=Organic+Honey',
        'https://via.placeholder.com/300x200?text=Honey+Comb',
        'https://via.placeholder.com/300x200?text=Glass+Jar'
      ]
    },
    {
      id: 2,
      name: 'Handmade Necklace',
      category: 'Jewelry',
      price: '$25',
      rating: '⭐⭐⭐⭐',
      images: [
        'https://via.placeholder.com/300x200?text=Necklace',
        'https://via.placeholder.com/300x200?text=Closeup+Necklace',
        'https://via.placeholder.com/300x200?text=Jewelry+Box',
        'https://via.placeholder.com/300x200?text=Pendant',
        'https://via.placeholder.com/300x200?text=Crafted+Details'
      ]
    },
    {
      id: 3,
      name: 'Organic T-Shirt',
      category: 'Clothing',
      price: '$18',
      rating: '⭐⭐⭐⭐',
      images: [
        'https://via.placeholder.com/300x200?text=Organic+T-Shirt',
        'https://via.placeholder.com/300x200?text=Back+of+T-Shirt',
        'https://via.placeholder.com/300x200?text=Label+Closeup',
        'https://via.placeholder.com/300x200?text=Eco+Friendly',
        'https://via.placeholder.com/300x200?text=Model+Wearing'
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  const productRefs = [useRef(null), useRef(null), useRef(null)];

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  const scrollProducts = (row, direction) => {
    if (productRefs[row]?.current) {
      productRefs[row].current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setActiveImage(product.images[0]);
    setShowModal(true);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff', minHeight: '100vh' }}>
      {/* Navbar */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', color: 'white', display: 'flex', alignItems: 'center' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <nav style={{ marginLeft: '2rem', display: 'flex', gap: '15px' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/shop" style={navLinkStyle}>Shop</a>
          <a href="/vendor-signup" style={navLinkStyle}>Become a Vendor</a>
        </nav>
      </header>

      {/* Sub Nav */}
      <div style={{ backgroundColor: '#00509e', padding: '0.5rem', overflowX: 'auto', whiteSpace: 'nowrap' }}>
        {categories.map(cat => (
          <span key={cat} onClick={() => setSelectedCategory(cat)} style={{ color: 'white', padding: '0 10px', cursor: 'pointer' }}>{cat}</span>
        ))}
      </div>

      {/* Product Rows */}
      {[0, 1, 2].map((row) => (
        <div key={row} style={{ display: 'flex', alignItems: 'center', padding: '1rem 2rem' }}>
          <button onClick={() => scrollProducts(row, 'left')} style={arrowButtonStyle}>&lt;</button>
          <div ref={productRefs[row]} style={{ overflowX: 'auto', display: 'flex', gap: '2rem', scrollBehavior: 'smooth' }}>
            {filteredProducts.map(product => (
              <div key={product.id} onClick={() => handleProductClick(product)} style={productCardStyle}>
                <img src={product.images[0]} alt={product.name} style={productImageStyle} />
                <h2 style={productNameStyle}>{product.name}</h2>
                <p>{product.rating}</p>
                <p style={{ fontWeight: 'bold' }}>{product.price}</p>
              </div>
            ))}
          </div>
          <button onClick={() => scrollProducts(row, 'right')} style={arrowButtonStyle}>&gt;</button>
        </div>
      ))}

      {/* Modal */}
      {showModal && selectedProduct && (
        <div style={modalStyle} onClick={() => setShowModal(false)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              {selectedProduct.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  onClick={() => setActiveImage(img)}
                  style={{
                    width: '80px',
                    height: '60px',
                    border: activeImage === img ? '3px solid #003366' : '1px solid #ccc',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    objectFit: 'cover'
                  }}
                />
              ))}
            </div>
            <div style={{ flex: '2' }}>
              <img
                src={activeImage}
                alt={selectedProduct.name}
                style={{
                  width: '100%',
                  maxHeight: '350px',
                  objectFit: 'contain',
                  borderRadius: '10px'
                }}
              />
              <p style={{ marginTop: '1rem' }}><strong>{selectedProduct.name}</strong></p>
              <p>{selectedProduct.price} – {selectedProduct.rating}</p>
              <button style={addToCartButtonStyle}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const navLinkStyle = { color: 'white', textDecoration: 'none', fontWeight: 'bold' };
const arrowButtonStyle = { backgroundColor: '#003366', color: 'white', border: 'none', padding: '0.5rem 1rem', fontSize: '1.5rem', cursor: 'pointer' };
const productCardStyle = { minWidth: '250px', padding: '1rem', backgroundColor: 'white', borderRadius: '10px', textAlign: 'center', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' };
const productImageStyle = { width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' };
const productNameStyle = { fontSize: '1.1rem', color: '#003366' };
const modalStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 };
const modalContentStyle = { backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', display: 'flex', gap: '2rem', maxWidth: '960px', width: '90%' };
const addToCartButtonStyle = { backgroundColor: '#003366', color: 'white', padding: '0.75rem 1.5rem', marginTop: '1rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' };

export default HomePage;























































































































