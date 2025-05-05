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
        'https://via.placeholder.com/300x200?text=Raw+Honey+Jar',
        'https://via.placeholder.com/300x200?text=Side+View+Honey',
        'https://via.placeholder.com/300x200?text=Top+View+Honey',
        'https://via.placeholder.com/300x200?text=Open+Jar+Honey'
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
        'https://via.placeholder.com/300x200?text=Closeup+Necklace',
        'https://via.placeholder.com/300x200?text=Necklace+Box',
        'https://via.placeholder.com/300x200?text=On+Model',
        'https://via.placeholder.com/300x200?text=Angle+View'
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
        'https://via.placeholder.com/300x200?text=Back+of+T-Shirt',
        'https://via.placeholder.com/300x200?text=Side+View+T-Shirt',
        'https://via.placeholder.com/300x200?text=Folded+T-Shirt',
        'https://via.placeholder.com/300x200?text=Closeup+Fabric'
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

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff', minHeight: '100vh' }}>
      {/* Nav Bar */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', color: 'white' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <div style={{ fontSize: '12px', marginLeft: '1rem' }}>
          <span>Delivering to {deliveryLocation}</span><br />
          <span onClick={() => setIsUpdateLocationOpen(true)} style={{ textDecoration: 'underline', cursor: 'pointer' }}>Update location</span>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search..." style={{ padding: '8px', borderRadius: '6px' }} />
          <button onClick={() => alert(`Searching vendors near ${vendorZip}`)} style={{ padding: '8px 12px', borderRadius: '6px', backgroundColor: '#007bff', color: '#fff' }}>Search</button>
          <a href="/cart" style={{ color: 'white', fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒</a>
        </div>
      </header>

      {/* Product Rows */}
      {[0, 1, 2].map((row) => (
        <div key={row} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '1rem 2rem' }}>
          <button onClick={() => scrollProducts(row, 'left')}>&lt;</button>
          <div ref={productRefs[row]} style={{ overflowX: 'auto', display: 'flex', gap: '2rem', scrollBehavior: 'smooth' }}>
            {filteredProducts.map(product => (
              <div key={product.id} onClick={() => handleProductClick(product)} style={{ minWidth: '250px', backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
                <img src={product.images[0]} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
                <h2 style={{ fontSize: '1.2rem', color: '#003366' }}>{product.name}</h2>
                <p>{product.rating}</p>
                <p style={{ fontWeight: 'bold' }}>{product.price}</p>
              </div>
            ))}
          </div>
          <button onClick={() => scrollProducts(row, 'right')}>&gt;</button>
        </div>
      ))}

      {/* Product Modal */}
      {showModal && selectedProduct && (
        <div style={modalStyle} onClick={() => setShowModal(false)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {selectedProduct.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setActiveImage(img)}
                  alt="thumbnail"
                  style={{ width: '80px', height: '60px', objectFit: 'cover', cursor: 'pointer', border: activeImage === img ? '2px solid #003366' : '1px solid #ccc' }}
                />
              ))}
            </div>
            <div style={{ flex: '2', padding: '0 1rem' }}>
              <img
                src={activeImage}
                alt={selectedProduct.name}
                style={{ width: '100%', maxHeight: '300px', objectFit: 'contain', borderRadius: '8px', marginBottom: '1rem' }}
              />
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.rating}</p>
              <p>{selectedProduct.price}</p>
              <div>
                <p>{activeTab === 'description' ? 'This locally-sourced product is a bestseller loved by our community.' : '⭐️⭐️⭐️⭐️⭐️ – "Amazing product! Would definitely buy again."'}</p>
              </div>
              <div>
                <button style={{ backgroundColor: '#003366', color: 'white', padding: '10px 20px', borderRadius: '6px', marginRight: '1rem' }}>Add to Cart</button>
                <button onClick={() => setShowModal(false)} style={{ padding: '10px 20px', backgroundColor: '#ccc', borderRadius: '6px' }}>Close</button>
              </div>
            </div>
            <div style={{ flex: '1', backgroundColor: '#f8f8f8', padding: '1rem', borderRadius: '8px' }}>
              <h3>Purchase Options</h3>
              <p>Vendor: Local Seller</p>
              <p>Shipping: Free</p>
              <p>Delivery: 3–5 business days</p>
              <button style={{ marginTop: '1rem', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold' }}>Buy Now</button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
        <p>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

const modalStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 };
const modalContentStyle = { backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', width: '95%', maxWidth: '1200px', display: 'flex', gap: '2rem' };

export default HomePage;
























































































































