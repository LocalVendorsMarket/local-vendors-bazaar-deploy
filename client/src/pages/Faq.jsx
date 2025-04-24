import React from 'react';

const Faq = ({ cart }) => {
  const faqs = [
    {
      question: "What is Local Vendors Bazaar?",
      answer: "Local Vendors Bazaar connects buyers and local businesses in your community to support shopping local and saving big.",
    },
    {
      question: "How can I become a vendor?",
      answer: "You can sign up easily using the 'Become a Vendor' button in the navigation. We will review and activate your listing quickly!",
    },
    {
      question: "Is there a fee to join?",
      answer: "Currently, vendor signup is free! As we grow, optional premium features will be available.",
    },
    {
      question: "Can I shop from anywhere?",
      answer: "Yes! Start by entering your ZIP code to discover vendors near you and beyond.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" style={{ fontFamily: 'sans-serif' }}>
      {/* Nav Bar */}
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/assets/logo.png"
            alt="Logo"
            style={{ width: '40px', marginRight: '10px' }}
          />
          <div style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>LocalVendorsBazaar</div>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="/" style={navLink}>Home</a>
          <a href="/faq" style={navLink}>FAQ</a>
          <a href="/blog" style={navLink}>Blog</a>
          <a href="/contact" style={navLink}>Contact</a>
          <a href="/signup" style={navLink}>Become a Vendor</a>
          <a href="/shop" style={navLink}>Shop</a>
          <a href="/cart" style={navLink}>
            <span style={{ filter: 'brightness(0) invert(1)' }}>🛒</span>{' '}
            {cart?.length > 0 && `(${cart.length})`}
          </a>
          <input type="text" placeholder="Search products..." style={inputStyle} />
          <input type="text" placeholder="Zip Code" style={{ ...inputStyle, width: '100px' }} />
          <button style={buttonStyle}>Search</button>
        </nav>
      </header>

      {/* FAQ Content */}
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ color: '#2b9348', fontSize: '2.5rem', marginBottom: '2rem' }}>
          Frequently Asked Questions
        </h1>

        <div
          style={{
            display: 'grid',
            gap: '1.5rem',
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'left',
          }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              <h2 style={{ color: '#1f7a3f', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                {faq.question}
              </h2>
              <p style={{ color: '#555', fontSize: '1rem' }}>{faq.answer}</p>
            </div>
          ))}
        </div>
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
  fontSize: '14px',
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

export default Faq;
























