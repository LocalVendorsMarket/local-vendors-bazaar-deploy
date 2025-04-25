import React from 'react';

const Cart = ({ cart, setCart }) => {
  const handleRemove = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50" style={{ fontFamily: 'sans-serif' }}>
      {/* Nav Bar */}
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
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', marginLeft: '1rem' }}>
          LocalVendorsBazaar
        </div>

        <nav style={{ marginRight: '1rem', display: 'flex', alignItems: 'center' }}>
          <a href="/" style={navLink}>Home</a>
          <a href="/shop" style={navLink}>Shop</a>
          <a href="/cart" style={navLink}>🛒 Cart {cart.length > 0 && `(${cart.length})`}</a>
        </nav>
      </header>

      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-6">🛍️ Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is currently empty.</p>
        ) : (
          <div className="space-y-6 w-full max-w-3xl mx-auto">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
                <div>
                  <h2 className="text-xl font-bold text-green-700">{item.name}</h2>
                  <p className="text-gray-600">{item.price}</p>
                </div>
                <button
                  onClick={() => handleRemove(index)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

const navLink = {
  margin: '0 10px',
  color: '#fff',
  textDecoration: 'none',
};

export default Cart;


