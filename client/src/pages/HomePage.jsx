// This version enhances the HomePage with a product detail modal that includes
// - Vertical thumbnails
// - Large main image
// - Description
// - Purchase panel
// - Customer reviews and sold last month

import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';

const allProducts = [
  {
    id: 1,
    name: 'Local Honey',
    category: 'Food',
    price: '$12',
    rating: '⭐⭐⭐⭐⭐',
    image: 'https://via.placeholder.com/300x200?text=Local+Honey',
    sold: 23,
    description: 'Pure organic honey harvested locally.'
  },
  {
    id: 2,
    name: 'Handmade Necklace',
    category: 'Jewelry',
    price: '$25',
    rating: '⭐⭐⭐⭐',
    image: 'https://via.placeholder.com/300x200?text=Necklace',
    sold: 41,
    description: 'Elegant handcrafted necklace made with care.'
  }
  // Add more as needed
];

const HomePage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Featured Products</h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {allProducts.map(product => (
          <div
            key={product.id}
            style={{ cursor: 'pointer', backgroundColor: '#fff', padding: '1rem', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}
            onClick={() => handleProductClick(product)}
          >
            <img src={product.image} alt={product.name} style={{ width: '250px', height: '160px', objectFit: 'cover', borderRadius: '8px' }} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedProduct && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 }}>
          <div style={{ backgroundColor: '#fff', width: '90%', maxWidth: '1000px', padding: '2rem', borderRadius: '12px', display: 'flex', gap: '1.5rem' }}>
            {/* Left Thumbnails */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <img src={selectedProduct.image} alt="Thumb 1" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
              <img src={selectedProduct.image} alt="Thumb 2" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
            </div>

            {/* Large Image */}
            <div style={{ flexShrink: 0 }}>
              <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '12px' }} />
            </div>

            {/* Description */}
            <div style={{ flexGrow: 1 }}>
              <h2 style={{ color: '#003366' }}>{selectedProduct.name}</h2>
              <p style={{ margin: '1rem 0' }}>{selectedProduct.description}</p>
              <p style={{ fontSize: '0.9rem', color: '#888' }}>{selectedProduct.sold} bought this month</p>
              <p style={{ fontSize: '0.9rem', color: '#888' }}>⭐ {selectedProduct.rating} · <a href="#" style={{ color: '#003366', textDecoration: 'underline' }}>See customer reviews</a></p>
            </div>

            {/* Purchase Panel */}
            <div style={{ minWidth: '150px', textAlign: 'center' }}>
              <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#003366' }}>{selectedProduct.price}</p>
              <button style={{ backgroundColor: '#003366', color: 'white', border: 'none', padding: '0.75rem 1rem', borderRadius: '8px', marginTop: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>Add to Cart</button>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '1.25rem', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: '#fff' }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;





















































































