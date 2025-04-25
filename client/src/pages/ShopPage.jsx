import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShopPage = ({ cart, setCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const categories = ['All', 'New Releases', 'Clothing', 'Jewelry', 'Cosmetics', 'Groceries', 'Services', 'Restaurants', 'Retail Stores'];

  const products = [
    { id: 1, name: 'Local Honey', image: 'https://via.placeholder.com/300x200?text=Local+Honey', price: '$12', rating: '⭐⭐⭐⭐⭐', category: 'Groceries', description: 'Pure organic local honey.' },
    { id: 2, name: 'Handmade Necklace', image: 'https://via.placeholder.com/300x200?text=Handmade+Necklace', price: '$25', rating: '⭐⭐⭐⭐', category: 'Jewelry', description: 'Beautiful artisan handmade necklace.' },
    { id: 3, name: 'Organic T-Shirt', image: 'https://via.placeholder.com/300x200?text=Organic+T-Shirt', price: '$18', rating: '⭐⭐⭐⭐', category: 'Clothing', description: 'Soft, eco-friendly cotton t-shirt.' },
    { id: 4, name: 'Custom Artwork', image: 'https://via.placeholder.com/300x200?text=Custom+Artwork', price: '$80', rating: '⭐⭐⭐⭐⭐', category: 'Art', description: 'Unique custom paintings by local artists.' },
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" style={{ fontFamily: 'sans-serif' }}>
      {/* Main Navigation */}
      <header
        style={{
          backgroundColor: '#2b9348',
          padding: '1rem',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {/* Logo */}
        <Link to="/">
          <img
            src="/assets/logo.png"
            alt="Local Vendors Bazaar Logo"
            style={{ width: '60px', marginRight: '10px' }}
          />
        </Link>

        {/* Search Bar */}
        <div style={{ flex: 1, marginLeft: '20px', marginRight: '20px', display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search products..."
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '14px',
            }}
          />
          <input
            type="text"
            placeholder="Zip Code"
            style={{
              width: '100px',
              marginLeft: '10px',
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '14px',
            }}
          />
          <button
            style={{
              marginLeft: '10px',
              padding: '10px 16px',
              backgroundColor: '#40916c',
              color: '#fff',
              borderRadius: '8px',
              border: 'none',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Search
          </button>
        </div>

        {/* Sign In and Cart */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            onClick={() => setIsSignInOpen(true)}
            style={{
              marginRight: '15px',
              backgroundColor: 'transparent',
              color: '#fff',
              fontSize: '14px',
              border: '1px solid #fff',
              padding: '6px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Sign In
          </button>
          <Link to="/cart" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>
            🛒 {cart.length > 0 && `(${cart.length})`}
          </Link>
        </div>
      </header>

      {/* Category Navigation */}
      <nav
        style={{
          backgroundColor: '#40916c',
          padding: '0.5rem',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              margin: '5px',
              padding: '8px 14px',
              backgroundColor: selectedCategory === category ? '#2b9348' : '#52b788',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Products */}
      <main className="flex-grow p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-green-700 mb-2 text-center">{product.name}</h2>
                <div className="text-center text-yellow-400 mb-2 text-lg">{product.rating}</div>
                <p className="text-lg font-bold text-gray-700 text-center mb-6">{product.price}</p>
                <div className="flex justify-center gap-4 mt-auto">
                  <button
                    onClick={() => alert(`${product.name}: ${product.description}`)}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                  >
                    Learn More
                  </button>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer with Placeholder Links */}
      <footer
        style={{
          backgroundColor: '#f5f5f5',
          padding: '2rem',
          textAlign: 'center',
          color: '#666',
          marginTop: 'auto',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '1rem' }}>
          <div><strong>Get to Know Us</strong><br />About Us<br />Careers<br />Blog</div>
          <div><strong>Make Money with Us</strong><br />Become a Vendor<br />Advertise Your Product<br />Vendor Dashboard</div>
          <div><strong>Help</strong><br />Contact Us<br />FAQ<br />Returns</div>
        </div>
        <p>&copy; {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>

      {/* Sign In Modal */}
      {isSignInOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
          }}
          onClick={() => setIsSignInOpen(false)}
        >
          <div
            style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '12px',
              width: '90%',
              maxWidth: '400px',
              textAlign: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ color: '#2b9348', marginBottom: '1rem' }}>Sign In or Create Account</h2>
            <input
              type="text"
              placeholder="Enter mobile number or email"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '1rem',
                borderRadius: '8px',
                border: '1px solid #ccc',
              }}
            />
            <button
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#40916c',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                marginBottom: '1rem',
              }}
            >
              Continue
            </button>
            <div style={{ fontSize: '12px', color: '#555' }}>
              By continuing, you agree to Local Vendors Bazaar's Conditions of Use and Privacy Notice.
            </div>
            <div style={{ marginTop: '1rem', fontSize: '12px', color: '#40916c', textDecoration: 'underline' }}>
              Need help? | Buying for work?
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;

























