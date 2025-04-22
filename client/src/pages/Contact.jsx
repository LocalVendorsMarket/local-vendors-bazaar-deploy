import React from 'react';

const Contact = () => {
  const linkStyle = {
    margin: '0 10px',
    color: '#fff',
    textDecoration: 'none',
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center bg-gray-50"
      style={{ fontFamily: 'sans-serif', paddingTop: '5rem', paddingBottom: '3rem' }}
    >
      {/* Navigation Bar */}
      <header
        style={{
          backgroundColor: '#2b9348',
          padding: '1rem',
          color: '#fff',
          width: '100%',
          position: 'fixed',
          top: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          zIndex: 1000,
        }}
      >
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', marginLeft: '1rem' }}>
          LocalVendorsBazaar
        </div>
        <nav style={{ marginRight: '1rem', display: 'flex', alignItems: 'center' }}>
          <a href="/" style={linkStyle}>Home</a>
          <a href="/faq" style={linkStyle}>FAQ</a>
          <a href="/blog" style={linkStyle}>Blog</a>
          <a href="/contact" style={linkStyle}>Contact</a>
          <a href="/signup" style={linkStyle}>Become a Vendor</a>
        </nav>
      </header>

      {/* Contact Form */}
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 mt-24"
        style={{ marginTop: '8rem' }}
      >
        <h1 className="text-4xl font-bold text-green-600 text-center mb-8">
          Contact Us
        </h1>

        {/* ✅ Update your correct Formspree URL here */}
        <form action="https://formspree.io/f/movdqjgp" method="POST" className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Your Name"
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              required
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Subject"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;











