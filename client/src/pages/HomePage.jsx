import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';

const HomePage = ({ cart, setCart }) => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Embroidered Kurti',
      category: "Women's Apparel",
      price: '$30',
      rating: '⭐⭐⭐⭐⭐',
      sold: 34,
      remaining: 15,
      images: [
        'https://via.placeholder.com/300x200?text=Kurti+Front',
        'https://via.placeholder.com/300x200?text=Kurti+Back',
        'https://via.placeholder.com/300x200?text=Kurti+Detail'
      ]
    }
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');

  const openModal = (product) => {
    setModalProduct(product);
    setMainImage(product.images[0]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalProduct(null);
    setMainImage('');
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', color: 'white' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <span style={{ marginLeft: 'auto', fontWeight: 'bold' }}>Welcome to Local Vendors Bazaar</span>
      </header>

      <div style={{ backgroundColor: '#00509e', padding: '0.5rem', display: 'flex', justifyContent: 'center', gap: '1rem', color: 'white' }}>
        <span>All</span>
        <span>Women's Apparel</span>
        <span>Jewelry</span>
        <span>Makeup</span>
        <span>Art</span>
        <span>Home Goods</span>
        <span>Restaurants</span>
      </div>

      <section style={{ padding: '2rem' }}>
        <h2 style={{ color: '#003366', marginBottom: '1rem' }}>Featured Products</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          {featuredProducts.map(product => (
            <div key={product.id} style={{ width: '250px', backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
              <img src={product.images[0]} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} onClick={() => openModal(product)} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <p>{product.rating}</p>
              <p style={{ fontSize: '13px', color: '#003366' }}>{product.sold} sold this month · {product.remaining} left</p>
              <button style={{ backgroundColor: '#003366', color: 'white', padding: '8px 12px', borderRadius: '8px', fontWeight: 'bold', marginTop: '0.5rem' }}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {modalOpen && modalProduct && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 }}>
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', maxWidth: '90%', display: 'flex', gap: '2rem' }}>
            <div>
              {modalProduct.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`thumb-${idx}`}
                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px', marginBottom: '0.5rem', cursor: 'pointer' }}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
            <div>
              <img src={mainImage} alt="Main Preview" style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }} />
              <h2>{modalProduct.name}</h2>
              <p><strong>Price:</strong> {modalProduct.price}</p>
              <p><strong>Rating:</strong> {modalProduct.rating}</p>
              <p><strong>{modalProduct.sold} sold this month · {modalProduct.remaining} left</strong></p>
              <button style={{ backgroundColor: '#003366', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 'bold', marginTop: '1rem' }}>Add to Cart</button>
              <br /><br />
              <button onClick={closeModal} style={{ backgroundColor: '#ccc', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: 'bold' }}>Close</button>
            </div>
          </div>
        </div>
      )}

      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', textAlign: 'center', marginTop: '2rem' }}>
        <p>&copy; {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;














































































