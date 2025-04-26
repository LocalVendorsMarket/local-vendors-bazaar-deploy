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

      {/* Subcategory Buttons */}
      <div style={{ backgroundColor: '#d8f3dc', padding: '0.5rem', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)} style={{ padding: '6px 12px', backgroundColor: selectedCategory === category ? '#40916c' : '#2b9348', color: '#fff', border: 'none', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}>{category}</button>
        ))}
      </div>

      {/* Products Grid */}
      <div style={{ padding: '2rem', display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', flexGrow: 1 }}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
            <h2 style={{ marginTop: '10px', color: '#1f7a3f', fontSize: '1.2rem', textAlign: 'center' }}>{product.name}</h2>
            <p style={{ color: '#666', marginBottom: '8px', textAlign: 'center' }}>{product.rating}</p>
            <p style={{ fontWeight: 'bold', color: '#333', marginBottom: '12px' }}>{product.price}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{ padding: '8px 12px', backgroundColor: '#2b9348', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => setSelectedProduct(product)}>Learn More</button>
              <button style={{ padding: '8px 12px', backgroundColor: '#f9c74f', color: '#000', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      {/* Sign In Modal and Update Location Modal will be next here... (continue) */}

    </div>
  );
};

export default ShopPage;





































