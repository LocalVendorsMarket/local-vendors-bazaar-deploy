import React, { useState } from 'react';

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    name: 'Local Vendor',
    email: 'vendor@example.com',
    phone: '555-123-4567',
    businessName: 'Best Handmade Goods',
    address: '123 Main St, Elgin, IL 60120',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password && formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    setMessage("Account settings updated successfully.");
    // Logic to save data would go here
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#f4f8fc', minHeight: '100vh' }}>
      <h1 style={{ color: '#003366', marginBottom: '1.5rem' }}>Account Settings</h1>
      
      {message && <p style={{ color: '#007f5f', fontWeight: 'bold' }}>{message}</p>}

      <form onSubmit={handleSubmit} style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '10px', maxWidth: '600px' }}>
        <label style={labelStyle}>Full Name</label>
        <input name="name" value={formData.name} onChange={handleChange} style={inputStyle} />

        <label style={labelStyle}>Email</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} style={inputStyle} />

        <label style={labelStyle}>Phone</label>
        <input name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} />

        <label style={labelStyle}>Business Name</label>
        <input name="businessName" value={formData.businessName} onChange={handleChange} style={inputStyle} />

        <label style={labelStyle}>Business Address</label>
        <input name="address" value={formData.address} onChange={handleChange} style={inputStyle} />

        <hr style={{ margin: '2rem 0' }} />

        <label style={labelStyle}>New Password</label>
        <input name="password" type="password" value={formData.password} onChange={handleChange} style={inputStyle} />

        <label style={labelStyle}>Confirm Password</label>
        <input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} style={inputStyle} />

        <button type="submit" style={saveButtonStyle}>Save Changes</button>
      </form>
    </div>
  );
};

// Styles
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

const saveButtonStyle = {
  backgroundColor: '#003366',
  color: 'white',
  padding: '0.75rem 1.5rem',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1rem',
  cursor: 'pointer',
  marginTop: '1rem'
};

export default AccountSettings;
