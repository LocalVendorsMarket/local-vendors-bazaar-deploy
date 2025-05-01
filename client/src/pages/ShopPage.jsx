import React, { useState } from 'react';
import logo from '../assets/logo.png';

const ShopPage = ({ cart, setCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRating, setSelectedRating] = useState(null);

  const categories = ['All', 'Women’s Apparel', 'Jewelry', 'Makeup', 'Groceries', 'Electronics', 'Health', 'Toys', 'Shoes'];

  const allProducts = [
    { id: 1, name: 'Embroidered Kurti', category: 'Women’s Apparel', price: 30, rating: 5, stock: 3, image: 'https://via.placeholder.com/300x200?text=Kurti' },
    { id: 2, name: 'Gold Earrings', category: 'Jewelry', price: 22, rating: 4, stock: 8, image: 'https://via.placeholder.com/300x200?text=Earrings' },
    { id: 3, name: 'Organic Lip Balm', category: 'Makeup', price: 12, rating: 5, stock: 15, image: 'https://via.placeholder.com/300x200?text=Lip+Balm' },
    { id: 4, name: 'Organic T-Shirt', category: 'Women’s Apparel', price: 18, rating: 3, stock: 5, image: 'https://via.placeholder.com/300x200?text=T-Shirt' },
    { id: 5, name: 'Makeup Kit', category: 'Makeup', price: 40, rating: 4, stock: 2, image: 'https://via.placeholder.com/300x200?text=Makeup+Kit' },
    { id: 6, name: 'Running Shoes', category: 'Shoes', price: 50, rating: 5, stock: 10, image: 'https://via.placeholder.com/300x200?text=Shoes' }
  ];

  const filteredProducts = allProducts.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesRating = selectedRating ? p.rating === selectedRating : true;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesRating && matchesSearch;
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif', backgroundColor: '#f8f8f8' }}>
      {/* Sidebar Filters */}
      <aside style={{ width: '250px', background: '#fff', padding: '1rem', borderRight: '1px solid #ccc' }}>
        <h3 style={{ color: '#003366' }}>Filter By</h3>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 'bold' }}>Category</label>
          <select style={{ width: '100%', marginTop: '0.5rem' }} value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map(cat => <option key={cat}>{cat}</option>)}
          </select>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 'bold' }}>Star Rating</label>
          {[5, 4, 3, 2, 1].map(rating => (
            <div key={rating}>
              <input type="radio" id={`star-${rating}`} name="rating" value={rating} onChange={() => setSelectedRating(rating)} />
              <label htmlFor={`star-${rating}`}>{'⭐'.repeat(rating)}</label>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 'bold' }}>Zip Code</label>
          <input
            type="text"
            placeholder="Enter zip"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            style={{ width: '100%', marginTop: '0.5rem', padding: '0.5rem' }}
          />
        </div>
      </aside>

      {/* Main Shop Area */}
      <main style={{ flex: 1, padding: '2rem' }}>
        {/* Nav Bar */}
        <header style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/"><img src={logo} alt="Logo" style={{ height: '40px' }} /></a>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ flex: 1, margin: '0 1rem', padding: '0.6rem 2rem 0.6rem 0.75rem', borderRadius: '8px', border: '1px solid #ccc' }}
          />
          <a href="/signin" style={{ marginRight: '1rem', color: '#003366', fontWeight: 'bold' }}>Sign In</a>
          <a href="/cart" style={{ fontSize: '24px' }}>🛒</a>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
          {filteredProducts.map(product => (
            <div key={product.id} style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
              <h3 style={{ color: '#003366', margin: '0.5rem 0' }}>{product.name}</h3>
              <p>{'⭐'.repeat(product.rating)}</p>
              <p style={{ fontWeight: 'bold' }}>${product.price}</p>
              <p style={{ fontSize: '13px', color: '#666' }}>Only {product.stock} left in stock!</p>
              <p style={{ fontSize: '12px', color: '#00509e' }}>Sold this month: {10 + product.id}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                <button style={{ backgroundColor: '#003366', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}>Learn More</button>
                <button onClick={() => addToCart(product)} style={{ backgroundColor: '#003366', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ShopPage;

































































