import React from 'react';

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (indexToRemove) => {
    const newCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(newCart);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', color: '#2b9348', marginBottom: '1rem' }}>🛍️ Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p style={{ fontSize: '1.2rem', color: '#555' }}>Your cart is currently empty.</p>
      ) : (
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                padding: '1rem',
                borderRadius: '8px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '100px', borderRadius: '8px' }}
                />
                <div>
                  <h2 style={{ margin: 0, color: '#1f7a3f' }}>{item.name}</h2>
                  <p style={{ margin: '0.3rem 0', fontWeight: 'bold' }}>{item.price}</p>
                  <div style={{ fontSize: '1.2rem', color: '#fbbf24' }}>{item.rating}</div>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#e63946',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;



