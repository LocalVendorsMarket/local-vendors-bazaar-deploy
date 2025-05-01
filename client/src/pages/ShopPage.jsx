import React, { useState } from 'react';
import logo from '../assets/logo.png';

const categories = [
  'All', 'Women\'s Apparel', 'Jewelry', 'Makeup', 'Home Goods', 'Groceries', 'Electronics', 'Gifts', 'Services'
];

const priceRanges = ['Under $25', '$25-$50', '$50-$100', '$100+'];
const starRatings = ['4★ & Up', '3★ & Up', '2★ & Up', '1★ & Up'];

const allProducts = [
  { id: 1, name: 'Embroidered Kurti', category: "Women's Apparel", price: '$30', rating: 5, image: 'https://via.placeholder.com/300x200?text=Kurti' },
  { id: 2, name: 'Gold Plated Earrings', category: 'Jewelry', price: '$22', rating: 4, image: 'https://via.placeholder.com/300x200?text=Earrings' },
  { id: 3, name: 'Organic Lip Balm', category: 'Makeup', price: '$12', rating: 5, image: 'https://via.placeholder.com/300x200?text=Lip+Balm' },
  { id: 4, name: 'Handcrafted Ring', category: 'Jewelry', price: '$28', rating: 5, image: 'https://via.placeholder.com/300x200?text=Ring' },
  { id: 5, name: 'Natural Foundation', category: 'Makeup', price: '$20', rating: 4, image: 'https://via.placeholder.com/300x200?text=Foundation' },
  { id: 6, name: 'Wooden Candle Holder', category: 'Home Goods', price: '$35', rating: 4, image: 'https://via.placeholder.com/300x200?text=Candle+Holder' },
  { id: 7, name: 'Fresh Spices Pack', category: 'Groceries', price: '$18', rating: 4, image: 'https://via.placeholder.com/300x200?text=Spices' },
  { id: 8, name: 'Bluetooth Earbuds', category: 'Electronics', price: '$45', rating: 4, image: 'https://via.placeholder.com/300x200?text=Earbuds' },
  { id: 9, name: 'Gift Basket', category: 'Gifts', price: '$55', rating: 5, image: 'https://via.placeholder.com/300x200?text=Gift+Basket' },
  { id: 10, name: 'Cleaning Service', category: 'Services', price: '$70', rating: 4, image: 'https://via.placeholder.com/300x200?text=Service' },
  { id: 11, name: 'Handmade Soap', category: 'Groceries', price: '$8', rating: 4, image: 'https://via.placeholder.com/300x200?text=Soap' },
  { id: 12, name: 'Room Diffuser', category: 'Home Goods', price: '$25', rating: 3, image: 'https://via.placeholder.com/300x200?text=Diffuser' }
];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [zipCode, setZipCode] = useState('');

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div style={{ display: 'flex', fontFamily: 'sans-serif', backgroundColor: '#f9f9f9' }}>
      {/* Sidebar Filters */}
      <aside style={{ width: '250px', padding: '2rem', backgroundColor: '#e0ecf7' }}>
        <h3>Filter By</h3>

        <label>Category</label>
        <select style={{ width: '100%', marginBottom: '1rem' }} value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>

        <label>Price</label>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {priceRanges.map(range => <li key={range}><input type="checkbox" /> {range}</li>)}
        </ul>

        <label>Rating</label>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {starRatings.map(rating => <li key={rating}><input type="checkbox" /> {rating}</li>)}
        </ul>

        <label>Vendor Zip Code</label>
        <input type="text" placeholder="Enter Zip" value={zipCode} onChange={(e) => setZipCode(e.target.value)} style={{ width: '100%', marginTop: '0.5rem' }} />
      </aside>

      {/* Main Product Area */}
      <main style={{ flex: 1, padding: '2rem' }}>
        <h2>Explore Products</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {filteredProducts.map(product => (
            <div key={product.id} style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
              <h4 style={{ marginTop: '1rem' }}>{product.name}</h4>
              <p>{product.price}</p>
              <p>{'★'.repeat(product.rating)}</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{ flex: 1, backgroundColor: '#0074D9', color: 'white', border: 'none', borderRadius: '4px', padding: '0.5rem' }}>Add to Cart</button>
                <button style={{ flex: 1, backgroundColor: '#ccc', border: 'none', borderRadius: '4px', padding: '0.5rem' }}>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ShopPage;




























































