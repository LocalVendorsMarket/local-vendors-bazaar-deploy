import React, { useState } from 'react';
import SignInModal from '../components/SignInModal'; // Import the modal

const ShopPage = ({ cart, setCart }) => {
  const categories = ['All', 'Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods', 'Services', 'Restaurants', 'Retail Stores'];

  const products = [
    {
      id: 1,
      name: 'Local Honey',
      image: 'https://via.placeholder.com/300x200?text=Local+Honey',
      price: '$12',
      rating: '⭐⭐⭐⭐⭐',
    },
    {
      id: 2,
      name: 'Handmade Necklace',
      image: 'https://via.placeholder.com/300x200?text=Handmade+Necklace',
      price: '$25',
      rating: '⭐⭐⭐⭐',
    },
    {
      id: 3,
      name: 'Organic T-Shirt',
      image: 'https://via.placeholder.com/300x200?text=Organic+T-Shirt',
      price: '$18',
      rating: '⭐⭐⭐⭐',
    },
    {
      id: 4,
      name: 'Custom Artwork',
      image: 'https://via.placeholder.com/300x200?text=Custom+Artwork',
      price: '$80',
      rating: '⭐⭐⭐⭐⭐',
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSignInOpen, setIsSignInOpen] = useState(false); // Manage Sign In Modal

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const handleLearnMore = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleOpenSignIn = () => {
    setIsSignInOpen(true);
  };

  const handleCloseSignIn = () => {
    setIsSignInOpen(false);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      {/* Nav Bar */}
      <header style={{
        backgroundColor: '#2b9348',
        padding: '0.5rem 1rem',
        color: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/assets/logo.png" alt="Local Vendors Bazaar" style={{ width: '50px', marginRight: '10px' }} />
        </div>

        <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
          <input
            type="text"
            placeholder="Search products..."
            style={{
              flexGrow: 1,
              padding: '8px 12px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '14px',
            }}
          />
          <input
            type="text"
            placeholder="Zip Code"
            style={{
              marginLeft: '10px',
              padding: '8px 12px',
              width: '100px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '14px',
            }}
          />
          <button style={{
            marginLeft: '10px',
            padding: '8px 16px',
            backgroundColor: '#40916c',
            color: '#fff',
            borderRadius: '8px',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}>
            Search
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          <button
            onClick={handleOpenSignIn}
            style={{
              backgroundColor: 'transparent',
              border: '2px solid #fff',
              color: '#fff',
              padding: '6px 12px',
              marginRight: '15px',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Sign In
          </button>
          <a href="/cart" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none', fontSize: '20px' }}>
            🛒 {cart.length > 0 && `(${cart.length})`}
          </a>
        </div>
      </header>

      {/* Category Filter */}
      <div style={{ backgroundColor: '#edf6f9', padding: '0.5rem', display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
        {categories.map((category) => (
          <button
            key={category}
            style={{
              backgroundColor: '#52b788',
              color: '#fff',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '20px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Hero */}
      <main style={{ flexGrow: 1, textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ color: '#2b9348', fontSize: '2.5rem', marginBottom: '1rem' }}>Shop Local and Save Big! 🎉</h1>
        <p style={{ color: '#555', fontSize: '1.2rem', marginBottom: '2rem' }}>
          Discover amazing products from your favorite local vendors.
        </p>

        {/* Products */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
          {products.map((product) => (
            <div key={product.id} style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1rem' }}>
                <h2 style={{ color: '#1f7a3f', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{product.name}</h2>
                <div style={{ color: '#ffb703', marginBottom: '0.5rem' }}>{product.rating}</div>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333' }}>{product.price}</p>
                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                  <button
                    onClick={() => handleLearnMore(product)}
                    style={{ backgroundColor: '#2b9348', color: '#fff', padding: '8px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
                  >
                    Learn More
                  </button>
                  <button
                    onClick={() => handleAddToCart(product)}
                    style={{ backgroundColor: '#f77f00', color: '#fff', padding: '8px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#2b9348', color: '#fff', padding: '1.5rem', textAlign: 'center', marginTop: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          <div>Get to Know Us</div>
          <div>Make Money with Us</div>
          <div>Help Center</div>
        </div>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>

      {/* Modals */}
      {selectedProduct && (
        <div onClick={handleCloseModal} style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '500px' }}>
            <h2 style={{ color: '#1f7a3f', marginBottom: '1rem' }}>{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
            <p style={{ marginBottom: '1rem' }}>{selectedProduct.rating}</p>
            <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}>{selectedProduct.price}</p>
            <button
              onClick={handleCloseModal}
              style={{ marginTop: '1rem', padding: '10px 20px', backgroundColor: '#2b9348', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isSignInOpen && <SignInModal onClose={handleCloseSignIn} />}
    </div>
  );
};

export default ShopPage;


























