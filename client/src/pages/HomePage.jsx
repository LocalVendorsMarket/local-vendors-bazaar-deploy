import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';

const HomePage = ({ cart, setCart }) => {
  const categories = [
    'All', 'Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods', 'Restaurants', 'Services',
    'Best Sellers', "Today's Deals", 'New Releases', 'Gift Ideas', 'Wedding Planners',
    'Wedding Photographers', 'Henna Tattoos', 'Bakeries', 'Coffee Shops', 'Florists', 'Furniture',
    'Grocery Stores', 'Health & Beauty', 'Local Events', 'Mobile Repair', 'Music & Bands',
    'Party Supplies', 'Pet Services', 'Photobooth Rentals', 'Real Estate Agents', 'Tutors',
    'Yoga Studios', 'Landscaping', 'Auto Repair', 'Travel Agents', 'Accountants', 'Make-Up Artists'
  ];

  const allProducts = Array.from({ length: 24 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    category: categories[index % categories.length],
    price: `$${10 + index}`,
    rating: '⭐⭐⭐⭐',
    images: [
      `https://via.placeholder.com/300x200?text=Product+${index + 1}`,
      `https://via.placeholder.com/300x200?text=Alt+View+1`,
      `https://via.placeholder.com/300x200?text=Alt+View+2`,
      `https://via.placeholder.com/300x200?text=Alt+View+3`,
      `https://via.placeholder.com/300x200?text=Alt+View+4`
    ]
  }));

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [deliveryLocation, setDeliveryLocation] = useState('Elgin 60120');
  const [searchCategory, setSearchCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [vendorZip, setVendorZip] = useState('');
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isNewCustomer, setIsNewCustomer] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');
  const [signInName, setSignInName] = useState('');
  const [signInPhone, setSignInPhone] = useState('');
  const [isUpdateLocationOpen, setIsUpdateLocationOpen] = useState(false);
  const [newZip, setNewZip] = useState('');

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

  const handleVendorZipSearch = () => {
    alert(`Searching vendors near ${vendorZip}`);
  };

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', color: 'white' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <div style={{ marginLeft: '1rem' }}>
          <span>Delivering to {deliveryLocation}</span><br />
          <span onClick={() => setIsUpdateLocationOpen(true)} style={{ textDecoration: 'underline', cursor: 'pointer' }}>Update location</span>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <select value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)}>{categories.map(cat => <option key={cat}>{cat}</option>)}</select>
          <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search products..." />
          <input value={vendorZip} onChange={(e) => setVendorZip(e.target.value)} placeholder="Zip Code" />
          <button onClick={handleVendorZipSearch}>Find Vendors</button>
          <span onClick={() => setIsSignInModalOpen(true)} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Sign In</span>
        </div>
      </header>

      {/* Sub Nav */}
      <div style={{ backgroundColor: '#00509e', display: 'flex', overflowX: 'auto', padding: '0.5rem' }}>
        {categories.map(cat => (
          <span key={cat} onClick={() => setSelectedCategory(cat)} style={{ color: 'white', padding: '0 10px', cursor: 'pointer' }}>{cat}</span>
        ))}
      </div>

      {/* Product Grid */}
      <main style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', padding: '2rem' }}>
        {filteredProducts.map(product => (
          <div key={product.id} style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '8px', width: '250px', textAlign: 'center', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
            <img src={product.images[0]} alt={product.name} style={{ width: '100%', borderRadius: '6px' }} />
            <h3>{product.name}</h3>
            <p>{product.rating}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </main>

      {/* Update Location Modal */}
      {isUpdateLocationOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2>Update Location</h2>
            <form onSubmit={handleUpdateLocationSubmit}>
              <input value={newZip} onChange={(e) => setNewZip(e.target.value)} placeholder="Enter zip code" />
              <button type="submit">Update</button>
              <button onClick={() => setIsUpdateLocationOpen(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {/* Sign In Modal */}
      {isSignInModalOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2>{isNewCustomer ? 'Sign Up' : 'Sign In'}</h2>
            <form onSubmit={handleSignInSubmit}>
              {isNewCustomer && (
                <>
                  <input value={signInName} onChange={(e) => setSignInName(e.target.value)} placeholder="Name or Company" required />
                  <input value={signInPhone} onChange={(e) => setSignInPhone(e.target.value)} placeholder="Phone Number" required />
                </>
              )}
              <input value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} placeholder="Email" required />
              <button type="submit">{isNewCustomer ? 'Sign Up' : 'Sign In'}</button>
              <button type="button" onClick={() => setIsNewCustomer(!isNewCustomer)}>{isNewCustomer ? 'Back to Sign In' : 'New Customer?'}</button>
              <button onClick={() => setIsSignInModalOpen(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', textAlign: 'center', padding: '2rem', marginTop: '2rem' }}>
        <p>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

const modalStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 };
const modalContentStyle = { backgroundColor: '#fff', padding: '2rem', borderRadius: '10px', width: '400px', textAlign: 'center' };

export default HomePage;



















 


































































































































