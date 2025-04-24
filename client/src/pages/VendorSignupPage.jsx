import React from 'react';

const VendorSignupPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50" style={{ fontFamily: 'sans-serif' }}>
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
            style={{ width: '40px', marginRight: '10px' }}
          />
          <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>LocalVendorsBazaar</span>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="/" style={navLink}>Home</a>
          <a href="/faq" style={navLink}>FAQ</a>
          <a href="/blog" style={navLink}>Blog</a>
          <a href="/contact" style={navLink}>Contact</a>
          <a href="/signup" style={navLink}>Become a Vendor</a>
          <a href="/shop" style={navLink}>Shop</a>
          <a href="/cart" style={navLink}>
            <span style={{ filter: 'brightness(0) invert(1)' }}>🛒 Cart</span>
          </a>

          <input type="text" placeholder="Search products..." style={inputStyle} />
          <input type="text" placeholder="Zip Code" style={{ ...inputStyle, width: '100px' }} />
          <button style={searchButton}>Search</button>
        </nav>
      </header>

      {/* Centered Signup Form */}
      <main className="flex-grow flex justify-center items-center w-full px-4 py-12">
        <div
          className="bg-white p-8 rounded-2xl shadow-lg w-full"
          style={{ maxWidth: '600px' }}
        >
          <h1 className="text-3xl font-bold text-green-600 text-center mb-4">
            Become a Vendor
          </h1>
          <p className="text-center text-gray-600 mb-6 text-lg">
            Join Local Vendors Bazaar and grow your local business. It's quick, simple, and free to start!
          </p>

          <form action="https://formspree.io/f/movdqjgp" method="POST" className="space-y-5">
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

      {/* Footer */}
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

const navLink = {
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

const searchButton = {
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























