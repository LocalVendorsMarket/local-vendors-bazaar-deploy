// Let's add product detail modal support with image thumbnails to HomePage.jsx

import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';

const HomePage = ({ cart, setCart }) => {
  const categories = [
    'All', 'Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods', 'Restaurants', 'Services',
    'Best Sellers', "Today's Deals", 'New Releases', 'Gift Ideas', 'Wedding Planners',
    'Wedding Photographers', 'Henna Tattoos', 'Bakeries', 'Coffee Shops', 'Florists', 'Furniture',
    'Grocery Stores', 'Health & Beauty', 'Local Events', 'Mobile Repair', 'Music & Bands',
    'Party Supplies', 'Pet Services', 'Photobooth Rentals', 'Real Estate Agents', 'Tutors',
    'Yoga Studios', 'Landscaping', 'Auto Repair', 'Travel Agents', 'Accountants'
  ];

  const allProducts = [
    {
      id: 1,
      name: 'Handcrafted Necklace',
      category: 'Jewelry',
      price: '$45',
      rating: '⭐⭐⭐⭐⭐',
      sold: 38,
      remaining: 22,
      description: 'Elegant handcrafted necklace with natural stones.',
      images: [
        'https://via.placeholder.com/400x300?text=Necklace+1',
        'https://via.placeholder.com/400x300?text=Necklace+2',
        'https://via.placeholder.com/400x300?text=Necklace+3'
      ]
    },
    // Add more products if needed
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');

  const openModal = (product) => {
    setSelectedProduct(product);
    setMainImage(product.images[0]);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setMainImage('');
  };

  return (
    <div>
      <h2 style={{ margin: '2rem' }}>Featured Products</h2>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', padding: '1rem 2rem' }}>
        {allProducts.map(product => (
          <div key={product.id} style={{ minWidth: '250px', backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <img
              src={product.images[0]}
              alt={product.name}
              style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px', cursor: 'pointer' }}
              onClick={() => openModal(product)}
            />
            <h2 style={{ color: '#003366' }}>{product.name}</h2>
            <p>{product.rating}</p>
            <p>{product.price}</p>
            <p style={{ fontSize: '13px', color: '#003366' }}>{product.sold} sold this month</p>
            <p style={{ fontSize: '13px', color: '#003366' }}>{product.remaining} left</p>
            <button style={{ backgroundColor: '#003366', color: 'white', padding: '8px 12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '900px', display: 'flex', gap: '2rem' }}>
            {/* Thumbnails */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {selectedProduct.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumb-${index}`}
                  onClick={() => setMainImage(img)}
                  style={{ width: '60px', height: '60px', cursor: 'pointer', border: mainImage === img ? '2px solid #003366' : '1px solid #ccc', borderRadius: '4px' }}
                />
              ))}
            </div>
            {/* Main Image & Info */}
            <div style={{ flexGrow: 1 }}>
              <img src={mainImage} alt="main" style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '1rem' }} />
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.rating} · {selectedProduct.price}</p>
              <p style={{ fontSize: '14px', color: '#666' }}>{selectedProduct.description}</p>
              <p>{selectedProduct.sold} sold · {selectedProduct.remaining} left</p>
              <button style={{ backgroundColor: '#003366', color: 'white', padding: '0.75rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '1rem' }}>Add to Cart</button>
              <br />
              <button onClick={closeModal} style={{ marginTop: '1rem', backgroundColor: '#ccc', color: '#000', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;













































































