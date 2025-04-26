import React from 'react';

const BuyerSignupPage = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '400px', margin: '0 auto' }}>
      <h1 style={{ color: '#2b9348', marginBottom: '1rem', textAlign: 'center' }}>Create your Customer Account</h1>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="text" placeholder="Full Name" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }} required />
        <input type="email" placeholder="Email Address" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }} required />
        <input type="password" placeholder="Password" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }} required />
        <button type="submit" style={{ backgroundColor: '#2b9348', color: '#fff', padding: '0.75rem', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
          Create Account
        </button>
      </form>
      <p style={{ fontSize: '0.75rem', color: '#777', marginTop: '1rem', textAlign: 'center' }}>
        By creating an account, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
};

export default BuyerSignupPage;
