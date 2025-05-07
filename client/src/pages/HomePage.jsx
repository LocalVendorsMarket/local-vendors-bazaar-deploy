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

  const allProducts = Array.from({ length: 24 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    category: categories[index % categories.length],
    price: `$${10 + index}`,
    rating: '⭐⭐⭐⭐',
    images: [`https://via.placeholder.com/300x200?text=Product+${index + 1}`]
  }));

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [deliveryLocation, setDeliveryLocation] = useState('Elgin 60120');
  const [isUpdateLocationOpen, setIsUpdateLocationOpen] = useState(false);
  const [newZip, setNewZip] = useState('');
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const productRefs = useRef([]);

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory);

  const scrollProducts = (row, direction) => {
    const ref = productRefs.current[row];
    if (ref) ref.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const footerLinkStyle = { color: 'white', textDecoration: 'none', fontSize: '14px' };
  const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' };
  const searchInputStyle = { padding: '6px 10px', height: '36px', borderRadius: '8px', border: '1px solid #ccc' };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff', minHeight: '100vh' }}>
      {/* NAVIGATION */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', color: 'white', flexWrap: 'wrap' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <div style={{ fontSize: '12px', marginLeft: '1rem' }}>
          <span>Delivering to {deliveryLocation}</span><br />
          <span onClick={() => setIsUpdateLocationOpen(true)} style={{ textDecoration: 'underline', cursor: 'pointer' }}>Update location</span>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '15px', alignItems: 'center' }}>
          <input type="text" placeholder="Search" style={searchInputStyle} />
          <span onClick={() => setIsSignInModalOpen(true)} style={navLinkStyle}>Sign In</span>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒</a>
        </div>
      </header>

      {/* SUB NAVIGATION */}
      <div style={{ backgroundColor: '#00509e', padding: '0.5rem 1rem', display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap' }}>
        {categories.map((cat) => (
          <span key={cat} onClick={() => setSelectedCategory(cat)} style={{ color: 'white', cursor: 'pointer', fontSize: '14px', marginRight: '15px' }}>{cat}</span>
        ))}
      </div>

      {/* PRODUCT ROWS */}
      {[0, 1, 2].map((row) => (
        <div key={row} style={{ display: 'flex', gap: '10px', padding: '1rem' }}>
          <button onClick={() => scrollProducts(row, 'left')}>&lt;</button>
          <div ref={(el) => productRefs.current[row] = el} style={{ overflowX: 'auto', display: 'flex', gap: '20px', flex: 1 }}>
            {filteredProducts.slice(row * 4, row * 4 + 4).map(product => (
              <div key={product.id} onClick={() => handleProductClick(product)} style={{ backgroundColor: 'white', borderRadius: '8px', padding: '1rem', minWidth: '250px', cursor: 'pointer' }}>
                <img src={product.images[0]} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                <h4>{product.name}</h4>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
          <button onClick={() => scrollProducts(row, 'right')}>&gt;</button>
        </div>
      ))}

      {/* PRODUCT MODAL */}
      {showModal && selectedProduct && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }} onClick={() => setShowModal(false)}>
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', width: '80%', maxWidth: '600px' }} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.images[0]} alt={selectedProduct.name} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <p>{selectedProduct.price}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

      {/* UPDATE LOCATION MODAL */}
      {isUpdateLocationOpen && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <form onSubmit={(e) => { e.preventDefault(); setDeliveryLocation(newZip); setNewZip(''); setIsUpdateLocationOpen(false); }} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px' }}>
            <h3>Update Location</h3>
            <input value={newZip} onChange={(e) => setNewZip(e.target.value)} placeholder="Enter Zip" style={{ marginRight: '1rem' }} />
            <button type="submit">Update</button>
          </form>
        </div>
      )}

      {/* SIGN IN MODAL */}
      {isSignInModalOpen && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <form onSubmit={(e) => { e.preventDefault(); setIsSignInModalOpen(false); }} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px' }}>
            <h3>Sign In</h3>
            <input value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} placeholder="Enter Email" style={{ marginRight: '1rem' }} />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
          <div>
            <h4>About</h4>
            <a href="/about" style={footerLinkStyle}>About Us</a><br />
            <a href="/contact" style={footerLinkStyle}>Contact</a>
          </div>
          <div>
            <h4>Support</h4>
            <a href="/faq" style={footerLinkStyle}>FAQ</a><br />
            <a href="/help" style={footerLinkStyle}>Help Center</a>
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














 


































































































































