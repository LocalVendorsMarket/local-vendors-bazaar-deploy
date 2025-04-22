import React from 'react';

const ThankYouPage = ({ cart }) => {
  return (
    <div
      className="min-h-screen flex flex-col bg-gray-50"
      style={{ fontFamily: 'sans-serif' }}
    >
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
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', marginLeft: '1rem' }}>
          LocalVendorsBazaar
        </div>

        <nav style={{ marginRight: '1rem', display: 'flex', alignItems: 'center' }}>
          <a href="/" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Home</a>
          <a href="/faq" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>FAQ</a>
          <a href="/blog" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Blog</a>
          <a href="/contact" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Contact</a>
          <a href="/signup" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Become a Vendor</a>
          <a href="/shop" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Shop</a>
          <a href="/cart" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>
            🛒 Cart{cart && cart.length > 0 && ` (${cart.length})`}
          </a>

          {/* Search + Zip Code */}
          <input
            type="text"
            placeholder="Search products..."
            style={{
              marginLeft: '10px',
              padding: '6px 10px',
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
              padding: '6px 10px',
              width: '100px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '14px',
            }}
          />
          <button
            style={{
              marginLeft: '10px',
              padding: '6px 12px',
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
        </nav>
      </header>

      {/* Main Thank You Content */}
      <main className="flex flex-col items-center justify-center flex-grow p-8">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          🎉 Thank You!
        </h1>
        <p className="text-gray-600 text-lg mb-8 text-center">
          Your application has been submitted successfully.<br />
          We will review and contact you shortly!
        </p>

        <a
          href="/"
          style={{
            marginTop: '1rem',
            padding: '10px 20px',
            backgroundColor: '#2b9348',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
          }}
        >
          Back to Home
        </a>
      </main>

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

export default ThankYouPage;








