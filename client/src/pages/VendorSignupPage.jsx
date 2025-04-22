import React from 'react';

const VendorSignupPage = ({ cart }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50" style={{ fontFamily: 'sans-serif' }}>
      {/* Navigation Bar */}
      <header
        style={{
          backgroundColor: '#2b9348',
          padding: '1rem',
          color: '#fff',
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
          <a href="/faq" style={navLink}>FAQ</a>
          <a href="/blog" style={navLink}>Blog</a>
          <a href="/contact" style={navLink}>Contact</a>
          <a href="/signup" style={navLink}>Become a Vendor</a>
          <a href="/shop" style={navLink}>Shop</a>
          <a href="/cart" style={navLink}>
            <span style={{ border: '1px solid #fff', borderRadius: '50%', padding: '3px 6px' }}>
              🛒
            </span>
            {cart.length > 0 && ` (${cart.length})`}
          </a>
          <input type="text" placeholder="Search products..." style={inputStyle} />
          <input type="text" placeholder="Zip Code" style={{ ...inputStyle, width: '100px' }} />
          <button style={buttonStyle}>Search</button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow p-8">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Become a Vendor</h1>
        <p className="text-gray-600 mb-8 text-center text-lg max-w-xl">
          Join Local Vendors Bazaar and grow your local business.  
          It's quick, simple, and free to start!
        </p>

        <form
          action="https://formspree.io/f/movdqjgp"
          method="POST"
          className="w-full max-w-xl space-y-6 bg-white p-8 rounded-xl shadow-md"
        >
          <FormInput label="Business Name" name="businessName" placeholder="Your Business Name" />
          <FormInput label="Email" name="email" type="email" placeholder="you@example.com" />
          <FormInput label="Phone" name="phone" placeholder="123-456-7890" />
          <FormInput label="Website (optional)" name="website" placeholder="https://yourbusiness.com" />
          <FormTextarea label="Business Description" name="description" placeholder="Tell us about your business..." />

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition"
          >
            Submit Application
          </button>
        </form>
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

const navLink = {
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

const buttonStyle = {
  marginLeft: '10px',
  padding: '6px 12px',
  backgroundColor: '#40916c',
  color: '#fff',
  borderRadius: '8px',
  border: 'none',
  fontWeight: 'bold',
  cursor: 'pointer',
};

// Reusable Form Input
const FormInput = ({ label, type = "text", name, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      required
      className="w-full border border-gray-300 rounded-lg p-3"
      placeholder={placeholder}
    />
  </div>
);

// Reusable Form Textarea
const FormTextarea = ({ label, name, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea
      name={name}
      required
      rows="4"
      className="w-full border border-gray-300 rounded-lg p-3"
      placeholder={placeholder}
    ></textarea>
  </div>
);

export default VendorSignupPage;

