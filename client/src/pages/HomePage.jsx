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
  const [searchDepartment, setSearchDepartment] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [rating, setRating] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productRefs = [useRef(null), useRef(null), useRef(null)];

  const filteredProducts = allProducts.filter(product => {
    return (
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      (searchDepartment === 'All' || product.category === searchDepartment)
    );
  });

  const scrollProducts = (row, direction) => {
    if (direction === 'left') {
      productRefs[row].current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      productRefs[row].current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', color: 'white' }}>
        <a href="/"><img src="/assets/logo.png" alt="Logo" style={{ width: '50px' }} /></a>
        <div style={{ fontSize: '12px', marginLeft: '1rem' }}>
          <span>Delivering to Elgin 60120</span><br />
          <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Update location</span>
        </div>
        <div style={{ display: 'flex', gap: '15px', marginLeft: '2rem' }}>
          <a href="/" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}>Home</a>
          <a href="/shop" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}>Shop</a>
          <a href="/vendor-signup" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}>Become a Vendor</a>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="text" placeholder="Search products..." style={{ width: '250px', padding: '6px 10px', height: '40px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' }} />
          <button style={{ backgroundColor: '#d3d3d3', height: '40px', borderRadius: '8px', padding: '0 15px', border: 'none', fontSize: '14px', cursor: 'pointer' }}>Find Vendors</button>
          <span style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}>Sign In</span>
          <a href="/cart" style={{ color: 'white', fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒</a>
        </div>
      </header>

      {/* Sub Nav Bar */}
      <div style={{ backgroundColor: '#00509e', padding: '0.5rem', display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap', gap: '12px' }}>
        {categories.map((cat) => (
          <span key={cat} onClick={() => setSelectedCategory(cat)} style={{ color: 'white', cursor: 'pointer', fontSize: '14px' }}>{cat}</span>
        ))}
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', margin: '1rem 0' }}>
        <select value={searchDepartment} onChange={(e) => setSearchDepartment(e.target.value)} style={{ padding: '0.5rem', borderRadius: '8px' }}>
          <option value="All">All Departments</option>
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
        <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} style={{ padding: '0.5rem', borderRadius: '8px' }}>
          <option value="All">All Prices</option>
          <option value="Under $25">Under $25</option>
          <option value="$25-$50">$25-$50</option>
          <option value="$50+">$50+</option>
        </select>
        <select value={rating} onChange={(e) => setRating(e.target.value)} style={{ padding: '0.5rem', borderRadius: '8px' }}>
          <option value="All">All Ratings</option>
          <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
          <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
          <option value="⭐⭐⭐">⭐⭐⭐</option>
        </select>
      </div>

      {/* Product Rows */}
      <h2 style={{ textAlign: 'center', marginTop: '1rem' }}>Featured Products</h2>
      {[0, 1, 2].map((row) => (
        <div key={row} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '1rem' }}>
          <button onClick={() => scrollProducts(row, 'left')}>&lt;</button>
          <div ref={productRefs[row]} style={{ display: 'flex', overflowX: 'auto', gap: '1rem' }}>
            {filteredProducts.map(product => (
              <div key={product.id} onClick={() => handleProductClick(product)} style={{ cursor: 'pointer', minWidth: '220px', backgroundColor: 'white', borderRadius: '8px', padding: '1rem', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%' }} />
                <h3>{product.name}</h3>
                <p>{product.rating}</p>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
          <button onClick={() => scrollProducts(row, 'right')}>&gt;</button>
        </div>
      ))}

      {/* Product Detail Modal */}
      {showModal && selectedProduct && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 }} onClick={() => setShowModal(false)}>
          <div style={{ backgroundColor: 'white', display: 'flex', width: '90%', height: '80%', borderRadius: '12px', padding: '2rem' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ width: '15%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <img src={selectedProduct.image} alt="thumb" style={{ width: '100%', border: '1px solid #ccc', borderRadius: '8px' }} />
              <img src={selectedProduct.image} alt="thumb" style={{ width: '100%', border: '1px solid #ccc', borderRadius: '8px' }} />
              <img src={selectedProduct.image} alt="thumb" style={{ width: '100%', border: '1px solid #ccc', borderRadius: '8px' }} />
            </div>
            <div style={{ width: '35%', padding: '0 2rem' }}>
              <img src={selectedProduct.image} alt="Main" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            </div>
            <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.rating}</p>
              <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{selectedProduct.price}</p>
              <p>Sold last month: 52 units</p>
              <button style={{ backgroundColor: '#003366', color: 'white', padding: '10px 20px', borderRadius: '8px', fontSize: '16px' }}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
        <p>Local Vendors Bazaar © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default HomePage;































































































