import React, { useState } from 'react';
import logo from '../assets/logo.png';

const ShopPage = ({ cart, setCart }) => {
  const categories = [
    'All', 'Women\'s Apparel', 'Jewelry', 'Makeup', 'Clothing', 'Art', 'Home Goods',
    'Restaurants', 'Services', 'Grocery Stores', 'Health & Beauty', 'Travel Agents'
  ];

  const products = [
    { id: 1, name: 'Handmade Earrings', category: 'Jewelry', price: 25, rating: 5, sold: 15, remaining: 10 },
    { id: 2, name: 'Organic Lipstick', category: 'Makeup', price: 18, rating: 4, sold: 12, remaining: 8 },
    { id: 3, name: 'Cotton Kurta', category: "Women's Apparel", price: 35, rating: 5, sold: 20, remaining: 5 },
    { id: 4, name: 'Acrylic Painting', category: 'Art', price: 60, rating: 4, sold: 7, remaining: 3 },
    { id: 5, name: 'Wooden Table', category: 'Home Goods', price: 120, rating: 5, sold: 10, remaining: 2 },
    { id: 6, name: 'Pizza Combo', category: 'Restaurants', price: 15, rating: 4, sold: 25, remaining: 20 },
    { id: 7, name: 'Massage Therapy', category: 'Services', price: 50, rating: 5, sold: 8, remaining: 4 },
    { id: 8, name: 'Fresh Produce', category: 'Grocery Stores', price: 30, rating: 3, sold: 14, remaining: 10 },
    { id: 9, name: 'Herbal Shampoo', category: 'Health & Beauty', price: 22, rating: 4, sold: 11, remaining: 6 },
    { id: 10, name: 'Floral Dress', category: "Women's Apparel", price: 40, rating: 5, sold: 17, remaining: 9 },
    { id: 11, name: 'Bracelet Set', category: 'Jewelry', price: 28, rating: 4, sold: 9, remaining: 6 },
    { id: 12, name: 'Travel Package', category: 'Travel Agents', price: 200, rating: 5, sold: 6, remaining: 3 }
  ];

  const [filters, setFilters] = useState({ category: 'All', zip: '', rating: null, price: null });

  const filtered = products.filter(product => {
    const matchesCategory = filters.category === 'All' || product.category === filters.category;
    return matchesCategory;
  });

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Nav Bar */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <input type="text" placeholder="Search products..." style={{ width: '300px', padding: '8px', borderRadius: '6px' }} />
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <span style={{ color: 'white', cursor: 'pointer' }} onClick={() => alert('Sign-in modal coming soon!')}>Sign In</span>
          <a href="/cart" style={{ color: 'white', textDecoration: 'none', fontSize: '24px' }}>🛒</a>
        </nav>
      </header>

      {/* Main */}
      <div style={{ display: 'flex' }}>
        {/* Side Filter */}
        <aside style={{ width: '250px', padding: '1rem', backgroundColor: '#f2f2f2' }}>
          <h3>Filter By</h3>
          <label>Category:</label>
          <select value={filters.category} onChange={(e) => setFilters({ ...filters, category: e.target.value })} style={{ width: '100%', padding: '6px', marginBottom: '1rem' }}>
            {categories.map(cat => <option key={cat}>{cat}</option>)}
          </select>
          <label>Price:</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '1rem' }}>
            <button>$0 - $25</button>
            <button>$26 - $50</button>
            <button>$51 - $100</button>
            <button>$101+</button>
          </div>
          <label>Zip Code:</label>
          <input type="text" placeholder="Enter ZIP" style={{ width: '100%', padding: '6px', marginBottom: '1rem' }} />
          <label>Rating:</label>
          <div>
            {[1, 2, 3, 4, 5].map(num => (
              <div key={num}><input type="checkbox" /> {"⭐".repeat(num)}</div>
            ))}
          </div>
          <button style={{ marginTop: '1rem', backgroundColor: '#003366', color: 'white', padding: '8px', width: '100%' }}>Search</button>
        </aside>

        {/* Products */}
        <main style={{ flexGrow: 1, padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
          {filtered.map(product => (
            <div key={product.id} style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
              <img src={`https://via.placeholder.com/250x180?text=${product.name}`} alt={product.name} style={{ width: '100%', borderRadius: '6px' }} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <p>{'⭐'.repeat(product.rating)} · {product.sold} sold · {product.remaining} left</p>
              <button style={{ backgroundColor: '#003366', color: 'white', padding: '8px', width: '100%', borderRadius: '6px' }}>Add to Cart</button>
            </div>
          ))}
        </main>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', textAlign: 'center', marginTop: '2rem' }}>
        <p>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ShopPage;








































































