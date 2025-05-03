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
    { id: 1, name: 'Local Honey', category: 'Food', price: '$12', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Local+Honey', sold: 52, reviews: 'Top quality!' },
    { id: 2, name: 'Handmade Necklace', category: 'Jewelry', price: '$25', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Necklace', sold: 30, reviews: 'Elegant design' },
    { id: 3, name: 'Organic T-Shirt', category: 'Clothing', price: '$18', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Organic+T-Shirt', sold: 60, reviews: 'Very comfortable' },
    { id: 4, name: 'Custom Artwork', category: 'Art', price: '$80', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Artwork', sold: 12, reviews: 'Beautiful details' },
    { id: 5, name: 'Gourmet Pizza', category: 'Restaurants', price: '$15', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Pizza', sold: 98, reviews: 'Delicious!' },
    { id: 6, name: 'Home Repair Service', category: 'Services', price: '$50/hr', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Home+Repair', sold: 22, reviews: 'Quick and reliable' }
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

      {showModal && selectedProduct && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 }} onClick={() => setShowModal(false)}>
          <div style={{ backgroundColor: 'white', display: 'flex', width: '90%', height: '80%', borderRadius: '12px', padding: '2rem' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ width: '15%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[...Array(4)].map((_, i) => (
                <img key={i} src={selectedProduct.image} alt="thumb" style={{ width: '100%', border: '1px solid #ccc', borderRadius: '8px' }} />
              ))}
            </div>
            <div style={{ width: '35%', padding: '0 2rem' }}>
              <img src={selectedProduct.image} alt="Main" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            </div>
            <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.rating}</p>
              <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{selectedProduct.price}</p>
              <p>Sold last month: {selectedProduct.sold} units</p>
              <p>Customer Reviews: {selectedProduct.reviews}</p>
              <button style={{ backgroundColor: '#003366', color: 'white', padding: '8px 16px', borderRadius: '8px', fontSize: '14px' }}>Add to Cart</button>
              <button onClick={() => setShowModal(false)} style={{ alignSelf: 'flex-start', marginTop: '1rem', backgroundColor: '#ccc', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;






































































































