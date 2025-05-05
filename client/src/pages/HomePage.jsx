// HomePage.jsx (restored header, subnav, and product rows)
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

  const allProducts = Array.from({ length: 48 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    category: categories[index % categories.length],
    price: `$${10 + index}`,
    rating: '⭐⭐⭐⭐',
    images: Array.from({ length: 5 }, (_, i) => `https://via.placeholder.com/300x200?text=Product+${index + 1}+View+${i + 1}`)
  }));

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const productRef0 = useRef(null);
  const productRef1 = useRef(null);
  const productRef2 = useRef(null);
  const productRef3 = useRef(null);
  const productRef4 = useRef(null);
  const productRef5 = useRef(null);
  
  const productRefs = [
    productRef0,
    productRef1,
    productRef2,
    productRef3,
    productRef4,
    productRef5
  ];
  

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter((p) => p.category === selectedCategory);

  const scrollProducts = (row, direction) => {
    if (productRefs[row]?.current) {
      productRefs[row].current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setActiveImage(product.images[0]);
    setShowModal(true);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', color: 'white' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <div style={{ fontSize: '12px', marginLeft: '1rem' }}>
          <span>Delivering to Elgin 60120</span><br />
          <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Update location</span>
        </div>
        <div style={{ display: 'flex', gap: '15px', marginLeft: '2rem' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/shop" style={navLinkStyle}>Shop</a>
          <a href="/vendor-signup" style={navLinkStyle}>Become a Vendor</a>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input placeholder="Search products..." style={searchInputStyle} />
          <input placeholder="Zip Code" style={zipInputStyle} />
          <button style={searchButtonStyle}>Find Vendors</button>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒</a>
        </div>
      </header>

      {/* Sub Nav Bar */}
      <div style={{ backgroundColor: '#00509e', padding: '0.5rem 1rem', display: 'flex', gap: '15px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
        {categories.map((cat) => (
          <span key={cat} onClick={() => setSelectedCategory(cat)} style={{ color: 'white', cursor: 'pointer', fontSize: '14px' }}>{cat}</span>
        ))}
      </div>

      {/* Product Rows */}
      {[0, 1, 2, 3, 4, 5].map((row) => (
        <div key={row} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '1rem 2rem' }}>
          <button onClick={() => scrollProducts(row, 'left')} style={arrowButtonStyle}>&lt;</button>
          <div ref={productRefs[row]} style={{ overflowX: 'auto', display: 'flex', gap: '2rem', scrollBehavior: 'smooth' }}>
            {filteredProducts.slice(row * 4, row * 4 + 4).map((product) => (
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

      {/* Modal */}
      {showModal && selectedProduct && (
        <div style={modalStyle} onClick={() => setShowModal(false)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {selectedProduct.images.map((img, i) => (
                <img key={i} src={img} onClick={() => setActiveImage(img)} style={{ width: '100px', borderRadius: '6px', border: activeImage === img ? '3px solid #003366' : '1px solid #ccc', cursor: 'pointer' }} />
              ))}
            </div>
            <div style={{ flex: 2 }}>
              <img src={activeImage} alt="main" style={{ width: '100%', borderRadius: '8px' }} />
              <p style={{ marginTop: '1rem' }}>{selectedProduct.name}</p>
              <button onClick={() => setShowModal(false)} style={{ marginTop: '1rem' }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' };
const searchInputStyle = { width: '250px', height: '40px', padding: '6px 10px', borderRadius: '8px' };
const zipInputStyle = { width: '100px', height: '40px', padding: '6px 10px', borderRadius: '8px' };
const searchButtonStyle = { height: '40px', backgroundColor: '#ccc', borderRadius: '8px', padding: '0 15px', cursor: 'pointer' };
const arrowButtonStyle = { backgroundColor: '#003366', color: 'white', fontSize: '2rem', padding: '0.5rem', borderRadius: '50%', border: 'none' };
const productCardStyle = { minWidth: '250px', backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', textAlign: 'center', cursor: 'pointer' };
const productImageStyle = { width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' };
const productNameStyle = { fontSize: '1.1rem', margin: '10px 0' };
const productRatingStyle = { color: '#666' };
const productPriceStyle = { fontWeight: 'bold', color: '#333' };
const modalStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 };
const modalContentStyle = { backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', display: 'flex', gap: '2rem', width: '90%', maxWidth: '960px' };

export default HomePage;































































































































