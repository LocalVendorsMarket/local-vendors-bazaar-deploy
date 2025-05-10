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
    setSignInEmail('');
    setSignInName('');
    setSignInPhone('');
  };

  const handleVendorZipSearch = () => {
    alert(`Searching vendors near ${vendorZip}`);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff', minHeight: '100vh' }}>
      {/* -- NAV BAR HERE (same as before) -- */}

      {/* Update Location Modal */}
      {isUpdateLocationOpen && (
        <div style={modalStyle} onClick={() => setIsUpdateLocationOpen(false)}>
          <div style={{ ...modalContentStyle, maxWidth: '400px' }} onClick={(e) => e.stopPropagation()}>
            <h2>Update Delivery Location</h2>
            <form onSubmit={handleUpdateLocationSubmit}>
              <input
                type="text"
                value={newZip}
                onChange={(e) => setNewZip(e.target.value)}
                placeholder="Enter new zip code"
                style={{ padding: '10px', borderRadius: '6px', width: '100%', fontSize: '16px', marginBottom: '10px' }}
              />
              <div>
                <button type="submit" style={{ marginRight: '10px', padding: '0.5rem 1rem', backgroundColor: '#003366', color: 'white', borderRadius: '6px', cursor: 'pointer' }}>Update</button>
                <button onClick={() => setIsUpdateLocationOpen(false)} style={{ padding: '0.5rem 1rem', backgroundColor: '#ccc', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Sign In Modal */}
      {isSignInModalOpen && (
        <div style={modalStyle} onClick={() => setIsSignInModalOpen(false)}>
          <div style={{ ...modalContentStyle, maxWidth: '400px' }} onClick={(e) => e.stopPropagation()}>
            <h2>{isNewCustomer ? 'Sign Up' : 'Sign In'}</h2>
            <form onSubmit={handleSignInSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {isNewCustomer && (
                <>
                  <input
                    type="text"
                    value={signInName}
                    onChange={(e) => setSignInName(e.target.value)}
                    placeholder="Name or Company"
                    required
                    style={{ padding: '10px', borderRadius: '6px', fontSize: '16px' }}
                  />
                  <input
                    type="tel"
                    value={signInPhone}
                    onChange={(e) => setSignInPhone(e.target.value)}
                    placeholder="Phone Number"
                    required
                    style={{ padding: '10px', borderRadius: '6px', fontSize: '16px' }}
                  />
                </>
              )}
              <input
                type="email"
                value={signInEmail}
                onChange={(e) => setSignInEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={{ padding: '10px', borderRadius: '6px', fontSize: '16px' }}
              />
              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#003366', color: 'white', borderRadius: '6px', cursor: 'pointer' }}>
                  {isNewCustomer ? 'Sign Up' : 'Sign In'}
                </button>
                <button type="button" onClick={() => setIsNewCustomer(!isNewCustomer)} style={{ padding: '0.5rem 1rem', backgroundColor: '#ccc', borderRadius: '6px', cursor: 'pointer' }}>
                  {isNewCustomer ? 'Back to Sign In' : 'New Customer?'}
                </button>
                <button type="button" onClick={() => setIsSignInModalOpen(false)} style={{ padding: '0.5rem 1rem', backgroundColor: '#aaa', borderRadius: '6px', cursor: 'pointer' }}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* -- PRODUCT ROWS AND FOOTER HERE (already implemented) -- */}
    </div>
  );
};

const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' };
const searchSelectStyle = { padding: '6px', height: '40px', borderRadius: '8px', fontSize: '14px', width: '80px' };
const searchInputStyle = { width: '250px', padding: '6px 10px', height: '40px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' };
const zipInputStyle = { width: '120px', padding: '6px 10px', height: '40px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' };
const searchButtonStyle = { backgroundColor: '#d3d3d3', height: '40px', borderRadius: '8px', padding: '0 15px', border: 'none', fontSize: '14px', cursor: 'pointer' };
const modalStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 };
const modalContentStyle = { backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', width: '90%' };

export default HomePage;































 


































































































































