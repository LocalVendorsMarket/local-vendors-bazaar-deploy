// Enhanced HomePage feature: Clickable product card with modal popup
// This update adds a product detail popup when a buyer clicks on a product image
// Only this feature is added — no changes to nav bar, footer, or layout

import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';

const sampleImages = [
  'https://via.placeholder.com/300x200?text=Image+1',
  'https://via.placeholder.com/300x200?text=Image+2',
  'https://via.placeholder.com/300x200?text=Image+3'
];

const HomePage = () => {
  const [modalProduct, setModalProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');

  const products = [
    { id: 1, name: 'Local Honey', price: '$12', rating: '⭐⭐⭐⭐⭐', image: sampleImages[0] },
    { id: 2, name: 'Handmade Necklace', price: '$25', rating: '⭐⭐⭐⭐', image: sampleImages[1] },
    { id: 3, name: 'Organic T-Shirt', price: '$18', rating: '⭐⭐⭐⭐', image: sampleImages[2] }
  ];

  const openModal = (product) => {
    setModalProduct(product);
    setMainImage(product.image);
  };

  const closeModal = () => {
    setModalProduct(null);
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem', padding: '2rem' }}>
        {products.map(product => (
          <div key={product.id} style={{ cursor: 'pointer' }} onClick={() => openModal(product)}>
            <img src={product.image} alt={product.name} style={{ width: '250px', borderRadius: '8px' }} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.rating}</p>
          </div>
        ))}
      </div>

      {modalProduct && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }} onClick={closeModal}>
          <div style={{
            backgroundColor: '#fff', padding: '2rem', display: 'flex', borderRadius: '12px', width: '90%', maxWidth: '1000px'
          }} onClick={(e) => e.stopPropagation()}>
            {/* Thumbnails */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginRight: '1rem' }}>
              {sampleImages.map((img, idx) => (
                <img key={idx} src={img} alt={`Thumb ${idx}`} style={{ width: '60px', cursor: 'pointer' }} onClick={() => setMainImage(img)} />
              ))}
            </div>

            {/* Main image */}
            <div style={{ flex: '1 1 300px' }}>
              <img src={mainImage} alt={modalProduct.name} style={{ width: '100%', borderRadius: '8px' }} />
            </div>

            {/* Product Info */}
            <div style={{ flex: '1 1 300px', marginLeft: '2rem' }}>
              <h2>{modalProduct.name}</h2>
              <p>{modalProduct.rating}</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{modalProduct.price}</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Customer Reviews (12)</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Sold last month: 57</p>
              <button style={{ backgroundColor: '#003366', color: 'white', padding: '10px 20px', borderRadius: '8px', marginTop: '1rem' }}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;























































































