import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Contact = ({ cart }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' }); // Clear form after submit
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#e6f0ff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <header style={{ backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', color: 'white' }}>
        <a href="/"><img src={logo} alt="Logo" style={{ width: '50px' }} /></a>
        <div style={{ display: 'flex', gap: '15px', marginLeft: '2rem' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/faq" style={navLinkStyle}>FAQ</a>
          <a href="/blog" style={navLinkStyle}>Blog</a>
          <a href="/testimonials" style={navLinkStyle}>Testimonials</a>
          <a href="/contact" style={navLinkStyle}>Contact</a>
          <a href="/shop" style={navLinkStyle}>Shop</a>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <a href="/cart" style={{ ...navLinkStyle, fontSize: '24px', filter: 'drop-shadow(1px 1px 0 white)' }}>🛒 {cart?.length > 0 && `(${cart.length})`}</a>
        </div>
      </header>

      {/* Contact Form */}
      <main style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ color: '#003366', fontSize: '2.5rem', marginBottom: '2rem' }}>Contact Us</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            style={textareaStyle}
            required
          />
          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', marginTop: 'auto', textAlign: 'center' }}>
        <p>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Styles
const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' };
const inputStyle = { width: '100%', padding: '16px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' };
const textareaStyle = { width: '100%', padding: '16px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px', resize: 'vertical' };
const buttonStyle = { backgroundColor: '#003366', color: 'white', padding: '14px', fontSize: '16px', border: 'none', borderRadius: '8px', cursor: 'pointer' };

export default Contact;



























