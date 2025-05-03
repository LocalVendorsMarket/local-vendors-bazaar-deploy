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
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Header + Nav Bar + Sub Nav Bar + Search + Zip inputs are here */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', color: 'white' }}>
        <img src={logo} alt="Logo" style={{ width: '50px' }} /> Local Vendors Bazaar
      </header>

      <div style={{ backgroundColor: '#00509e', color: 'white', padding: '0.5rem' }}>
        {categories.map((cat) => (
          <span
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{ marginRight: '1rem', cursor: 'pointer' }}>
            {cat}
          </span>
        ))}
      </div>

      {/* Product Rows */}
      <h2 style={{ textAlign: 'center', marginTop: '1rem' }}>Featured Products</h2>
      {[0, 1, 2].map((row) => (
        <div key={row} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '1rem' }}>
          <button onClick={() => scrollProducts(row, 'left')}>&lt;</button>
          <div ref={productRefs[row]} style={{ display: 'flex', overflowX: 'auto', gap: '1rem' }}>
            {filteredProducts.map(product => (
              <div key={product.id} onClick={() => handleProductClick(product)} style={{ cursor: 'pointer', minWidth: '220px', backgroundColor: 'white', borderRadius: '8px', padding: '1rem', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%' }} />
                <h3>{product.name}</h3>
                <p>{product.rating}</p>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
          <button onClick={() => scrollProducts(row, 'right')}>&gt;</button>
        </div>
      ))}

      {/* Product Detail Modal */}
      {showModal && selectedProduct && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 }} onClick={() => setShowModal(false)}>
          <div style={{ backgroundColor: 'white', display: 'flex', width: '90%', height: '80%', borderRadius: '12px', padding: '2rem' }} onClick={(e) => e.stopPropagation()}>
            {/* Thumbnails */}
            <div style={{ width: '15%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <img src={selectedProduct.image} alt="thumb" style={{ width: '100%', border: '1px solid #ccc', borderRadius: '8px' }} />
              <img src={selectedProduct.image} alt="thumb" style={{ width: '100%', border: '1px solid #ccc', borderRadius: '8px' }} />
              <img src={selectedProduct.image} alt="thumb" style={{ width: '100%', border: '1px solid #ccc', borderRadius: '8px' }} />
            </div>
            {/* Main Image */}
            <div style={{ width: '35%', padding: '0 2rem' }}>
              <img src={selectedProduct.image} alt="Main" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            </div>
            {/* Product Details */}
            <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.rating}</p>
              <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{selectedProduct.price}</p>
              <p>Sold last month: 52 units</p>
              <button style={{ backgroundColor: '#003366', color: 'white', padding: '10px 20px', borderRadius: '8px', fontSize: '16px' }}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
        <p>Local Vendors Bazaar © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default HomePage;





























































































