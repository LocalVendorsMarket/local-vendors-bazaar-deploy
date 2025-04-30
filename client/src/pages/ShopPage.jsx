import React, { useState } from 'react';
import logo from '../assets/logo.png';

const ShopPage = ({ cart, setCart }) => {
  const categories = [
    'All', 'Women’s Apparel', 'Jewelry', 'Makeup', 'Clothing', 'Art', 'Home Goods', 'Restaurants', 'Services'
  ];

  const allProducts = [
    { id: 1, name: 'Gold Earrings', category: 'Jewelry', price: '$25', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Earrings' },
    { id: 2, name: 'Silk Scarf', category: 'Women’s Apparel', price: '$30', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Scarf' },
    { id: 3, name: 'Foundation', category: 'Makeup', price: '$18', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Foundation' },
    { id: 4, name: 'Custom Painting', category: 'Art', price: '$80', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Painting' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>

      {/* Nav Bar */}
      <header style={{ backgroundColor: '#003366', color: 'white', padding: '1rem', display: 'flex', alignItems: 'center' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
          <img src={logo} alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>LocalVendorsBazaar</span>
        </a>
        <nav style={{ marginLeft: 'auto', display: 'flex', gap: '20px' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/shop" style={navLinkStyle}>Shop</a>
          <a href="/vendor-signup" style={navLinkStyle}>Become a Vendor</a>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px' }}>🛒</a>
        </nav>
      </header>

      {/* Banner */}
      <div style={{ backgroundColor: '#00509e', padding: '2rem', textAlign: 'center', color: 'white' }}>
        <h2 style={{ margin: 0 }}>Explore Local Gems and Handmade Finds</h2>
      </div>

      {/* Main Layout */}
      <div style={{ display: 'flex', padding: '2rem' }}>
        {/* Sidebar Filters */}
        <aside style={{ width: '200px', marginRight: '2rem' }}>
          <h3 style={{ color: '#003366' }}>Categories</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {categories.map((cat) => (
              <li key={cat} style={{ marginBottom: '0.5rem', cursor: 'pointer', color: selectedCategory === cat ? '#00509e' : '#333' }}
                  onClick={() => setSelectedCategory(cat)}>
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* Products Grid */}
        <section style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
          {filteredProducts.map(product => (
            <div key={product.id} style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
              <h4 style={{ margin: '1rem 0 0.5rem', color: '#003366' }}>{product.name}</h4>
              <p style={{ margin: 0 }}>{product.price} · {product.rating}</p>
              <button style={buttonStyle}>Learn More</button>
            </div>
          ))}
        </section>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px' }}>
          <div>
            <h3>Get to Know Us</h3>
            <a href="/about" style={footerLinkStyle}>About Us</a><br />
            <a href="/blog" style={footerLinkStyle}>Blog</a><br />
            <a href="/faq" style={footerLinkStyle}>FAQ</a><br />
            <a href="/testimonials" style={footerLinkStyle}>Testimonials</a>
          </div>
          <div>
            <h3>Make Money with Us</h3>
            <a href="/vendor-signup" style={footerLinkStyle}>Become a Vendor</a><br />
            <a href="/advertise" style={footerLinkStyle}>Advertise Products</a>
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
        <p style={{ marginTop: '1rem', fontSize: '12px' }}>
          © {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'none' };
const footerLinkStyle = { color: 'white', textDecoration: 'none', fontSize: '14px' };
const buttonStyle = { backgroundColor: '#00509e', color: 'white', padding: '0.5rem 1rem', marginTop: '1rem', border: 'none', borderRadius: '8px', cursor: 'pointer' };

export default ShopPage;























































