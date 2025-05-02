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

  const allProducts = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    category: categories[i % categories.length],
    price: `$${(i + 1) * 5}`,
    rating: '⭐⭐⭐⭐',
    sold: 20 + i,
    image: `https://via.placeholder.com/300x200?text=Product+${i + 1}`
  }));

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalProduct, setModalProduct] = useState(null);
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

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', color: 'white' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <h2 style={{ marginLeft: '1rem' }}>Featured Products</h2>
      </header>

      {[0, 1, 2].map((row) => (
        <div key={row} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '1rem 2rem' }}>
          <button onClick={() => scrollProducts(row, 'left')} style={arrowButtonStyle}>&lt;</button>
          <div ref={productRefs[row]} style={{ overflowX: 'auto', display: 'flex', gap: '2rem', scrollBehavior: 'smooth' }}>
            {filteredProducts.slice(row * 4, row * 4 + 4).map(product => (
              <div key={product.id} style={productCardStyle} onClick={() => setModalProduct(product)}>
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

      {modalProduct && (
        <div style={modalOverlayStyle}>
          <div style={modalBoxStyle}>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div>
                <img src={modalProduct.image} alt={modalProduct.name} style={{ width: '300px', height: '200px', borderRadius: '8px' }} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <h2>{modalProduct.name}</h2>
                <p>{modalProduct.rating}</p>
                <p>{modalProduct.price}</p>
                <p style={{ fontSize: '14px' }}>{modalProduct.sold} sold last month</p>
                <p style={{ fontSize: '14px', color: '#007185', cursor: 'pointer', textDecoration: 'underline' }}>See customer reviews (20)</p>
                <button onClick={() => setModalProduct(null)} style={closeButtonStyle}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const arrowButtonStyle = { backgroundColor: '#003366', color: 'white', border: 'none', fontSize: '2rem', padding: '0.5rem 1rem', borderRadius: '50%', cursor: 'pointer' };
const productCardStyle = { minWidth: '250px', backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center', cursor: 'pointer' };
const productImageStyle = { width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' };
const productNameStyle = { color: '#003366', fontSize: '1.2rem', margin: '10px 0' };
const productRatingStyle = { color: '#666', marginBottom: '8px' };
const productPriceStyle = { fontWeight: 'bold', color: '#333', marginBottom: '12px' };
const modalOverlayStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999 };
const modalBoxStyle = { backgroundColor: 'white', padding: '2rem', borderRadius: '12px', maxWidth: '800px', width: '90%' };
const closeButtonStyle = { marginTop: '1rem', padding: '0.5rem 1rem', border: 'none', backgroundColor: '#003366', color: 'white', borderRadius: '8px', cursor: 'pointer' };

export default HomePage;






















































































