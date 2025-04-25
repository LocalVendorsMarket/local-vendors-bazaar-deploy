import React from 'react';

const VendorSignupPage = ({ cart }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50" style={{ fontFamily: 'sans-serif' }}>
      {/* Navigation Bar */}
      <header
        className="w-full sticky top-0 z-50"
        style={{
          backgroundColor: '#2b9348',
          color: '#fff',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/assets/logo.png"
            alt="Logo"
            style={{ width: '40px', marginRight: '10px' }}
          />
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>LocalVendorsBazaar</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="/" style={linkStyle}>Home</a>
          <a href="/faq" style={linkStyle}>FAQ</a>
          <a href="/blog" style={linkStyle}>Blog</a>
          <a href="/contact" style={linkStyle}>Contact</a>
          <a href="/signup" style={linkStyle}>Become a Vendor</a>
          <a href="/shop" style={linkStyle}>Shop</a>
          <a href="/cart" style={linkStyle}>
            <span style={{ filter: 'brightness(0) invert(1)' }}>🛒</span> {cart?.length > 0 && `(${cart.length})`}
          </a>
          <input type="text" placeholder="Search products..." style={inputStyle} />
          <input type="text" placeholder="Zip Code" style={{ ...inputStyle, width: '100px' }} />
          <button style={searchButtonStyle}>Search</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-8 flex justify-center items-center">
        <div
          style={{
            width: '100%',
            maxWidth: '700px',
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          <h1 className="text-4xl font-bold text-green-600 mb-4 text-center">Become a Vendor</h1>
          <p className="text-gray-600 mb-8 text-center text-lg">
            Join Local Vendors Bazaar and grow your local business.  
            It's quick, simple, and free to start!
          </p>

          <form action="https://formspree.io/f/movdqjgp" method="POST" className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
              <input
                type="text"
                name="businessName"
                required
                className="w-full border border-gray-300 rounded-lg p-3"
                placeholder="Your Business Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg p-3"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                className="w-full border border-gray-300 rounded-lg p-3"
                placeholder="123-456-7890"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Website (optional)</label>
              <input
                type="url"
                name="website"
                className="w-full border border-gray-300 rounded-lg p-3"
                placeholder="https://yourbusiness.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Business Description</label>
              <textarea
                name="description"
                required
                rows="4"
                className="w-full border border-gray-300 rounded-lg p-3"
                placeholder="Tell us about your business..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </main>

      <footer
        style={{
          backgroundColor: '#f5f5f5',
          padding: '1rem',
          textAlign: 'center',
          color: '#666',
        }}
      >
        <p>&copy; {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

const linkStyle = {
  margin: '0 10px',
  color: '#fff',
  textDecoration: 'none',
  fontSize: '14px',
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

export default VendorSignupPage;
























