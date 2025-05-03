import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
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
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const productRefs = [useRef(null), useRef(null), useRef(null)];

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter((product) => product.category === selectedCategory);

  const scrollProducts = (row, direction) => {
    const scrollAmount = direction === 'left' ? -300 : 300;
    productRefs[row]?.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f4f4f4' }}>
      <h2 style={{ color: '#003366' }}>Featured Products</h2>
      {[0].map((row) => (
        <div key={row} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '1rem 0' }}>
          <button onClick={() => scrollProducts(row, 'left')} style={{ fontSize: '1.5rem' }}>&lt;</button>
          <div ref={productRefs[row]} style={{ display: 'flex', overflowX: 'auto', gap: '2rem' }}>
            {filteredProducts.map(product => (
              <div key={product.id} style={{ cursor: 'pointer', background: '#fff', padding: '1rem', borderRadius: '8px', minWidth: '250px', textAlign: 'center', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }} onClick={() => handleProductClick(product)}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px' }} />
                <h3>{product.name}</h3>
                <p>{product.rating}</p>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
          <button onClick={() => scrollProducts(row, 'right')} style={{ fontSize: '1.5rem' }}>&gt;</button>
        </div>
      ))}

      {/* Product Modal */}
      {isProductModalOpen && selectedProduct && ReactDOM.createPortal(
        <div onClick={handleCloseModal} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff', borderRadius: '12px', display: 'flex', padding: '2rem', maxWidth: '80vw', width: '1000px', boxShadow: '0 5px 20px rgba(0,0,0,0.3)' }}>
            <div style={{ width: '25%', marginRight: '1rem' }}>
              <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', borderRadius: '8px' }} />
              {/* Add additional thumbnails vertically here if needed */}
            </div>
            <div style={{ width: '50%', paddingRight: '1rem' }}>
              <h2 style={{ marginBottom: '1rem', color: '#003366' }}>{selectedProduct.name}</h2>
              <p style={{ fontSize: '1.1rem', color: '#555' }}>{selectedProduct.rating}</p>
              <p style={{ fontSize: '1.25rem', fontWeight: 'bold', marginTop: '1rem' }}>{selectedProduct.price}</p>
              <p style={{ marginTop: '1rem', fontSize: '14px' }}>Customer Reviews: ⭐⭐⭐⭐☆</p>
              <p style={{ fontSize: '14px', color: '#777' }}>Sold last month: 40+</p>
            </div>
            <div style={{ width: '25%', textAlign: 'right' }}>
              <button style={{ backgroundColor: '#003366', color: '#fff', padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '1rem' }}>Buy Now</button>
              <br />
              <button onClick={handleCloseModal} style={{ backgroundColor: '#ccc', color: '#000', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}>Close</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default HomePage;




























































































