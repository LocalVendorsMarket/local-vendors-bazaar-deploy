import React, { useState, useRef } from 'react';

const ShopPage = ({ cart, setCart }) => {
  const categories = ['All', 'New Releases', 'Clothing', 'Jewelry', 'Cosmetics', 'Services', 'Restaurants', 'Retail Stores', 'Gift Shops'];
  
  const allProducts = [
    { id: 1, name: 'Local Honey', category: 'Food', price: '$12', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Local+Honey' },
    { id: 2, name: 'Handmade Necklace', category: 'Jewelry', price: '$25', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Necklace' },
    { id: 3, name: 'Organic T-Shirt', category: 'Clothing', price: '$18', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Organic+T-Shirt' },
    { id: 4, name: 'Custom Art Piece', category: 'Art', price: '$200', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Custom+Art' },
    { id: 5, name: 'Handmade Soap', category: 'Cosmetics', price: '$8', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Soap' },
    { id: 6, name: 'Boutique Dress', category: 'Clothing', price: '$45', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Boutique+Dress' },
    { id: 7, name: 'Coffee Subscription', category: 'Services', price: '$20', rating: '⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Coffee+Subscription' },
    { id: 8, name: 'Gift Basket', category: 'Gift Shops', price: '$50', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Gift+Basket' },
    { id: 9, name: 'Luxury Candle', category: 'Retail Stores', price: '$30', rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Luxury+Candle' },
    { id: 10, name: 'Sample Product', category: 'New Releases', price: '$15', rating: '⭐⭐⭐', image: 'https://via.placeholder.com/300x200?text=Sample+Product' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const scrollRef = useRef(null);

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      
      {/* Sub Nav */}
      <div style={{ display: 'flex', overflowX: 'auto', marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              marginRight: '20px',
              background: selectedCategory === category ? '#4CAF50' : 'transparent',
              color: selectedCategory === category ? 'white' : 'black',
              border: 'none',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Banner Ad */}
      <div style={{
        backgroundColor: 'skyblue',
        padding: '40px',
        textAlign: 'center',
        marginBottom: '30px',
        borderRadius: '10px'
      }}>
        <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>Advertise Here!</h2>
        <p style={{ fontSize: '18px' }}>Showcase your brand to thousands of local buyers.</p>
        <img 
          src="https://via.placeholder.com/600x200?text=Sample+Vendor+Ad" 
          alt="Sample Ad" 
          style={{ marginTop: '20px', borderRadius: '8px' }}
        />
      </div>

      {/* Product Scroll */}
      <div style={{ position: 'relative' }}>
        <button 
          onClick={() => handleScroll('left')} 
          style={{ position: 'absolute', left: 0, top: '40%', zIndex: 1, fontSize: '40px', background: 'transparent', border: 'none', cursor: 'pointer' }}
        >
          &#8592;
        </button>

        <div 
          ref={scrollRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            padding: '10px',
            gap: '20px'
          }}
        >
          {filteredProducts.map(product => (
            <div key={product.id} style={{
              minWidth: '300px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '10px',
              background: 'white',
              textAlign: 'center'
            }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ margin: '10px 0' }}>{product.name}</h3>
              <p>{product.price}</p>
              <p>{product.rating}</p>
              <button 
                onClick={() => addToCart(product)} 
                style={{
                  background: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  marginTop: '10px',
                  cursor: 'pointer',
                  borderRadius: '5px'
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <button 
          onClick={() => handleScroll('right')} 
          style={{ position: 'absolute', right: 0, top: '40%', zIndex: 1, fontSize: '40px', background: 'transparent', border: 'none', cursor: 'pointer' }}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default ShopPage;






































