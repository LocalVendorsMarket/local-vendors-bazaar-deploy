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
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [activeTab, setActiveTab] = useState('description');

const productRef0 = useRef(null);
const productRef1 = useRef(null);
const productRef2 = useRef(null);
const productRef3 = useRef(null);
const productRef4 = useRef(null);
const productRef5 = useRef(null);
const productRefs = [productRef0, productRef1, productRef2, productRef3, productRef4, productRef5];


  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter((product) => product.category === selectedCategory);

  const scrollProducts = (row, direction) => {
    const ref = productRefs[row];
    if (ref && ref.current) {
      ref.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setActiveImage(product.images[0]);
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

  const handleVendorZipSearch = () => {
    alert(`Searching vendors near ${vendorZip}`);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', color: 'white' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <div style={{ fontSize: '12px', marginLeft: '1rem' }}>
          <span>Delivering to {deliveryLocation}</span><br />
          <span onClick={() => setIsUpdateLocationOpen(true)} style={{ textDecoration: 'underline', cursor: 'pointer' }}>Update location</span>
        </div>
        <div style={{ display: 'flex', gap: '15px', marginLeft: '2rem' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/shop" style={navLinkStyle}>Shop</a>
          <a href="/vendor-signup" style={navLinkStyle}>Become a Vendor</a>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <select value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)} style={searchSelectStyle}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search products..." style={searchInputStyle} />
          <input type="text" value={vendorZip} onChange={(e) => setVendorZip(e.target.value)} placeholder="Zip Code" style={zipInputStyle} />
          <button onClick={handleVendorZipSearch} style={searchButtonStyle}>Find Vendors</button>
          <span onClick={() => setIsSignInModalOpen(true)} style={navLinkStyle}>Sign In</span>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒</a>
        </div>
      </header>

      <div style={{ backgroundColor: '#00509e', padding: '0.5rem 1rem', display: 'flex', gap: '15px', overflowX: 'auto', whiteSpace: 'nowrap', scrollbarWidth: 'none' }}>
        {categories.map((cat) => (
          <span key={cat} onClick={() => setSelectedCategory(cat)} style={{ color: 'white', cursor: 'pointer', fontSize: '14px', paddingRight: '10px' }}>{cat}</span>
        ))}
      </div>

      {[0, 1, 2, 3, 4, 5].map((row) => (
        <div key={row} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '1rem 2rem' }}>
          <button onClick={() => scrollProducts(row, 'left')} style={arrowButtonStyle}>&lt;</button>
          <div ref={productRefs[row]} style={{ overflowX: 'auto', display: 'flex', gap: '2rem', scrollBehavior: 'smooth' }}>
            {filteredProducts.slice(row * 4, row * 4 + 4).map(product => (
              <div key={product.id} onClick={() => handleProductClick(product)} style={productCardStyle}>
                <img src={product.images[0]} alt={product.name} style={productImageStyle} />
                <h2 style={productNameStyle}>{product.name}</h2>
                <p style={productRatingStyle}>{product.rating}</p>
                <p style={productPriceStyle}>{product.price}</p>
              </div>
            ))}
          </div>
          <button onClick={() => scrollProducts(row, 'right')} style={arrowButtonStyle}>&gt;</button>
        </div>
      ))}

      {showModal && selectedProduct && (
        <div style={modalStyle} onClick={() => setShowModal(false)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              {selectedProduct.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setActiveImage(img)}
                  alt="thumbnail"
                  style={{ width: '100px', height: '80px', objectFit: 'cover', border: activeImage === img ? '3px solid #003366' : '1px solid #ccc', borderRadius: '6px', cursor: 'pointer' }}
                />
              ))}
            </div>
            <div style={{ flex: '2', display: 'flex', flexDirection: 'column' }}>
              <img src={activeImage} alt={selectedProduct.name} style={{ width: '100%', maxHeight: '300px', objectFit: 'contain', borderRadius: '8px' }} />
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <span onClick={() => setActiveTab('description')} style={{ cursor: 'pointer', fontWeight: activeTab === 'description' ? 'bold' : 'normal' }}>Description</span>
                <span onClick={() => setActiveTab('reviews')} style={{ cursor: 'pointer', fontWeight: activeTab === 'reviews' ? 'bold' : 'normal' }}>Reviews</span>
              </div>
              <div style={{ marginTop: '1rem' }}>
                {activeTab === 'description' ? (
                  <p>This locally-sourced product is one of our bestsellers. Customers love its quality and value.</p>
                ) : (
                  <p>⭐️⭐️⭐️⭐️⭐️ – "Amazing product! Would definitely buy again."</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {isUpdateLocationOpen && (
        <div style={modalStyle} onClick={() => setIsUpdateLocationOpen(false)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <h2>Update Delivery Location</h2>
            <form onSubmit={handleUpdateLocationSubmit}>
              <input type="text" value={newZip} onChange={(e) => setNewZip(e.target.value)} placeholder="Enter new zip code" style={{ padding: '10px', borderRadius: '6px', width: '200px' }} />
              <div>
                <button type="submit" style={{ marginRight: '10px' }}>Update</button>
                <button onClick={() => setIsUpdateLocationOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isSignInModalOpen && (
        <div style={modalStyle} onClick={() => setIsSignInModalOpen(false)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <h2>{isNewCustomer ? 'Sign Up' : 'Sign In'}</h2>
            <form onSubmit={handleSignInSubmit}>
              <input type="email" value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} placeholder="Enter your email" required style={{ padding: '10px', width: '250px' }} />
              <div>
                <button type="submit" style={{ marginRight: '10px' }}>{isNewCustomer ? 'Sign Up' : 'Sign In'}</button>
                <button onClick={() => setIsNewCustomer(!isNewCustomer)} style={{ marginRight: '10px' }}>{isNewCustomer ? 'Back to Sign In' : 'New Customer?'}</button>
                <button onClick={() => setIsSignInModalOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' };
const searchSelectStyle = { padding: '6px', height: '40px', borderRadius: '8px', fontSize: '14px', width: '80px' };
const searchInputStyle = { width: '250px', padding: '6px 10px', height: '40px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' };
const zipInputStyle = { width: '120px', padding: '6px 10px', height: '40px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' };
const searchButtonStyle = { backgroundColor: '#d3d3d3', height: '40px', borderRadius: '8px', padding: '0 15px', border: 'none', fontSize: '14px', cursor: 'pointer' };
const arrowButtonStyle = { backgroundColor: '#003366', color: 'white', border: 'none', fontSize: '2rem', padding: '0.5rem 1rem', borderRadius: '50%', cursor: 'pointer' };
const productCardStyle = { minWidth: '250px', backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center', cursor: 'pointer' };
const productImageStyle = { width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' };
const productNameStyle = { color: '#003366', fontSize: '1.2rem', margin: '10px 0' };
const productRatingStyle = { color: '#666', marginBottom: '8px' };
const productPriceStyle = { fontWeight: 'bold', color: '#333', marginBottom: '12px' };
const modalStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 };
const modalContentStyle = { backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '960px', display: 'flex', flexDirection: 'column', gap: '1rem' };

export default HomePage;

















 


































































































































