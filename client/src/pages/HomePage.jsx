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
    { id: 1, name: 'Local Honey', category: 'Food', price: '$12', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Local+Honey' },
    { id: 2, name: 'Handmade Necklace', category: 'Jewelry', price: '$25', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Necklace' },
    { id: 3, name: 'Organic T-Shirt', category: 'Clothing', price: '$18', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Organic+T-Shirt' },
    { id: 4, name: 'Custom Artwork', category: 'Art', price: '$80', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Artwork' },
    { id: 5, name: 'Gourmet Pizza', category: 'Restaurants', price: '$15', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Pizza' },
    { id: 6, name: 'Home Repair Service', category: 'Services', price: '$50/hr', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Home+Repair' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productRefs = [useRef(null), useRef(null), useRef(null)];

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

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <>
      {/* Product Rows */}
      {[0, 1, 2].map((row) => (
        <div key={row} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '1rem 2rem' }}>
          <button onClick={() => scrollProducts(row, 'left')} style={arrowButtonStyle}>&lt;</button>
          <div ref={productRefs[row]} style={{ overflowX: 'auto', display: 'flex', gap: '2rem', scrollBehavior: 'smooth' }}>
            {filteredProducts.map(product => (
              <div key={product.id} onClick={() => handleProductClick(product)} style={{ ...productCardStyle, cursor: 'pointer' }}>
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

      {/* Product Detail Modal */}
      {showModal && selectedProduct && (
        <div style={modalStyle} onClick={() => setShowModal(false)}>
          <div style={{ ...modalContentStyle, width: '90%', maxWidth: '900px', textAlign: 'left', display: 'flex', gap: '2rem' }} onClick={(e) => e.stopPropagation()}>
            {/* Thumbnails */}
            <div style={{ width: '20%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[...Array(4)].map((_, idx) => (
                <img key={idx} src={selectedProduct.image} alt={`thumb-${idx}`} style={{ width: '100%', border: '1px solid #ccc', borderRadius: '8px' }} />
              ))}
            </div>
            {/* Main Image */}
            <div style={{ width: '40%' }}>
              <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', borderRadius: '8px' }} />
            </div>
            {/* Product Info */}
            <div style={{ width: '40%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.rating}</p>
              <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{selectedProduct.price}</p>
              <p>Sold last month: 48</p>
              <p>Customer Reviews: ⭐⭐⭐⭐☆ (127)</p>
              <button style={productButtonStyle}>Add to Cart</button>
              <button onClick={() => setShowModal(false)} style={{ marginTop: '1rem', backgroundColor: '#ccc', color: '#000', padding: '0.5rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const arrowButtonStyle = { backgroundColor: '#003366', color: 'white', border: 'none', fontSize: '2rem', padding: '0.5rem 1rem', borderRadius: '50%', cursor: 'pointer' };
const productCardStyle = { minWidth: '250px', backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' };
const productImageStyle = { width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' };
const productNameStyle = { color: '#003366', fontSize: '1.2rem', margin: '10px 0' };
const productRatingStyle = { color: '#666', marginBottom: '8px' };
const productPriceStyle = { fontWeight: 'bold', color: '#333', marginBottom: '12px' };
const productButtonStyle = { backgroundColor: '#003366', color: 'white', padding: '8px 12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' };
const modalStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 };
const modalContentStyle = { backgroundColor: '#fff', padding: '2rem', borderRadius: '12px' };

export default HomePage;








































































































