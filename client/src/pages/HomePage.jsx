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
    alert(`Signed in with ${signInEmail}`);
    setSignInModalOpen(false);
    setSignInEmail('');
  };

  return (
    <div>
      <header style={{ backgroundColor: '#003366', padding: '1rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
          <div>
            <div>Delivering to {deliveryLocation}</div>
            <button onClick={() => setIsUpdateLocationOpen(true)} style={{ background: 'none', border: 'none', color: 'white', textDecoration: 'underline', cursor: 'pointer' }}>Update location</button>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/shop" style={navLinkStyle}>Shop</a>
          <a href="/vendor-signup" style={navLinkStyle}>Become a Vendor</a>
          <span onClick={() => setIsSignInModalOpen(true)} style={navLinkStyle}>Sign In</span>
        </div>
      </header>

      {/* Update Location Modal */}
      {isUpdateLocationOpen && (
        <div style={modalStyle} onClick={() => setIsUpdateLocationOpen(false)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <h2>Update Delivery Location</h2>
            <form onSubmit={handleUpdateLocationSubmit}>
              <input type="text" value={newZip} onChange={(e) => setNewZip(e.target.value)} placeholder="Enter new ZIP code" style={searchInputStyle} />
              <br /><br />
              <button type="submit" style={searchButtonStyle}>Update</button>
            </form>
          </div>
        </div>
      )}

      {/* Sign In Modal */}
      {isSignInModalOpen && (
        <div style={modalStyle} onClick={() => setIsSignInModalOpen(false)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <h2>Sign In</h2>
            <form onSubmit={handleSignInSubmit}>
              <input type="email" value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} placeholder="Email" style={searchInputStyle} />
              <br /><br />
              <button type="submit" style={searchButtonStyle}>Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' };
const searchInputStyle = { padding: '0.5rem', borderRadius: '6px', width: '200px' };
const searchButtonStyle = { padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer', backgroundColor: '#00509e', color: 'white' };
const modalStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999 };
const modalContentStyle = { backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '400px' };

export default HomePage;













 


































































































































