// src/VendorSignup.js
import React, { useState } from 'react';

const VendorSignup = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Vendor application submitted!');
    console.log(formData);
    // later: send to backend or API
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#2b9348' }}>Vendor Signup</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="text" name="businessName" placeholder="Business Name" value={formData.businessName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
        <input type="url" name="website" placeholder="Website (optional)" value={formData.website} onChange={handleChange} />
        <textarea name="message" placeholder="Tell us about your business..." rows="4" value={formData.message} onChange={handleChange}></textarea>
        <button type="submit" style={{ backgroundColor: '#2b9348', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px' }}>
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default VendorSignup;