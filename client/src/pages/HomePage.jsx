import React, { useState, useRef } from 'react';
import logo from '../assets/logo.png';

const HomePage = ({ cart, setCart }) => {
  const categories = [
    'All', 'Women’s Apparel', 'Jewelry', 'Makeup', 'Clothing', 'Art', 'Home Goods', 'Restaurants', 'Services',
    'Best Sellers', "Today's Deals", 'New Releases', 'Gift Ideas', 'Wedding Planners',
    'Wedding Photographers', 'Henna Tattoos', 'Bakeries', 'Coffee Shops', 'Florists', 'Furniture',
    'Grocery Stores', 'Health & Beauty', 'Local Events', 'Mobile Repair', 'Music & Bands',
    'Party Supplies', 'Pet Services', 'Photobooth Rentals', 'Real Estate Agents', 'Tutors',
    'Yoga Studios', 'Landscaping', 'Auto Repair', 'Travel Agents', 'Accountants'
  ];


  const allProducts = [
    { id: 1, name: 'Embroidered Kurti', category: 'Women's Apparel', price: '$30', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Kurti' },
    { id: 2, name: 'Gold Plated Earrings', category: 'Jewelry', price: '$22', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Earrings' },
    { id: 3, name: 'Organic Lip Balm', category: 'Makeup', price: '$12', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Lip+Balm' },
    { id: 4, name: 'Handwoven Shawl', category: 'Women's Apparel', price: '$45', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Shawl' },
    { id: 5, name: 'Natural Foundation', category: 'Makeup', price: '$20', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Foundation' },
    { id: 6, name: 'Handcrafted Ring', category: 'Jewelry', price: '$28', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Ring' }
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

  const handleVendorZipSearch = (e) => {
    e.preventDefault();
    alert(`Searching vendors near ${vendorZip}`);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Existing Header and Nav Code Here */}

      {/* Highlighted Categories Section */}
      <section style={{ padding: '2rem' }}>
        <h2 style={{ color: '#003366', marginBottom: '1rem' }}>Trending in Women’s Fashion</h2>
        <div ref={productRefs[0]} style={{ overflowX: 'auto', display: 'flex', gap: '2rem' }}>
          {allProducts.filter(p => p.category === "Women's Apparel").map(product => (
            <div key={product.id} style={{ minWidth: '250px', backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
              <h3>{product.name}</h3>
              <p>{product.price} · {product.rating}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '2rem' }}>
        <h2 style={{ color: '#003366', marginBottom: '1rem' }}>Jewelry & Accessories</h2>
        <div ref={productRefs[1]} style={{ overflowX: 'auto', display: 'flex', gap: '2rem' }}>
          {allProducts.filter(p => p.category === 'Jewelry').map(product => (
            <div key={product.id} style={{ minWidth: '250px', backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
              <h3>{product.name}</h3>
              <p>{product.price} · {product.rating}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '2rem' }}>
        <h2 style={{ color: '#003366', marginBottom: '1rem' }}>Beauty & Skincare</h2>
        <div ref={productRefs[2]} style={{ overflowX: 'auto', display: 'flex', gap: '2rem' }}>
          {allProducts.filter(p => p.category === 'Makeup').map(product => (
            <div key={product.id} style={{ minWidth: '250px', backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
              <h3>{product.name}</h3>
              <p>{product.price} · {product.rating}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Existing Footer Code Here */}

    </div>
  );
};

export default HomePage;








































































