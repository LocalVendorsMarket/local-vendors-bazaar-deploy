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

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff', minHeight: '100vh' }}>
      <div style={{ display: 'flex' }}>
        {/* Sidebar Filter */}
        <aside style={{ width: '250px', backgroundColor: '#f0f0f0', padding: '1rem' }}>
          <h3>Filter by Department</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {categories.map((cat) => (
              <li key={cat} style={{ marginBottom: '10px', cursor: 'pointer', fontWeight: selectedCategory === cat ? 'bold' : 'normal' }} onClick={() => setSelectedCategory(cat)}>
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content Placeholder */}
        <main style={{ flexGrow: 1, padding: '1rem' }}>
          {/* Your homepage content goes here */}
          <h2>Homepage Content Area</h2>
        </main>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
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

const footerLinkStyle = { color: 'white', textDecoration: 'none', fontSize: '14px' };

export default HomePage;
















































































































