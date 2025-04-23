import React from 'react';

const ShopPage = ({ cart, setCart }) => {
  const categories = ['Food', 'Jewelry', 'Clothing', 'Art', 'Home Goods'];

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

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" style={{ fontFamily: 'sans-serif' }}>
      {/* Navigation Bar */}
      <header
        style={{
          backgroundColor: '#2b9348',
          padding: '1rem',
          color: '#fff',
          width: '100%',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
  src="/assets/logo.png"
  alt="Local Vendors Bazaar Logo"
  style={{ width: '150px', marginBottom: '1rem' }}
/>

            style={{ height: '40px', marginRight: '10px' }}
          /
          <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>LocalVendorsBazaar</span>
        </div>

        <nav style={{ marginRight: '1rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="/" style={navStyle}>Home</a>
          <a href="/faq" style={navStyle}>FAQ</a>
          <a href="/blog" style={navStyle}>Blog</a>
          <a href="/contact" style={navStyle}>Contact</a>
          <a href="/signup" style={navStyle}>Become a Vendor</a>
          <a href="/shop" style={navStyle}>Shop</a>
          <a href="/cart" style={navStyle}>
            <span style={{ fontWeight: 'bold' }}>🛒</span>
            {cart.length > 0 && (
              <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>({cart.length})</span>
            )}
          </a>

          {/* Search + Zip */}
          <input type="text" placeholder="Search products..." style={inputStyle} />
          <input type="text" placeholder="Zip Code" style={{ ...inputStyle, width: '100px' }} />
          <button style={searchButtonStyle}>Search</button>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="text-center mt-10 px-6">
        <h1 className="text-5xl font-extrabold text-green-600 mb-4">
          🛍️ Shop Local and Save Big! 🎉
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Discover amazing products from your favorite local vendors.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className="px-5 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition font-semibold"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8 pb-12 w-full max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-green-700 mb-2 text-center">
                {product.name}
              </h2>
              <div className="text-center text-yellow-400 mb-2 text-lg">
                {product.rating}
              </div>
              <p className="text-lg font-bold text-gray-700 text-center mb-6">
                {product.price}
              </p>
              <div className="flex justify-center gap-4 mt-auto">
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
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

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#f5f5f5',
          padding: '1rem',
          textAlign: 'center',
          color: '#666',
          marginTop: 'auto',
        }}
      >
        <p>&copy; {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Style helpers
const navStyle = {
  margin: '0 10px',
  color: '#fff',
  textDecoration: 'none',
};

const inputStyle = {
  marginLeft: '10px',
  padding: '6px 10px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '14px',
};

const searchButtonStyle = {
  marginLeft: '10px',
  padding: '6px 12px',
  backgroundColor: '#40916c',
  color: '#fff',
  borderRadius: '8px',
  border: 'none',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default ShopPage;



