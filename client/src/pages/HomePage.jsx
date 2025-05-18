import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';

const HomePage = () => {
  const categories = [
    'All', 'Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods', 'Restaurants', 'Services',
    'Best Sellers', "Today's Deals", 'New Releases', 'Gift Ideas', 'Wedding Planners',
    'Wedding Photographers', 'Henna Tattoos', 'Bakeries', 'Coffee Shops', 'Florists', 'Furniture',
    'Grocery Stores', 'Health & Beauty', 'Local Events', 'Mobile Repair', 'Music & Bands',
    'Party Supplies', 'Pet Services', 'Photobooth Rentals', 'Real Estate Agents', 'Tutors',
    'Yoga Studios', 'Landscaping', 'Auto Repair', 'Travel Agents', 'Accountants', 'Make-Up Artists'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [deliveryLocation, setDeliveryLocation] = useState('Elgin 60120');
  const [searchQuery, setSearchQuery] = useState('');
  const [vendorZip, setVendorZip] = useState('');
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');
  const [isUpdateLocationOpen, setIsUpdateLocationOpen] = useState(false);
  const [newZip, setNewZip] = useState('');

  const productRows = [0, 1, 2];
  const productRefs = useRef(productRows.map(() => React.createRef()));

  const allProducts = Array.from({ length: 24 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    category: categories[index % categories.length],
    price: `$${10 + index}`,
    rating: '⭐⭐⭐⭐',
    image: `https://via.placeholder.com/300x200?text=Product+${index + 1}`
  }));

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory);

  const scrollProducts = (row, direction) => {
    const ref = productRefs.current[row];
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

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      {/* Navbar */}
      <header style={{ backgroundColor: '#003366', color: 'white', padding: '1rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <div style={{ marginLeft: '1rem', fontSize: '12px' }}>
          <div>Delivering to {deliveryLocation}</div>
          <div onClick={() => setIsUpdateLocationOpen(true)} style={navLinkStyle}>Update location</div>
        </div>
        <nav style={{ marginLeft: '2rem', display: 'flex', gap: '1rem' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/shop" style={navLinkStyle}>Shop</a>
          <a href="/vendor-signup" style={navLinkStyle}>Become a Vendor</a>
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <select style={selectStyle}>
            {categories.map(cat => <option key={cat}>{cat}</option>)}
          </select>
          <input type="text" placeholder="Search products..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} style={inputStyle} />
          <input type="text" placeholder="Zip Code" value={vendorZip} onChange={e => setVendorZip(e.target.value)} style={zipInputStyle} />
          <button style={buttonStyle}>Find Vendors</button>
          <span onClick={() => setIsSignInModalOpen(true)} style={navLinkStyle}>Sign In</span>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '20px', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒</a>
        </div>
      </header>

      {/* Sub Nav */}
      <div style={subNavBarStyle}>
        <div style={subNavScrollStyle}>
          {categories.map((cat, i) => (
            <span key={i} onClick={() => setSelectedCategory(cat)} style={subNavItemStyle}>
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Product Rows */}
      {productRows.map((row) => (
        <div key={row} style={rowStyle}>
          <button onClick={() => scrollProducts(row, 'left')} style={arrowButtonStyle}>&lt;</button>
          <div ref={productRefs.current[row]} style={productScrollStyle}>
            {filteredProducts.slice(row * 4, row * 4 + 4).map(product => (
              <div key={product.id} style={productCardStyle}>
                <img src={product.image} alt={product.name} style={productImageStyle} />
                <h4 style={{ margin: '10px 0 5px' }}>{product.name}</h4>
                <div>{product.rating}</div>
                <strong>{product.price}</strong>
              </div>
            ))}
          </div>
          <button onClick={() => scrollProducts(row, 'right')} style={arrowButtonStyle}>&gt;</button>
        </div>
      ))}

      {/* Update Location Modal */}
      {isUpdateLocationOpen && (
        <div style={modalStyle} onClick={() => setIsUpdateLocationOpen(false)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <h2>Update Zip Code</h2>
            <form onSubmit={handleUpdateLocationSubmit}>
              <input type="text" value={newZip} onChange={(e) => setNewZip(e.target.value)} placeholder="Enter zip code" style={inputStyle} />
              <div style={{ marginTop: '10px' }}>
                <button type="submit" style={buttonStyle}>Update</button>
                <button type="button" onClick={() => setIsUpdateLocationOpen(false)} style={buttonStyle}>Cancel</button>
              </div>
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

// 🔧 Styles
const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' };
const selectStyle = { padding: '6px', borderRadius: '6px', width: '130px', height: '40px', fontSize: '14px' };
const inputStyle = { padding: '6px 10px', borderRadius: '6px', border: '1px solid #ccc', height: '40px', fontSize: '14px', width: '200px' };
const zipInputStyle = { ...inputStyle, width: '100px' };
const buttonStyle = { backgroundColor: '#007acc', color: 'white', padding: '0.5rem 1rem', borderRadius: '6px', border: 'none', cursor: 'pointer' };

const subNavBarStyle = { backgroundColor: '#00509e', overflowX: 'auto' };
const subNavScrollStyle = { display: 'flex', padding: '0.5rem 1rem', gap: '16px', whiteSpace: 'nowrap' };
const subNavItemStyle = { color: 'white', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' };

const rowStyle = { display: 'flex', alignItems: 'center', padding: '1rem 2rem', gap: '10px' };
const arrowButtonStyle = { backgroundColor: '#003366', color: 'white', fontSize: '2rem', borderRadius: '50%', border: 'none', cursor: 'pointer', width: '40px', height: '40px' };
const productScrollStyle = { display: 'flex', gap: '2rem', overflowX: 'auto', scrollBehavior: 'smooth', flex: 1 };
const productCardStyle = { backgroundColor: 'white', padding: '1rem', borderRadius: '12px', minWidth: '240px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', textAlign: 'center' };
const productImageStyle = { width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px' };

const modalStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 };
const modalContentStyle = { backgroundColor: 'white', padding: '2rem', borderRadius: '8px', width: '90%', maxWidth: '400px' };

export default HomePage;
































































 


































































































































