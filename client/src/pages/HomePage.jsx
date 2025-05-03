// Ensure to add this in your index.html inside the <body> tag:
// <div id="modal-root"></div>

import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import logo from '../assets/logo.png';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return ReactDOM.createPortal(
    <div style={modalOverlayStyle} onClick={onClose}>
      <div style={modalWindowStyle} onClick={(e) => e.stopPropagation()}>
        <div style={modalGridStyle}>
          <div style={modalThumbsStyle}>
            {[1, 2, 3, 4].map((i) => (
              <img key={i} src={product.image} alt={product.name} style={thumbImageStyle} />
            ))}
          </div>
          <div style={modalMainImageWrapper}>
            <img src={product.image} alt={product.name} style={mainImageStyle} />
          </div>
          <div style={modalDetailsStyle}>
            <h2>{product.name}</h2>
            <p style={{ fontSize: '1.1rem' }}>{product.rating}</p>
            <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{product.price}</p>
            <button style={buyButtonStyle}>Buy Now</button>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'gray' }}><strong>Customer Reviews:</strong> ⭐⭐⭐⭐☆</p>
            <p style={{ fontSize: '0.9rem', color: 'gray' }}>Sold last month: 32</p>
            <button onClick={onClose} style={closeButtonStyle}>Close</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

const HomePage = ({ cart, setCart }) => {
  const categories = ['All', 'Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods', 'Restaurants'];
  const allProducts = [
    { id: 1, name: 'Local Honey', category: 'Food', price: '$12', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Local+Honey' },
    { id: 2, name: 'Handmade Necklace', category: 'Jewelry', price: '$25', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Necklace' },
    { id: 3, name: 'Organic T-Shirt', category: 'Clothing', price: '$18', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Organic+T-Shirt' },
    { id: 4, name: 'Custom Artwork', category: 'Art', price: '$80', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Artwork' },
    { id: 5, name: 'Gourmet Pizza', category: 'Restaurants', price: '$15', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Pizza' },
    { id: 6, name: 'Home Repair Service', category: 'Services', price: '$50/hr', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Home+Repair' }
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const productRefs = [useRef(null), useRef(null), useRef(null)];

  const filteredProducts = allProducts; // You can enhance category filtering

  const scrollProducts = (row, direction) => {
    const ref = productRefs[row];
    if (!ref.current) return;
    ref.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ color: '#003366' }}>Featured Products</h1>
      {[0].map((row) => (
        <div key={row} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '1rem 0' }}>
          <button onClick={() => scrollProducts(row, 'left')} style={arrowButtonStyle}>&lt;</button>
          <div ref={productRefs[row]} style={{ overflowX: 'auto', display: 'flex', gap: '2rem' }}>
            {filteredProducts.map(product => (
              <div key={product.id} style={productCardStyle} onClick={() => setSelectedProduct(product)}>
                <img src={product.image} alt={product.name} style={productImageStyle} />
                <h2 style={productNameStyle}>{product.name}</h2>
                <p style={productRatingStyle}>{product.rating}</p>
                <p style={productPriceStyle}>{product.price}</p>
              </div>
            ))}
          </div>
          <button onClick={() => scrollProducts(row, 'right')} style={arrowButtonStyle}>&gt;</button>
        </div>
      ))}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

// Styles
const productCardStyle = { minWidth: '250px', backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer' };
const productImageStyle = { width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' };
const productNameStyle = { fontSize: '1.2rem', margin: '10px 0', color: '#003366' };
const productRatingStyle = { color: '#666' };
const productPriceStyle = { fontWeight: 'bold', color: '#333', marginBottom: '8px' };
const arrowButtonStyle = { backgroundColor: '#003366', color: 'white', border: 'none', fontSize: '2rem', padding: '0.5rem 1rem', borderRadius: '50%', cursor: 'pointer' };

const modalOverlayStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center' };
const modalWindowStyle = { backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', width: '80%', height: '80%', overflowY: 'auto' };
const modalGridStyle = { display: 'flex', gap: '2rem', height: '100%' };
const modalThumbsStyle = { display: 'flex', flexDirection: 'column', gap: '10px' };
const thumbImageStyle = { width: '60px', height: '60px', objectFit: 'cover', borderRadius: '6px', border: '1px solid #ccc' };
const modalMainImageWrapper = { flex: 1 };
const mainImageStyle = { width: '100%', height: '100%', objectFit: 'contain' };
const modalDetailsStyle = { flex: 1, display: 'flex', flexDirection: 'column' };
const buyButtonStyle = { backgroundColor: '#003366', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 'bold', marginTop: '1rem', cursor: 'pointer' };
const closeButtonStyle = { marginTop: 'auto', backgroundColor: '#ccc', color: '#000', padding: '0.5rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' };

export default HomePage;



























































































