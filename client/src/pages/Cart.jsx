import React from 'react';

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + price;
  }, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" style={{ fontFamily: 'sans-serif' }}>
      <header
        style={{
          backgroundColor: '#2b9348',
          padding: '1rem',
          color: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', marginLeft: '1rem' }}>
          LocalVendorsBazaar
        </div>
        <nav style={{ marginRight: '1rem', display: 'flex', alignItems: 'center' }}>
          <a href="/" style={{ margin: '0 10px', color: '#fff' }}>Home</a>
          <a href="/shop" style={{ margin: '0 10px', color: '#fff' }}>Shop</a>
        </nav>
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">Your Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is currently empty.</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md"
              >
                <div>
                  <h2 className="text-lg font-bold text-green-700">{item.name}</h2>
                  <p className="text-gray-600">{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="text-right font-bold text-xl text-green-700">
              Total: ${total.toFixed(2)}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;

