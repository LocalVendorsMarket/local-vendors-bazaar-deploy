import React from 'react';

const BuyerSignupPage = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ color: '#2b9348', marginBottom: '1rem' }}>Create Your Customer Account</h1>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
        <input type="text" placeholder="Full Name" style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} required />
        <input type="email" placeholder="Email Address" style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} required />
        <input type="password" placeholder="Password" style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} required />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#2b9348', color: '#fff', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer' }}>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default BuyerSignupPage;


