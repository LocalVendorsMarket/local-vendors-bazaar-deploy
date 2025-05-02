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

  const departments = ['Beauty', 'Books', 'Clothing', 'Electronics', 'Furniture', 'Grocery', 'Jewelry', 'Sports'];

  const allProducts = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    category: categories[i % categories.length],
    price: `$${(i + 1) * 5}`,
    rating: '⭐⭐⭐⭐',
    reviews: 15 + i,
    sold: 30 + i,
    remaining: 100 - i * 2,
    image: `https://via.placeholder.com/300x200?text=Product+${i + 1}`,
  }));

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [vendorZip, setVendorZip] = useState('');

  const productRefs = useRef(null);

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  const scrollProducts = (direction) => {
    productRefs.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', color: 'white' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <div style={{ marginLeft: '2rem', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/vendor-signup" style={navLinkStyle}>Become a Vendor</a>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            style={{ width: '400px', padding: '8px 40px 8px 12px', borderRadius: '8px', fontSize: '14px' }}
          />
          <span style={{ position: 'relative', right: '32px', fontSize: '18px', cursor: 'pointer' }}>🔍</span>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒</a>
        </div>
      </header>

      {/* Sub Nav Bar */}
      <div style={{ backgroundColor: '#00509e', padding: '0.5rem', display: 'flex', gap: '20px', overflowX: 'auto' }}>
        {categories.map(cat => (
          <span key={cat} onClick={() => setSelectedCategory(cat)} style={{ color: 'white', cursor: 'pointer', fontSize: '14px', whiteSpace: 'nowrap' }}>{cat}</span>
        ))}
      </div>

      {/* Filter & Product Section */}
      <div style={{ display: 'flex', padding: '2rem' }}>
        {/* Filters */}
        <aside style={{ width: '250px', marginRight: '2rem' }}>
          <h3 style={{ color: '#003366' }}>Filter By</h3>
          <label style={{ fontWeight: 'bold', display: 'block', margin: '1rem 0 0.5rem' }}>Search by Department</label>
          <select style={{ width: '100%', padding: '0.5rem' }}>
            {departments.map(dep => <option key={dep}>{dep}</option>)}
          </select>
          <label style={{ fontWeight: 'bold', display: 'block', margin: '1rem 0 0.5rem' }}>Price</label>
          <div>
            <label><input type="checkbox" /> Under $25</label><br />
            <label><input type="checkbox" /> $25 - $50</label><br />
            <label><input type="checkbox" /> $50 - $100</label><br />
            <label><input type="checkbox" /> Over $100</label>
          </div>
          <label style={{ fontWeight: 'bold', display: 'block', margin: '1rem 0 0.5rem' }}>Zip Code</label>
          <input type="text" placeholder="Enter Zip" style={{ width: '100%', padding: '0.5rem' }} />
          <label style={{ fontWeight: 'bold', display: 'block', margin: '1rem 0 0.5rem' }}>Rating</label>
          <div>
            <label><input type="checkbox" /> ⭐⭐⭐⭐</label><br />
            <label><input type="checkbox" /> ⭐⭐⭐</label><br />
            <label><input type="checkbox" /> ⭐⭐</label><br />
            <label><input type="checkbox" /> ⭐</label>
          </div>
          <button style={{ marginTop: '1rem', backgroundColor: '#003366', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>Search</button>
        </aside>

        {/* Products */}
        <section style={{ flexGrow: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <button onClick={() => scrollProducts('left')} style={arrowButtonStyle}>&lt;</button>
            <h2 style={{ color: '#003366' }}>Featured Products</h2>
            <button onClick={() => scrollProducts('right')} style={arrowButtonStyle}>&gt;</button>
          </div>
          <div ref={productRefs} style={{ display: 'flex', overflowX: 'auto', gap: '2rem', scrollBehavior: 'smooth' }}>
            {filteredProducts.map(product => (
              <div key={product.id} style={productCardStyle}>
                <img src={product.image} alt={product.name} style={productImageStyle} />
                <h2 style={productNameStyle}>{product.name}</h2>
                <p>{product.rating} · <a href="#" style={{ textDecoration: 'underline', color: '#003366', fontSize: '13px' }}>{product.reviews} reviews</a></p>
                <p>{product.price}</p>
                <p style={{ fontSize: '13px', color: '#003366' }}>{product.sold} sold this month</p>
                <p style={{ fontSize: '13px', color: '#003366' }}>{product.remaining} left</p>
                <button style={productButtonStyle}>Add to Cart</button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '12px' }}>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' };
const productCardStyle = { minWidth: '250px', backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' };
const productImageStyle = { width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' };
const productNameStyle = { color: '#003366', fontSize: '1.2rem', margin: '10px 0' };
const productButtonStyle = { backgroundColor: '#003366', color: 'white', padding: '8px 12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' };
const arrowButtonStyle = { backgroundColor: '#003366', color: 'white', border: 'none', fontSize: '2rem', padding: '0.5rem 1rem', borderRadius: '50%', cursor: 'pointer' };

export default HomePage;




















































































