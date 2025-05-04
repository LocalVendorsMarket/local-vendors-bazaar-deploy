import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';

const HomePage = () => {
  const categories = [
    'All', 'Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods', 'Restaurants', 'Services',
    'Best Sellers', "Today's Deals", 'New Releases', 'Gift Ideas', 'Wedding Planners',
    'Wedding Photographers', 'Henna Tattoos', 'Bakeries', 'Coffee Shops', 'Florists', 'Furniture',
    'Grocery Stores', 'Health & Beauty', 'Local Events', 'Mobile Repair', 'Music & Bands',
    'Party Supplies', 'Pet Services', 'Photobooth Rentals', 'Real Estate Agents', 'Tutors',
    'Yoga Studios', 'Landscaping', 'Auto Repair', 'Travel Agents', 'Accountants', 'Make-Up Artists'
  ];

  const allProducts = [
    { id: 1, name: 'Local Honey', category: 'Food', price: '$12', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Local+Honey' },
    { id: 2, name: 'Handmade Necklace', category: 'Jewelry', price: '$25', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Necklace' },
    { id: 3, name: 'Organic T-Shirt', category: 'Clothing', price: '$18', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Organic+T-Shirt' },
    { id: 4, name: 'Custom Artwork', category: 'Art', price: '$80', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Artwork' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productRefs = [useRef(null), useRef(null), useRef(null)];

  const filteredProducts = selectedCategory === 'All' ? allProducts : allProducts.filter(p => p.category === selectedCategory);

  const scrollProducts = (row, dir) => {
    const ref = productRefs[row];
    if (ref?.current) ref.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <div style={{ fontFamily: 'sans-serif' }}>

      {/* Nav Bar */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <div style={{ display: 'flex', gap: '15px' }}>
          <select>
            {categories.map(cat => <option key={cat}>{cat}</option>)}
          </select>
          <input type="text" placeholder="Search..." />
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button>Sign In</button>
          <button>Update Location</button>
          <a href="/cart">🛒</a>
        </div>
      </header>

      {/* Sub Nav Bar */}
      <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', backgroundColor: '#00509e', padding: '0.5rem' }}>
        {categories.map(cat => (
          <span
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{ display: 'inline-block', marginRight: '1rem', color: 'white', cursor: 'pointer' }}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Product Rows */}
      {[0, 1, 2].map(row => (
        <div key={row} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '1rem' }}>
          <button onClick={() => scrollProducts(row, 'left')}>&lt;</button>
          <div ref={productRefs[row]} style={{ display: 'flex', overflowX: 'auto', gap: '1rem' }}>
            {filteredProducts.map(product => (
              <div key={product.id} onClick={() => handleProductClick(product)} style={{ minWidth: '200px', backgroundColor: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
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

      {/* Product Modal */}
      {showModal && selectedProduct && (
  <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 }} onClick={() => setShowModal(false)}>
    <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', display: 'flex', width: '90%', maxWidth: '900px' }} onClick={e => e.stopPropagation()}>
      <div style={{ width: '40%', paddingRight: '1rem' }}>
        <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%' }} />
      </div>
      <div style={{ width: '60%' }}>
        <h2>{selectedProduct.name}</h2>
        <p>{selectedProduct.rating}</p>
        <p style={{ fontWeight: 'bold' }}>{selectedProduct.price}</p>
        <p>Sold last month: 52 units</p>
        <button style={{ backgroundColor: '#003366', color: 'white', padding: '10px 15px', borderRadius: '6px' }}>Add to Cart</button>
        <button onClick={() => setShowModal(false)} style={{ display: 'block', marginTop: '1rem', backgroundColor: '#ccc', padding: '8px 12px', borderRadius: '6px' }}>Close</button>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default HomePage;














































































































