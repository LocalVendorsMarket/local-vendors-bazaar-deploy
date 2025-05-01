import React, { useState } from 'react';
import logo from '../assets/logo.png';

const ShopPage = ({ cart, setCart }) => {
  const categories = [
    'All', 'Women’s Apparel', 'Jewelry', 'Makeup', 'Clothing', 'Art', 'Home Goods', 'Restaurants', 'Services',
    'Best Sellers', "Today's Deals", 'New Releases', 'Gift Ideas', 'Wedding Planners',
    'Wedding Photographers', 'Henna Tattoos', 'Bakeries', 'Coffee Shops', 'Florists', 'Furniture',
    'Grocery Stores', 'Health & Beauty', 'Local Events', 'Mobile Repair', 'Music & Bands',
    'Party Supplies', 'Pet Services', 'Photobooth Rentals', 'Real Estate Agents', 'Tutors',
    'Yoga Studios', 'Landscaping', 'Auto Repair', 'Travel Agents', 'Accountants'
  ];

  const products = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    category: categories[(index % categories.length) + 1],
    price: `$${(index + 1) * 5}`,
    rating: '⭐⭐⭐⭐',
    reviews: 20 + index,
    sold: 50 - index,
    stock: 100 - index * 2,
    image: `https://via.placeholder.com/300x200?text=Product+${index + 1}`
  }));

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Nav Bar */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
          <img src={logo} alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>LocalVendorsBazaar</span>
        </a>
        <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/vendor-signup" style={navLinkStyle}>Become a Vendor</a>
          <a href="/signin" style={navLinkStyle}>Sign In</a>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px', filter: 'brightness(0) invert(1)' }}>🛒 {cart?.length > 0 && `(${cart.length})`}</a>
        </nav>
      </header>

      {/* Main Layout */}
      <div style={{ display: 'flex', padding: '1rem' }}>
        {/* Sidebar Filters */}
        <aside style={{ width: '250px', backgroundColor: '#ffffff', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h3 style={{ marginBottom: '1rem', color: '#003366' }}>Filters</h3>
          <div style={{ marginBottom: '1rem' }}>
            <label>Category:</label>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', marginTop: '5px' }}>
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Price Range:</label>
            <input type="text" placeholder="$10 - $50" style={filterInputStyle} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Star Rating:</label>
            <select style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', marginTop: '5px' }}>
              <option>4 stars & up</option>
              <option>3 stars & up</option>
              <option>2 stars & up</option>
            </select>
          </div>
          <div>
            <label>Zip Code:</label>
            <input type="text" placeholder="Enter Zip Code" style={filterInputStyle} />
          </div>
        </aside>

        {/* Product Grid */}
        <main style={{ flex: 1, marginLeft: '1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
            {filteredProducts.map(product => (
              <div key={product.id} style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px' }} />
                <h4 style={{ color: '#003366', margin: '10px 0 5px' }}>{product.name}</h4>
                <p style={{ margin: '0 0 5px' }}>{product.price}</p>
                <p style={{ margin: '0 0 5px' }}>{product.rating} ({product.reviews} reviews)</p>
                <p style={{ margin: '0 0 5px', fontSize: '12px', color: 'gray' }}>{product.sold} bought this month</p>
                <p style={{ marginBottom: '10px', fontSize: '12px', color: 'gray' }}>Only {product.stock} left in stock</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button style={buttonStyle}>Learn More</button>
                  <button style={buttonStyle}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', textAlign: 'center', marginTop: '2rem' }}>
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
        <p style={{ marginTop: '1rem', fontSize: '12px' }}>
          © {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px' };
const buttonStyle = { backgroundColor: '#003366', color: 'white', padding: '0.5rem 1rem', borderRadius: '6px', border: 'none', cursor: 'pointer' };
const filterInputStyle = { width: '100%', padding: '0.5rem', borderRadius: '6px', marginTop: '5px', border: '1px solid #ccc' };
const footerLinkStyle = { color: 'white', textDecoration: 'none', fontSize: '14px' };

export default ShopPage;



























































