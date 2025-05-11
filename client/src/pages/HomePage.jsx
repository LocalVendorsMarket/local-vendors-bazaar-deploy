import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';

const HomePage = () => {
  const categories = [
    'All', 'Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods', 'Restaurants', 'Services',
    "Today's Deals", 'New Releases', 'Gift Ideas', 'Health & Beauty', 'Real Estate Agents'
  ];

  const allProducts = Array.from({ length: 24 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    category: categories[index % categories.length],
    price: `$${10 + index}`,
    rating: '⭐⭐⭐⭐',
    image: `https://via.placeholder.com/300x200?text=Product+${index + 1}`
  }));

  const productRefs = Array.from({ length: 6 }, () => useRef(null));

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [deliveryLocation, setDeliveryLocation] = useState('Elgin 60120');
  const [isUpdateLocationOpen, setIsUpdateLocationOpen] = useState(false);
  const [newZip, setNewZip] = useState('');
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isNewCustomer, setIsNewCustomer] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');
  const [signInName, setSignInName] = useState('');
  const [signInPhone, setSignInPhone] = useState('');

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter((product) => product.category === selectedCategory);

  const scrollProducts = (row, direction) => {
    const ref = productRefs[row];
    if (ref?.current) {
      ref.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
    }
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
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff', minHeight: '100vh' }}>
      {/* Nav Bar */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', color: 'white' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <div style={{ marginLeft: '1rem' }}>
          <span>Delivering to {deliveryLocation}</span><br />
          <span onClick={() => setIsUpdateLocationOpen(true)} style={navLinkStyle}>Update location</span>
        </div>
        <nav style={{ display: 'flex', marginLeft: 'auto', gap: '20px', alignItems: 'center' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/shop" style={navLinkStyle}>Shop</a>
          <a href="/vendor-signup" style={navLinkStyle}>Become a Vendor</a>
          <span onClick={() => setIsSignInModalOpen(true)} style={navLinkStyle}>Sign In</span>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒</a>
        </nav>
      </header>

      {/* Sub Nav Bar */}
      <div style={{ backgroundColor: '#00509e', padding: '0.5rem 1rem', display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap' }}>
        {categories.map((cat) => (
          <span key={cat} onClick={() => setSelectedCategory(cat)} style={{ color: 'white', marginRight: '20px', cursor: 'pointer' }}>{cat}</span>
        ))}
      </div>

      {/* Product Rows */}
      {[0, 1, 2, 3, 4, 5].map((row) => (
        <div key={row} style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <button onClick={() => scrollProducts(row, 'left')} style={arrowButtonStyle}>&lt;</button>
          <div ref={productRefs[row]} style={{ display: 'flex', overflowX: 'auto', gap: '1rem', scrollBehavior: 'smooth' }}>
            {filteredProducts.slice(row * 4, row * 4 + 4).map(product => (
              <div key={product.id} style={productCardStyle}>
                <img src={product.image} alt={product.name} style={productImageStyle} />
                <h4>{product.name}</h4>
                <p>{product.rating}</p>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
          <button onClick={() => scrollProducts(row, 'right')} style={arrowButtonStyle}>&gt;</button>
        </div>
      ))}

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', textAlign: 'center', padding: '2rem', marginTop: '2rem' }}>
        <p>&copy; {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>

      {/* Update Location Modal */}
      {isUpdateLocationOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h3>Update Delivery Location</h3>
            <form onSubmit={handleUpdateLocationSubmit}>
              <input
                type="text"
                value={newZip}
                onChange={(e) => setNewZip(e.target.value)}
                placeholder="Enter ZIP code"
                required
                style={{ padding: '10px', marginBottom: '1rem' }}
              />
              <br />
              <button type="submit" style={buttonStyle}>Update</button>
              <button type="button" onClick={() => setIsUpdateLocationOpen(false)} style={buttonStyle}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {/* Sign In Modal */}
      {isSignInModalOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h3>{isNewCustomer ? 'Sign Up' : 'Sign In'}</h3>
            <form onSubmit={handleSignInSubmit}>
              {isNewCustomer && (
                <>
                  <input type="text" value={signInName} onChange={(e) => setSignInName(e.target.value)} placeholder="Name/Company" required style={inputStyle} /><br />
                  <input type="tel" value={signInPhone} onChange={(e) => setSignInPhone(e.target.value)} placeholder="Phone Number" required style={inputStyle} /><br />
                </>
              )}
              <input type="email" value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} placeholder="Email" required style={inputStyle} /><br />
              <button type="submit" style={buttonStyle}>{isNewCustomer ? 'Sign Up' : 'Sign In'}</button>
              <button type="button" onClick={() => setIsNewCustomer(!isNewCustomer)} style={buttonStyle}>
                {isNewCustomer ? 'Back to Sign In' : 'New Customer?'}
              </button>
              <button type="button" onClick={() => setIsSignInModalOpen(false)} style={buttonStyle}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' };
const arrowButtonStyle = { fontSize: '2rem', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' };
const productCardStyle = { minWidth: '250px', backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' };
const productImageStyle = { width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' };
const modalStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 };
const modalContentStyle = { backgroundColor: 'white', padding: '2rem', borderRadius: '10px', minWidth: '300px' };
const buttonStyle = { margin: '0.5rem', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer' };
const inputStyle = { width: '100%', padding: '10px', marginBottom: '1rem', borderRadius: '6px' };

export default HomePage;























































 


































































































































