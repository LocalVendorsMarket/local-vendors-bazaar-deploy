import React, { useState } from 'react';
import logo from '../assets/logo.png';

const ShopPage = ({ cart, setCart }) => {
  const categories = ['All', 'Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods', 'Restaurants', 'Services'];

  const allProducts = [
    { id: 1, name: 'Local Honey', category: 'Food', price: '$12', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Local+Honey' },
    { id: 2, name: 'Handmade Necklace', category: 'Jewelry', price: '$25', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Necklace' },
    { id: 3, name: 'Organic T-Shirt', category: 'Clothing', price: '$18', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Organic+T-Shirt' },
    { id: 4, name: 'Custom Artwork', category: 'Art', price: '$80', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Artwork' },
    { id: 5, name: 'Gourmet Pizza', category: 'Restaurants', price: '$15', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Pizza' },
    { id: 6, name: 'Home Repair Service', category: 'Services', price: '$50/hr', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Home+Repair' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isUpdateLocationOpen, setIsUpdateLocationOpen] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');
  const [isNewCustomer, setIsNewCustomer] = useState(false);
  const [deliveryLocation, setDeliveryLocation] = useState('Elgin 60120');
  const [newZip, setNewZip] = useState('');

  const filteredProducts = selectedCategory === 'All' ? allProducts : allProducts.filter((product) => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    console.log('Signing in with:', signInEmail);
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

  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Top Nav */}
      <header style={{ backgroundColor: '#2b9348', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', color: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a href="/">
            <img src={logo} alt="Logo" style={{ width: '50px' }} />
          </a>
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: '12px', color: '#fff' }}>
            <span>Delivering to {deliveryLocation}</span>
            <span onClick={() => setIsUpdateLocationOpen(true)} style={{ color: '#aad576', textDecoration: 'underline', fontSize: '12px', marginTop: '2px', cursor: 'pointer' }}>Update Location</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px', flexGrow: 1, marginLeft: '20px' }}>
          <input type="text" placeholder="Search products..." style={{ flexGrow: 1, padding: '6px 10px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' }} />
          <input type="text" placeholder="Zip Code" style={{ padding: '6px 10px', width: '100px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px' }} />
          <button style={{ padding: '6px 12px', backgroundColor: '#40916c', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Search</button>
          <button onClick={() => setIsSignInModalOpen(true)} style={{ padding: '6px 12px', backgroundColor: '#40916c', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Sign In</button>
          <a href="/cart" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>
            <span style={{ filter: 'brightness(0) invert(1)' }}>🛒</span> {cart.length > 0 && `(${cart.length})`}
          </a>
        </div>
      </header>

      {/* Subcategories, Products, Modals and Footer continue below unchanged... */}

    </div>
  );
};

const footerLinkStyle = {
  color: '#555',
  textDecoration: 'none',
  fontSize: '14px',
};

export default ShopPage;




































