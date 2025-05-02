import React, { useState } from 'react';
import logo from '../assets/logo.png';

const HomePage = () => {
  const [deliveryLocation, setDeliveryLocation] = useState('Elgin 60120');
  const [isUpdateLocationOpen, setIsUpdateLocationOpen] = useState(false);
  const [newZip, setNewZip] = useState('');
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');

  const handleUpdateLocationSubmit = (e) => {
    e.preventDefault();
    if (newZip.trim()) {
      setDeliveryLocation(newZip);
      setNewZip('');
      setIsUpdateLocationOpen(false);
    }
  };

  const allProducts = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: `$${(i + 1) * 5}`,
    rating: '⭐⭐⭐⭐',
    sold: 25 + i,
    remaining: 100 - i * 2,
    image: `https://via.placeholder.com/300x200?text=Product+${i + 1}`,
  }));

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff' }}>

      {/* Filter Section and Product Grid */}
      <div style={{ display: 'flex', padding: '2rem' }}>
        {/* Sidebar Filters */}
        <aside style={{ width: '250px', marginRight: '2rem' }}>
          <h3 style={{ color: '#003366' }}>Filter By</h3>
          <label style={{ fontWeight: 'bold', display: 'block', margin: '1rem 0 0.5rem' }}>Category</label>
          <select style={{ width: '100%', padding: '0.5rem' }}>
            <option>All</option>
            <option>Women’s Apparel</option>
            <option>Jewelry</option>
            <option>Makeup</option>
            <option>Food</option>
          </select>
          <label style={{ fontWeight: 'bold', display: 'block', margin: '1rem 0 0.5rem' }}>Price</label>
          <div>
            <label><input type="checkbox" /> Under $25</label><br />
            <label><input type="checkbox" /> $25 - $50</label><br />
            <label><input type="checkbox" /> $50 - $100</label><br />
            <label><input type="checkbox" /> Over $100</label>
          </div>
          <label style={{ fontWeight: 'bold', display: 'block', margin: '1rem 0 0.5rem' }}>Zip Code</label>
          <input type="text" placeholder="Enter Zip" style={{ width: '100%', padding: '0.5rem' }} />
          <label style={{ fontWeight: 'bold', display: 'block', margin: '1rem 0 0.5rem' }}>Rating</label>
          <div>
            <label><input type="checkbox" /> ⭐⭐⭐⭐</label><br />
            <label><input type="checkbox" /> ⭐⭐⭐</label><br />
            <label><input type="checkbox" /> ⭐⭐</label><br />
            <label><input type="checkbox" /> ⭐</label>
          </div>
          <button style={{ marginTop: '1rem', backgroundColor: '#003366', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>Search</button>
        </aside>

        {/* Product Grid */}
        <section style={{ flexGrow: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
          {allProducts.map(product => (
            <div key={product.id} style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
              <h2 style={{ color: '#003366' }}>{product.name}</h2>
              <p>{product.rating}</p>
              <p>{product.price}</p>
              <p style={{ fontSize: '13px', color: '#003366' }}>{product.sold} sold this month</p>
              <p style={{ fontSize: '13px', color: '#003366' }}>{product.remaining} left</p>
              <p style={{ fontSize: '13px' }}><a href="#">See customer reviews (12)</a></p>
              <button style={{ backgroundColor: '#003366', color: 'white', padding: '8px 12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Add to Cart</button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default HomePage;



















































































