import React, { useState } from 'react';
import logo from '../assets/logo.png';

const ShopPage = ({ cart }) => {
  const categories = [
    'All', 'Women’s Apparel', 'Men’s Apparel', 'Kids’ Clothing', 'Jewelry', 'Makeup',
    'Handbags', 'Electronics', 'Health & Beauty', 'Pet Supplies', 'Home Decor',
    'Kitchen Essentials', 'Religious Items', 'Cultural Gifts', 'Toys & Games'
  ];

  const allProducts = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    category: categories[(i % categories.length) || 1],
    price: `$${(10 + i * 2).toFixed(2)}`,
    rating: '⭐⭐⭐⭐',
    image: `https://via.placeholder.com/300x200?text=Product+${i + 1}`
  }));

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filteredProducts = allProducts.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const price = parseFloat(p.price.replace('$', ''));
    const matchesPrice = (!minPrice || price >= parseFloat(minPrice)) && (!maxPrice || price <= parseFloat(maxPrice));
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f6f9' }}>
      {/* Nav Bar */}
      <header style={{ backgroundColor: '#003366', color: 'white', display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '1rem' }} />
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/vendor-signup" style={navLinkStyle}>Become a Vendor</a>
          <span style={{ marginLeft: '1rem', fontWeight: 'bold' }}>🌟 Free Shipping over $50!</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="/signin" style={navLinkStyle}>Sign In</a>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px' }}>🛒 {cart?.length > 0 && `(${cart.length})`}</a>
        </div>
      </header>

      <div style={{ display: 'flex' }}>
        {/* Sidebar Filters */}
        <aside style={{ width: '250px', backgroundColor: '#ffffff', padding: '1rem', borderRight: '1px solid #ccc' }}>
          <h3>Category</h3>
          <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} style={selectStyle}>
            {categories.map(cat => <option key={cat}>{cat}</option>)}
          </select>

          <h3>Search</h3>
          <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search..." style={inputStyle} />

          <h3>Zip Code</h3>
          <input type="text" value={zipCode} onChange={e => setZipCode(e.target.value)} placeholder="e.g. 60601" style={inputStyle} />

          <h3>Price Range</h3>
          <input type="number" placeholder="Min" value={minPrice} onChange={e => setMinPrice(e.target.value)} style={inputStyle} />
          <input type="number" placeholder="Max" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} style={inputStyle} />

          <h3>Rating</h3>
          <div>
            <label><input type="checkbox" /> ⭐⭐⭐⭐ & up</label><br />
            <label><input type="checkbox" /> ⭐⭐⭐ & up</label>
          </div>
        </aside>

        {/* Main Content */}
        <main style={{ flexGrow: 1, padding: '2rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Explore Products</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {filteredProducts.map(product => (
              <div key={product.id} style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '1rem', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
                <h3 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>{product.name}</h3>
                <p>{product.price} · {product.rating}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                  <button style={buttonStyle}>Learn More</button>
                  <button style={buttonStyle}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', textAlign: 'center', padding: '2rem', marginTop: '2rem' }}>
        <p>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

const navLinkStyle = { color: 'white', marginRight: '1rem', textDecoration: 'none', fontWeight: 'bold' };
const selectStyle = { width: '100%', padding: '0.5rem', marginBottom: '1rem' };
const inputStyle = { width: '100%', padding: '0.5rem', marginBottom: '1rem' };
const buttonStyle = { padding: '0.5rem 1rem', backgroundColor: '#00509e', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' };

export default ShopPage;

























































