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
  const [deliveryLocation, setDeliveryLocation] = useState('Elgin 60120');
  const [searchCategory, setSearchCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [vendorZip, setVendorZip] = useState('');
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isNewCustomer, setIsNewCustomer] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');
  const [isUpdateLocationOpen, setIsUpdateLocationOpen] = useState(false);
  const [newZip, setNewZip] = useState('');

  const productRefs = [useRef(null), useRef(null), useRef(null)];

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

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    setIsSignInModalOpen(false);
    setIsNewCustomer(false);
  };

  const handleUpdateLocationSubmit = (e) => {
    e.preventDefault();
    if (newZip.trim()) {
      setDeliveryLocation(newZip);
      setNewZip('');
      setIsUpdateLocationOpen(false);
    }
  };

  const handleVendorZipSearch = (e) => {
    e.preventDefault();
    alert(`Searching vendors near ${vendorZip}`);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Header */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', color: 'white' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
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
          <select value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)} style={{ padding: '6px', height: '40px', borderRadius: '8px', fontSize: '14px', width: '80px' }}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search products..." style={{ width: '250px', padding: '6px 10px', height: '40px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' }} />
          <input type="text" value={vendorZip} onChange={(e) => setVendorZip(e.target.value)} placeholder="Zip Code" style={{ width: '120px', padding: '6px 10px', height: '40px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' }} />
          <button onClick={handleVendorZipSearch} style={{ backgroundColor: '#d3d3d3', height: '40px', borderRadius: '8px', padding: '0 15px', border: 'none', fontSize: '14px', cursor: 'pointer' }}>Find Vendors</button>
          <span onClick={() => setIsSignInModalOpen(true)} style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}>Sign In</span>
          <a href="/cart" style={{ color: 'white', fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒</a>
        </div>
      </header>

      {/* Sub Nav */}
      <div style={{ backgroundColor: '#00509e', padding: '0.5rem', display: 'flex', overflowX: 'auto', gap: '10px' }}>
        {categories.map((cat) => (
          <span key={cat} onClick={() => setSelectedCategory(cat)} style={{ color: 'white', cursor: 'pointer', fontSize: '14px' }}>{cat}</span>
        ))}
      </div>

      {/* Product Rows */}
      {[0, 1, 2].map((row) => (
        <div key={row} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '1rem 2rem' }}>
          <button onClick={() => scrollProducts(row, 'left')}>&lt;</button>
          <div ref={productRefs[row]} style={{ overflowX: 'auto', display: 'flex', gap: '2rem', scrollBehavior: 'smooth' }}>
            {filteredProducts.map(product => (
              <div key={product.id} style={{ minWidth: '250px', backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
                <h2 style={{ color: '#003366', fontSize: '1.2rem', margin: '10px 0' }}>{product.name}</h2>
                <p style={{ color: '#666' }}>{product.rating}</p>
                <p style={{ fontWeight: 'bold', color: '#333' }}>{product.price}</p>
                <button style={{ backgroundColor: '#003366', color: 'white', padding: '6px 10px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Add to Cart</button>
              </div>
            ))}
          </div>
          <button onClick={() => scrollProducts(row, 'right')}>&gt;</button>
        </div>
      ))}

      {/* Sign In Modal */}
      {isSignInModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '400px', textAlign: 'center' }}>
            <h2 style={{ color: '#003366' }}>{isNewCustomer ? 'Create Account' : 'Sign In'}</h2>
            <form onSubmit={handleSignInSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {isNewCustomer && <input type="text" placeholder="Full Name" required />}
              <input type="email" placeholder="Email" value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} required />
              {isNewCustomer && <input type="password" placeholder="Create Password" required />}
              <button type="submit" style={{ backgroundColor: '#003366', color: 'white', padding: '0.75rem', borderRadius: '8px', fontWeight: 'bold' }}>{isNewCustomer ? 'Create Account' : 'Sign In'}</button>
            </form>
            <p onClick={() => setIsNewCustomer(!isNewCustomer)} style={{ color: '#007185', cursor: 'pointer', marginTop: '1rem' }}>
              {isNewCustomer ? 'Already have an account? Sign In' : 'New customer? Start here'}
            </p>
            <button onClick={() => setIsSignInModalOpen(false)} style={{ marginTop: '1rem', backgroundColor: '#ccc', padding: '0.5rem', borderRadius: '8px' }}>Close</button>
          </div>
        </div>
      )}

      {/* Update Location Modal */}
      {isUpdateLocationOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '400px', textAlign: 'center' }}>
            <h2>Update Your Location</h2>
            <form onSubmit={handleUpdateLocationSubmit}>
              <input type="text" value={newZip} onChange={(e) => setNewZip(e.target.value)} placeholder="Enter Zip Code" required />
              <div style={{ marginTop: '1rem' }}>
                <button type="submit" style={{ marginRight: '10px' }}>Update</button>
                <button type="button" onClick={() => setIsUpdateLocationOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px' }}>
          <div>
            <h3>Get to Know Us</h3>
            <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</a><br />
            <a href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</a><br />
            <a href="/faq" style={{ color: 'white', textDecoration: 'none' }}>FAQ</a><br />
            <a href="/testimonials" style={{ color: 'white', textDecoration: 'none' }}>Testimonials</a><br />
            <a href="/careers" style={{ color: 'white', textDecoration: 'none' }}>Careers</a>
          </div>
          <div>
            <h3>Make Money with Us</h3>
            <a href="/vendor-signup" style={{ color: 'white', textDecoration: 'none' }}>Become a Vendor</a><br />
            <a href="/advertise" style={{ color: 'white', textDecoration: 'none' }}>Advertise</a>
          </div>
          <div>
            <h3>Buyer Help</h3>
            <a href="/orders" style={{ color: 'white', textDecoration: 'none' }}>Your Orders</a><br />
            <a href="/help" style={{ color: 'white', textDecoration: 'none' }}>Help Center</a>
          </div>
          <div>
            <h3>Stay Connected</h3>
            <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</a><br />
            <a href="/newsletter" style={{ color: 'white', textDecoration: 'none' }}>Newsletter Signup</a><br />
            <a href="/socials" style={{ color: 'white', textDecoration: 'none' }}>Follow Us</a>
          </div>
        </div>
        <p style={{ marginTop: '1rem', fontSize: '12px' }}>
          © {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;





































































































