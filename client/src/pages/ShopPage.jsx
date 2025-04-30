import React, { useState } from 'react';
import logo from '../assets/logo.png';

const ShopPage = ({ cart, setCart }) => {
  const categories = [
    'All', 'Women’s Apparel', 'Jewelry', 'Makeup', 'Clothing', 'Art', 'Home Goods', 'Restaurants', 'Services',
    'Best Sellers', "Today's Deals", 'New Releases', 'Gift Ideas', 'Wedding Planners', 'Furniture',
    'Pet Services', 'Florists', 'Health & Beauty'
  ];

  const allProducts = [
    { id: 1, name: 'Embroidered Kurti', category: 'Women’s Apparel', price: '$30', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Kurti' },
    { id: 2, name: 'Gold Plated Earrings', category: 'Jewelry', price: '$22', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Earrings' },
    { id: 3, name: 'Organic Lip Balm', category: 'Makeup', price: '$12', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Lip+Balm' },
    { id: 4, name: 'Handwoven Shawl', category: 'Women’s Apparel', price: '$45', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Shawl' },
    { id: 5, name: 'Natural Foundation', category: 'Makeup', price: '$20', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Foundation' },
    { id: 6, name: 'Handcrafted Ring', category: 'Jewelry', price: '$28', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Ring' },
    { id: 7, name: 'Dining Table Set', category: 'Furniture', price: '$250', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Table+Set' },
    { id: 8, name: 'Dog Grooming Kit', category: 'Pet Services', price: '$35', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Pet+Grooming' },
    { id: 9, name: 'Fresh Flower Bouquet', category: 'Florists', price: '$18', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Bouquet' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff', minHeight: '100vh' }}>

      {/* Nav Bar */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', color: 'white' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center' }}><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/vendor-signup" style={navLinkStyle}>Become a Vendor</a>
          <a href="/signin" style={navLinkStyle}>Sign In</a>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒</a>
        </nav>
      </header>

      {/* Sub Nav Bar */}
      <div style={{ backgroundColor: '#00509e', padding: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
        {categories.map((cat) => (
          <span key={cat} onClick={() => setSelectedCategory(cat)} style={{ color: 'white', cursor: 'pointer', fontSize: '14px' }}>{cat}</span>
        ))}
      </div>

      {/* Filters & Products */}
      <div style={{ display: 'flex', padding: '2rem' }}>
        {/* Sidebar Filters */}
        <aside style={{ width: '250px', marginRight: '2rem' }}>
          <h3>Filters</h3>
          <label>Category:</label>
          <select style={filterInput} value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map((cat) => <option key={cat}>{cat}</option>)}
          </select>
          <label>Price Range:</label>
          <select style={filterInput}>
            <option>All</option>
            <option>Under $25</option>
            <option>$25 to $50</option>
            <option>$50 to $100</option>
            <option>Over $100</option>
          </select>
          <label>Rating:</label>
          <select style={filterInput}>
            <option>All</option>
            <option>⭐⭐⭐⭐⭐</option>
            <option>⭐⭐⭐⭐</option>
            <option>⭐⭐⭐</option>
          </select>
        </aside>

        {/* Product Grid */}
        <main style={{ flexGrow: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {filteredProducts.map(product => (
              <div key={product.id} style={productCardStyle}>
                <img src={product.image} alt={product.name} style={productImageStyle} />
                <h2 style={productNameStyle}>{product.name}</h2>
                <p style={productRatingStyle}>{product.rating}</p>
                <p style={productPriceStyle}>{product.price}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button style={productButtonStyle}>Learn More</button>
                  <button style={productButtonStyle}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px' }}>
          <div>
            <h3>Get to Know Us</h3>
            <a href="/about" style={footerLinkStyle}>About Us</a><br />
            <a href="/blog" style={footerLinkStyle}>Blog</a><br />
            <a href="/faq" style={footerLinkStyle}>FAQ</a><br />
            <a href="/testimonials" style={footerLinkStyle}>Testimonials</a><br />
            <a href="/careers" style={footerLinkStyle}>Careers</a>
          </div>
          <div>
            <h3>Make Money with Us</h3>
            <a href="/vendor-signup" style={footerLinkStyle}>Become a Vendor</a><br />
            <a href="/advertise" style={footerLinkStyle}>Advertise Products</a><br />
            <a href="/advertise" style={footerLinkStyle}>Advertise Services</a><br />
            <a href="/advertise" style={footerLinkStyle}>Advertise Events</a>
          </div>
          <div>
            <h3>Buyer Resources</h3>
            <a href="/orders" style={footerLinkStyle}>Your Orders</a><br />
            <a href="/shipping" style={footerLinkStyle}>Shipping Info</a><br />
            <a href="/returns" style={footerLinkStyle}>Returns</a><br />
            <a href="/help" style={footerLinkStyle}>Help Center</a>
          </div>
          <div>
            <h3>Stay Connected</h3>
            <a href="/contact" style={footerLinkStyle}>Contact Us</a><br />
            <a href="/newsletter" style={footerLinkStyle}>Newsletter Signup</a><br />
            <a href="/socials" style={footerLinkStyle}>Follow Us</a>
          </div>
        </div>
        <p style={{ marginTop: '1rem', fontSize: '12px' }}>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Styles
const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' };
const footerLinkStyle = { color: 'white', textDecoration: 'none', fontSize: '14px' };
const filterInput = { width: '100%', padding: '8px', marginBottom: '1rem', borderRadius: '6px', border: '1px solid #ccc' };
const productCardStyle = { backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' };
const productImageStyle = { width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' };
const productNameStyle = { color: '#003366', fontSize: '1.2rem', margin: '10px 0' };
const productRatingStyle = { color: '#666', marginBottom: '8px' };
const productPriceStyle = { fontWeight: 'bold', color: '#333', marginBottom: '12px' };
const productButtonStyle = { backgroundColor: '#003366', color: 'white', padding: '8px 12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' };

export default ShopPage;
























































