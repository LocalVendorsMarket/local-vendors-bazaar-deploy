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
    { id: 1, name: 'Local Honey', category: 'Food', price: '$12', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Local+Honey' },
    { id: 2, name: 'Handmade Necklace', category: 'Jewelry', price: '$25', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Necklace' },
    { id: 3, name: 'Organic T-Shirt', category: 'Clothing', price: '$18', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Organic+T-Shirt' },
    { id: 4, name: 'Custom Artwork', category: 'Art', price: '$80', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Artwork' },
    { id: 5, name: 'Gourmet Pizza', category: 'Restaurants', price: '$15', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Pizza' },
    { id: 6, name: 'Home Repair Service', category: 'Services', price: '$50/hr', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Home+Repair' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [deliveryLocation, setDeliveryLocation] = useState('Elgin 60120');
  const [isUpdateLocationOpen, setIsUpdateLocationOpen] = useState(false);
  const [newZip, setNewZip] = useState('');
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isNewCustomer, setIsNewCustomer] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');
  const productRefs = [useRef(null), useRef(null), useRef(null)];
  const [showFilters, setShowFilters] = useState(false);

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

  const handleUpdateLocationSubmit = (e) => {
    e.preventDefault();
    if (newZip.trim()) {
      setDeliveryLocation(newZip);
      setNewZip('');
      setIsUpdateLocationOpen(false);
    }
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    setIsSignInModalOpen(false);
    setIsNewCustomer(false);
  };

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', color: 'white' }}>
        <a href="/"><img src="/assets/logo.png" alt="Logo" style={{ width: '50px' }} /></a>
        <div style={{ fontSize: '12px', marginLeft: '1rem' }}>
          <span>Delivering to {deliveryLocation}</span><br />
          <span onClick={() => setIsUpdateLocationOpen(true)} style={{ textDecoration: 'underline', cursor: 'pointer' }}>Update location</span>
        </div>
        <div style={{ display: 'flex', gap: '15px', marginLeft: '2rem' }}>
          <a href="/" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}>Home</a>
          <a href="/shop" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}>Shop</a>
          <a href="/vendor-signup" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}>Become a Vendor</a>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <select style={{ padding: '6px', height: '40px', borderRadius: '8px', fontSize: '14px', width: '80px' }}>
            <option>All</option>
          </select>
          <input type="text" placeholder="Search products..." style={{ width: '250px', padding: '6px 10px', height: '40px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' }} />
          <input type="text" placeholder="Zip Code" style={{ width: '120px', padding: '6px 10px', height: '40px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' }} />
          <button style={{ backgroundColor: '#d3d3d3', height: '40px', borderRadius: '8px', padding: '0 15px', border: 'none', fontSize: '14px', cursor: 'pointer' }}>Find Vendors</button>
          <span onClick={() => setIsSignInModalOpen(true)} style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}>Sign In</span>
          <a href="/cart" style={{ color: 'white', fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒</a>
        </div>
      </header>

      {/* Sub Nav Bar */}
      <div style={{ backgroundColor: '#00509e', padding: '0.5rem 1rem', display: 'flex', flexWrap: 'nowrap', overflowX: 'auto', gap: '1rem' }}>
        {categories.map((cat) => (
          <span key={cat} onClick={() => setSelectedCategory(cat)} style={{ color: 'white', cursor: 'pointer', fontSize: '14px', whiteSpace: 'nowrap' }}>{cat}</span>
        ))}
        <span onClick={() => setShowFilters(true)} style={{ marginLeft: 'auto', color: '#fff', cursor: 'pointer', textDecoration: 'underline' }}>All Filters</span>
      </div>

      {/* Hidden Filter Panel */}
      {showFilters && (
        <div style={{ backgroundColor: '#f5f5f5', padding: '1rem', position: 'absolute', top: '100px', right: '20px', zIndex: 10, borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
          <h4 style={{ marginBottom: '0.5rem' }}>Filter by Department</h4>
          {categories.slice(1).map((cat) => (
            <p key={cat} style={{ cursor: 'pointer', margin: 0 }} onClick={() => { setSelectedCategory(cat); setShowFilters(false); }}>{cat}</p>
          ))}
          <button onClick={() => setShowFilters(false)} style={{ marginTop: '0.5rem', padding: '0.5rem 1rem', borderRadius: '6px', backgroundColor: '#ccc', cursor: 'pointer' }}>Close</button>
        </div>
      )}

      {/* Update Location Modal */}
      {isUpdateLocationOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <form onSubmit={handleUpdateLocationSubmit} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px' }}>
            <h3>Update Location</h3>
            <input type="text" value={newZip} onChange={(e) => setNewZip(e.target.value)} placeholder="Enter Zip Code" required style={{ padding: '10px', marginBottom: '1rem', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }} />
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#003366', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Update</button>
          </form>
        </div>
      )}

      {/* Sign In Modal */}
      {isSignInModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <form onSubmit={handleSignInSubmit} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px' }}>
            <h3>{isNewCustomer ? 'Create Account' : 'Sign In'}</h3>
            {isNewCustomer && <input type="text" placeholder="Full Name" style={{ padding: '10px', marginBottom: '1rem', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }} required />}
            <input type="email" placeholder="Email" value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} required style={{ padding: '10px', marginBottom: '1rem', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }} />
            {isNewCustomer && <input type="password" placeholder="Create Password" style={{ padding: '10px', marginBottom: '1rem', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }} required />}
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#003366', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>{isNewCustomer ? 'Create your account' : 'Continue'}</button>
            {!isNewCustomer && (
              <p onClick={() => setIsNewCustomer(true)} style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#007185', textDecoration: 'underline', cursor: 'pointer' }}>New customer? Start here.</p>
            )}
            <button type="button" onClick={() => { setIsSignInModalOpen(false); setIsNewCustomer(false); }} style={{ marginTop: '1.5rem', backgroundColor: '#ccc', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>
          </form>
        </div>
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
        <p>Local Vendors Bazaar © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default HomePage;



































































































