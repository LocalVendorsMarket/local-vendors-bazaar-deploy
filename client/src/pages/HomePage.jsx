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

  const allProducts = [
    {
      id: 1,
      name: 'Local Honey',
      category: 'Food',
      price: '$12',
      rating: '⭐⭐⭐⭐⭐',
      images: [
        'https://via.placeholder.com/300x200?text=Local+Honey',
        'https://via.placeholder.com/300x200?text=Raw+Honey+Jar'
      ]
    },
    {
      id: 2,
      name: 'Handmade Necklace',
      category: 'Jewelry',
      price: '$25',
      rating: '⭐⭐⭐⭐',
      images: [
        'https://via.placeholder.com/300x200?text=Necklace',
        'https://via.placeholder.com/300x200?text=Closeup+Necklace'
      ]
    },
    {
      id: 3,
      name: 'Organic T-Shirt',
      category: 'Clothing',
      price: '$18',
      rating: '⭐⭐⭐⭐',
      images: [
        'https://via.placeholder.com/300x200?text=Organic+T-Shirt',
        'https://via.placeholder.com/300x200?text=Back+of+T-Shirt'
      ]
    }
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
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [activeTab, setActiveTab] = useState('description');

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

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setActiveImage(product.images[0]);
    setShowModal(true);
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

  const footerLinkStyle = { color: 'white', textDecoration: 'none', fontSize: '14px' };

  return (
    <div>
      {/* Your existing layout remains unchanged */}

      {/* Product Detail Modal */}
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
                  style={{
                    width: '100px',
                    height: '80px',
                    objectFit: 'cover',
                    border: activeImage === img ? '3px solid #003366' : '1px solid #ccc',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                />
              ))}
            </div>
            <div style={{ flex: '2', display: 'flex', flexDirection: 'column' }}>
              <img
                src={activeImage}
                alt={selectedProduct.name}
                style={{
                  width: '100%',
                  maxHeight: '300px',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  transition: 'transform 0.3s',
                  cursor: 'zoom-in'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
              />
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <span onClick={() => setActiveTab('description')} style={{ cursor: 'pointer', fontWeight: activeTab === 'description' ? 'bold' : 'normal' }}>
                  Description
                </span>
                <span onClick={() => setActiveTab('reviews')} style={{ cursor: 'pointer', fontWeight: activeTab === 'reviews' ? 'bold' : 'normal' }}>
                  Reviews
                </span>
              </div>
              <div style={{ marginTop: '1rem', fontSize: '0.95rem', color: '#333' }}>
                {activeTab === 'description' ? (
                  <p>This locally-sourced product is one of our bestsellers. Customers love its quality and value.</p>
                ) : (
                  <p>⭐️⭐️⭐️⭐️⭐️ – "Amazing product! Would definitely buy again."</p>
                )}
              </div>
              <div style={{ marginTop: '2rem' }}>
                <button style={{ backgroundColor: '#003366', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', marginRight: '1rem' }}>
                  Add to Cart
                </button>
                <button onClick={() => setShowModal(false)} style={{ backgroundColor: '#ccc', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const modalStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 };
const modalContentStyle = { backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '960px', display: 'flex', gap: '2rem' };

export default HomePage;





















































































































