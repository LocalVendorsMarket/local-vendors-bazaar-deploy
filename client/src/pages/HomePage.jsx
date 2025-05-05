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
    if (direction === 'left') {
      productRefs[row].current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      productRefs[row].current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setActiveImage(product.images[0]);
    setShowModal(true);
  };

  const handleVendorZipSearch = () => {
    alert(`Searching vendors near ${vendorZip}`);
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

  const footerLinkStyle = { color: 'white', textDecoration: 'none', fontSize: '14px' };
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
  const modalContentStyle = { backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '960px', display: 'flex', gap: '2rem' };

  return (
    <div>
      {/* Update Location Modal */}
      {isUpdateLocationOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2 style={{ color: '#003366' }}>Update Location</h2>
            <form onSubmit={handleUpdateLocationSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="text"
                value={newZip}
                onChange={(e) => setNewZip(e.target.value)}
                placeholder="Enter new Zip Code"
                required
              />
              <button type="submit" style={searchButtonStyle}>Update</button>
              <button type="button" onClick={() => setIsUpdateLocationOpen(false)} style={searchButtonStyle}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {/* Sign In Modal */}
      {isSignInModalOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2 style={{ color: '#003366' }}>{isNewCustomer ? 'Create Account' : 'Sign In'}</h2>
            <form onSubmit={handleSignInSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {isNewCustomer && <input type="text" placeholder="Full Name" required />}
              <input type="email" placeholder="Email" value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} required />
              {isNewCustomer && <input type="password" placeholder="Create Password" required />}
              <button type="submit" style={searchButtonStyle}>{isNewCustomer ? 'Create your account' : 'Continue'}</button>
            </form>
            {!isNewCustomer && (
              <p onClick={() => setIsNewCustomer(true)} style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#007185', textDecoration: 'underline', cursor: 'pointer' }}>
                New customer? Start here.
              </p>
            )}
            <button onClick={() => { setIsSignInModalOpen(false); setIsNewCustomer(false); }} style={{ ...searchButtonStyle, backgroundColor: '#ccc', color: '#000' }}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;

 


































































































































