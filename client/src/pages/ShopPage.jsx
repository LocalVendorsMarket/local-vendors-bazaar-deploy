import React, { useState } from 'react';
import logo from '../assets/logo.png';

const ShopPage = ({ cart, setCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [zipCode, setZipCode] = useState('');

  const categories = ['All', 'Women’s Apparel', 'Jewelry', 'Makeup', 'Clothing', 'Art', 'Furniture', 'Services', 'Food', 'Grocery'];
  const departments = ['Women', 'Men', 'Kids', 'Home', 'Beauty', 'Health', 'Local Services'];
  const priceRanges = ['$0-$25', '$25-$50', '$50-$100', '$100+'];
  const starRatings = [4, 3, 2, 1];

  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    image: `https://via.placeholder.com/300x200?text=Product+${i + 1}`,
    price: `$${(i + 1) * 5}`,
    rating: '⭐⭐⭐⭐',
    sold: Math.floor(Math.random() * 100),
    stock: Math.floor(Math.random() * 20) + 1,
  }));

  const filteredProducts = products.filter(p =>
    (selectedCategory === 'All' || p.category === selectedCategory) &&
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff' }}>
      {/* Nav Bar */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', color: 'white' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
          <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>Local Vendors Bazaar</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ccc', width: '250px' }}
          />
          <a href="/" style={navLink}>Home</a>
          <a href="/signin" style={navLink}>Sign In</a>
          <a href="/cart" style={{ ...navLink, fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒 {cart?.length > 0 && `(${cart.length})`}</a>
        </div>
      </header>

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <aside style={{ width: '250px', padding: '1rem', backgroundColor: '#f0f4f8' }}>
          <h3>Filter By</h3>
          <div>
            <label style={labelStyle}>Category</label>
            <select style={selectStyle} value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Department</label>
            {departments.map(dep => (
              <div key={dep}><input type="checkbox" /> {dep}</div>
            ))}
          </div>
          <div>
            <label style={labelStyle}>Price</label>
            {priceRanges.map(price => (
              <div key={price}><input type="checkbox" /> {price}</div>
            ))}
          </div>
          <div>
            <label style={labelStyle}>Rating</label>
            {starRatings.map(star => (
              <div key={star}><input type="checkbox" /> {'⭐'.repeat(star)}</div>
            ))}
          </div>
          <div>
            <label style={labelStyle}>Zip Code</label>
            <input type="text" placeholder="Enter Zip" value={zipCode} onChange={(e) => setZipCode(e.target.value)} style={{ ...selectStyle, width: '100%' }} />
          </div>
        </aside>

        {/* Products Grid */}
        <main style={{ flex: 1, padding: '1rem' }}>
          <h2 style={{ color: '#003366' }}>Explore Products</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
            {filteredProducts.map(product => (
              <div key={product.id} style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
                <a href={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
                  <h4 style={{ color: '#003366', margin: '10px 0' }}>{product.name}</h4>
                  <p style={{ fontSize: '14px' }}>{product.price}</p>
                  <p style={{ fontSize: '13px' }}>{product.rating} · {product.sold} sold this month</p>
                  <p style={{ fontSize: '13px' }}>{product.stock} left</p>
                </a>
                <button style={addToCartStyle}>Add to Cart</button>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', textAlign: 'center', marginTop: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
          <div>
            <h4>Get to Know Us</h4>
            <a href="/about" style={footerLinkStyle}>About Us</a><br />
            <a href="/faq" style={footerLinkStyle}>FAQ</a><br />
            <a href="/blog" style={footerLinkStyle}>Blog</a><br />
            <a href="/testimonials" style={footerLinkStyle}>Testimonials</a>
          </div>
          <div>
            <h4>Support</h4>
            <a href="/help" style={footerLinkStyle}>Help Center</a><br />
            <a href="/returns" style={footerLinkStyle}>Returns</a><br />
            <a href="/shipping" style={footerLinkStyle}>Shipping Info</a>
          </div>
          <div>
            <h4>Stay Connected</h4>
            <a href="/newsletter" style={footerLinkStyle}>Newsletter</a><br />
            <a href="/contact" style={footerLinkStyle}>Contact Us</a><br />
            <a href="/socials" style={footerLinkStyle}>Social Media</a>
          </div>
        </div>
        <p style={{ fontSize: '12px', marginTop: '1rem' }}>© {new Date().getFullYear()} Local Vendors Bazaar</p>
      </footer>
    </div>
  );
};

const navLink = { color: 'white', textDecoration: 'none', fontWeight: 'bold' };
const labelStyle = { marginTop: '1rem', fontWeight: 'bold', display: 'block' };
const selectStyle = { width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #ccc' };
const addToCartStyle = { backgroundColor: '#003366', color: 'white', padding: '8px 12px', border: 'none', borderRadius: '8px', marginTop: '8px', cursor: 'pointer' };
const footerLinkStyle = { color: 'white', textDecoration: 'none', fontSize: '14px' };

export default ShopPage;



































































