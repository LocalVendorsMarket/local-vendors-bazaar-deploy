import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Contact = ({ cart }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
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
      <main style={{ padding: '2rem', maxWidth: '1200px', width: '100%', margin: '0 auto', flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ color: '#003366', fontSize: '3rem', textAlign: 'center', marginBottom: '2rem' }}>Get in Touch</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
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
            rows="8"
            style={textareaStyle}
            required
          />
          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', textAlign: 'center' }}>
        <p>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Styles
const navLinkStyle = { color: 'white', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' };
const inputStyle = { width: '100%', padding: '18px', borderRadius: '10px', border: '1px solid #ccc', fontSize: '18px', backgroundColor: 'white' };
const textareaStyle = { width: '100%', padding: '18px', borderRadius: '10px', border: '1px solid #ccc', fontSize: '18px', resize: 'vertical', backgroundColor: 'white' };
const buttonStyle = { backgroundColor: '#003366', color: 'white', padding: '16px', fontSize: '18px', borderRadius: '10px', fontWeight: 'bold', border: 'none', cursor: 'pointer' };

export default Contact;



























