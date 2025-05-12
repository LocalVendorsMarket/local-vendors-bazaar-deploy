import React, { useState } from 'react';

const VendorSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this to the backend
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#f4f8fc', minHeight: '100vh' }}>
      <h1 style={{ color: '#003366', marginBottom: '2rem' }}>Vendor Support</h1>

      {submitted ? (
        <p style={{ color: 'green', fontSize: '1.1rem' }}>
          Thank you for reaching out! Our support team will get back to you shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '10px', maxWidth: '600px' }}>
          <label style={labelStyle}>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} required />

          <label style={labelStyle}>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} required />

          <label style={labelStyle}>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows={5} style={{ ...inputStyle, resize: 'vertical' }} required />

          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      )}

      <div style={{ marginTop: '3rem' }}>
        <h2 style={{ color: '#00509e' }}>Frequently Asked Questions</h2>
        <ul style={{ lineHeight: '2' }}>
          <li>How do I update my product listings?</li>
          <li>How do I check recent orders?</li>
          <li>Where can I track my earnings?</li>
          <li>How can I get featured on the homepage?</li>
          <li>Who do I contact for billing issues?</li>
        </ul>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '1rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  marginBottom: '1rem'
};

const labelStyle = {
  fontWeight: 'bold',
  marginBottom: '0.25rem',
  display: 'block',
  color: '#003366'
};

const buttonStyle = {
  backgroundColor: '#003366',
  color: 'white',
  padding: '0.75rem 1.5rem',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1rem',
  cursor: 'pointer',
  marginTop: '1rem'
};

export default VendorSupport;
