import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';

const ShopPage = ({ cart, setCart }) => {
  const categories = [
    'All', 'Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods', 'Restaurants', 'Services',
    'Best Sellers', "Today's Deals", 'New Releases', 'Gift Ideas', 'Wedding Planners',
    'Wedding Photographers', 'Bakeries', 'Coffee Shops', 'Florists', 'Furniture'
  ];

  const allProducts = [
    { id: 1, name: 'Local Honey', category: 'Food', price: '$12', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Local+Honey' },
    { id: 2, name: 'Handmade Necklace', category: 'Jewelry', price: '$25', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Necklace' },
    { id: 3, name: 'Organic T-Shirt', category: 'Clothing', price: '$18', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Organic+T-Shirt' },
    { id: 4, name: 'Custom Artwork', category: 'Art', price: '$80', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Artwork' },
    { id: 5, name: 'Gourmet Pizza', category: 'Restaurants', price: '$15', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Pizza' },
    { id: 6, name: 'Home Repair', category: 'Services', price: '$50/hr', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Home+Repair' },
    { id: 7, name: 'Coffee Beans', category: 'Coffee Shops', price: '$14', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Coffee+Beans' },
    { id: 8, name: 'Fresh Flowers', category: 'Florists', price: '$20', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Flowers' },
    { id: 9, name: 'Wedding Photography', category: 'Wedding Photographers', price: '$1000', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Photography' },
    { id: 10, name: 'Furniture Sale', category: 'Furniture', price: '$299', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Furniture' },
    { id: 11, name: 'Handmade Soap', category: 'Health & Beauty', price: '$8', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Soap' },
    { id: 12, name: 'Organic Coffee', category: 'Coffee Shops', price: '$16', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Organic+Coffee' },
    { id: 13, name: 'Pet Grooming', category: 'Pet Services', price: '$40', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Pet+Grooming' },
    { id: 14, name: 'Real Estate Consultation', category: 'Real Estate Agents', price: '$200', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Real+Estate' },
    { id: 15, name: 'Yoga Classes', category: 'Yoga Studios', price: '$25', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Yoga' },
    { id: 16, name: 'Mobile Phone Repair', category: 'Mobile Repair', price: '$60', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Phone+Repair' },
    { id: 17, name: 'Party Balloons', category: 'Party Supplies', price: '$15', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Balloons' },
    { id: 18, name: 'Photography Booth', category: 'Photobooth Rentals', price: '$500', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Photo+Booth' },
    { id: 19, name: 'Wedding Cake', category: 'Bakeries', price: '$300', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Wedding+Cake' },
    { id: 20, name: 'Band Performance', category: 'Music & Bands', price: '$800', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Live+Band' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
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

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', color: 'white' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <div style={{ marginLeft: '2rem', display: 'flex', gap: '15px' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/faq" style={navLinkStyle}>FAQ</a>
          <a href="/blog" style={navLinkStyle}>Blog</a>
          <a href="/testimonials" style={navLinkStyle}>Testimonials</a>
          <a href="/contact" style={navLinkStyle}>Contact</a>
          <a href="/shop" style={navLinkStyle}>Shop</a>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '15px' }}>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒</a>
        </div>
      </header>

      {/* Subcategories */}
      <div style={{ backgroundColor: '#00509e', padding: '0.5rem', display: 'flex', overflowX: 'auto', gap: '10px' }}>
        {categories.map((cat) => (
          <span key={cat} onClick={() => setSelectedCategory(cat)} style={{ color: 'white', cursor: 'pointer', fontSize: '14px' }}>
            {cat}
          </span>
        ))}
      </div>

      {/* Product Rows */}
      {[0, 1, 2].map((row) => (
        <div key={row} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '1rem 2rem' }}>
          <button onClick={() => scrollProducts(row, 'left')} style={arrowButtonStyle}>&lt;</button>
          <div ref={productRefs[row]} style={{ overflowX: 'auto', display: 'flex', gap: '2rem', scrollBehavior: 'smooth' }}>
            {filteredProducts.map(product => (
              <div key={product.id} style={productCardStyle}>
                <img src={product.image} alt={product.name} style={productImageStyle} />
                <h2 style={productNameStyle}>{product.name}</h2>
                <p style={productRatingStyle}>{product.rating}</p>
                <p style={productPriceStyle}>{product.price}</p>
                <button style={productButtonStyle}>Add to Cart</button>
              </div>
            ))}
          </div>
          <button onClick={() => scrollProducts(row, 'right')} style={arrowButtonStyle}>&gt;</button>
        </div>
      ))}

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
        <p>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' };
const arrowButtonStyle = { backgroundColor: '#003366', color: 'white', border: 'none', fontSize: '2rem', padding: '0.5rem 1rem', borderRadius: '50%', cursor: 'pointer' };
const productCardStyle = { minWidth: '250px', backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' };
const productImageStyle = { width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' };
const productNameStyle = { color: '#003366', fontSize: '1.2rem', margin: '10px 0' };
const productRatingStyle = { color: '#666', marginBottom: '8px' };
const productPriceStyle = { fontWeight: 'bold', color: '#333', marginBottom: '12px' };
const productButtonStyle = { backgroundColor: '#003366', color: 'white', padding: '8px 12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' };

export default ShopPage;

















































