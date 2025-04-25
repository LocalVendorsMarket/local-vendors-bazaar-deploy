import React, { useState } from 'react';
import logo from '../assets/logo.png'; // make sure logo is under public/assets/logo.png

const ShopPage = ({ cart, setCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProduct, setModalProduct] = useState(null);

  const categories = [
    'All', 'Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods',
    'Services', 'Beauty & Cosmetics', 'Health & Wellness',
    'Kids & Baby', 'Local Restaurants', 'Electronics', 'Retail Stores'
  ];

  const products = [
    { id: 1, name: 'Local Honey', category: 'Food', image: 'https://via.placeholder.com/300x200?text=Local+Honey', price: '$12', rating: '⭐⭐⭐⭐⭐', description: 'Delicious organic local honey.' },
    { id: 2, name: 'Handmade Necklace', category: 'Jewelry', image: 'https://via.placeholder.com/300x200?text=Handmade+Necklace', price: '$25', rating: '⭐⭐⭐⭐', description: 'Beautiful handcrafted necklace.' },
    { id: 3, name: 'Organic T-Shirt', category: 'Clothing', image: 'https://via.placeholder.com/300x200?text=Organic+T-Shirt', price: '$18', rating: '⭐⭐⭐⭐', description: 'Soft organic cotton t-shirt.' },
    { id: 4, name: 'Custom Artwork', category: 'Art', image: 'https://via.placeholder.com/300x200?text=Custom+Artwork', price: '$80', rating: '⭐⭐⭐⭐⭐', description: 'Original custom paintings.' },
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Nav Bar */}
      <header style={{
        backgroundColor: '#2b9348',
        padding: '1rem',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/assets/logo.png" alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
        </div>
        <div style={{ flexGrow: 1, maxWidth: '600px', display: 'flex', alignItems: 'center', marginLeft: '1rem' }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ flexGrow: 1, padding: '8px 12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1rem' }}>
          <a href="/cart" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>
            🛒 {cart.length > 0 && `(${cart.length})`}
          </a>
        </div>
      </header>

      {/* Category Bar */}
      <div style={{ backgroundColor: '#d8f3dc', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '10px 0', gap: '10px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              backgroundColor: selectedCategory === cat ? '#40916c' : '#52b788',
              color: '#fff',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '20px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <main style={{ flexGrow: 1, padding: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '1rem' }} />
              <h2 style={{ fontSize: '1.2rem', color: '#2b9348', marginBottom: '0.5rem' }}>{product.name}</h2>
              <div style={{ color: '#ffb703', marginBottom: '0.5rem' }}>{product.rating}</div>
              <p style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>{product.price}</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => setModalProduct(product)} style={{ backgroundColor: '#40916c', color: '#fff', padding: '8px 16px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                  Learn More
                </button>
                <button onClick={() => handleAddToCart(product)} style={{ backgroundColor: '#ffb703', color: '#fff', padding: '8px 16px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {modalProduct && (
        <div onClick={() => setModalProduct(null)} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', maxWidth: '500px', width: '90%' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#2b9348', marginBottom: '1rem' }}>{modalProduct.name}</h2>
            <img src={modalProduct.image} alt={modalProduct.name} style={{ width: '100%', height: '250px', objectFit: 'cover', marginBottom: '1rem' }} />
            <p style={{ color: '#555', marginBottom: '1rem' }}>{modalProduct.description}</p>
            <button onClick={() => setModalProduct(null)} style={{ backgroundColor: '#40916c', color: '#fff', padding: '8px 16px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: '#f5f5f5', padding: '1rem', textAlign: 'center', color: '#666' }}>
        <p>&copy; {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ShopPage;
























