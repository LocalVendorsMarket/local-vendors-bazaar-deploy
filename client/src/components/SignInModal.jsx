{/* Sign In Modal */}
{isSignInModalOpen && (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
      <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '400px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2b9348', marginBottom: '1rem' }}>{isNewCustomer ? 'Create Your Customer Account' : 'Sign In or Create Account'}</h2>
        <form onSubmit={handleSignInSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {isNewCustomer && (<input type="text" placeholder="Full Name" style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px', fontSize: '1rem' }} required />)}
          <input type="email" placeholder="Enter mobile number or email" value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px', fontSize: '1rem' }} required />
          {isNewCustomer && (<input type="password" placeholder="Create password" style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px', fontSize: '1rem' }} required />)}
          <button type="submit" style={{ backgroundColor: '#2b9348', color: '#fff', padding: '0.75rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>{isNewCustomer ? 'Create your account' : 'Continue'}</button>
        </form>
        <p style={{ fontSize: '0.75rem', color: '#777', marginTop: '1rem' }}>By continuing, you agree to LocalVendorsBazaar's Conditions of Use and Privacy Notice.</p>
        {!isNewCustomer && (<p onClick={() => setIsNewCustomer(true)} style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#007185', textDecoration: 'underline', cursor: 'pointer', textAlign: 'center' }}>New customer? Start here.</p>)}
        <button onClick={() => { setIsSignInModalOpen(false); setIsNewCustomer(false); }} style={{ marginTop: '1.5rem', padding: '0.5rem 1rem', backgroundColor: '#ccc', color: '#000', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>Cancel</button>
      </div>
    </div>
  )}
  
  {/* Update Location Modal */}
  {isUpdateLocationOpen && (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
      <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '400px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2b9348', marginBottom: '1rem' }}>Update Delivery Location</h2>
        <form onSubmit={handleUpdateLocationSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" placeholder="Enter new Zip Code" value={newZip} onChange={(e) => setNewZip(e.target.value)} style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px', fontSize: '1rem' }} required />
          <button type="submit" style={{ backgroundColor: '#2b9348', color: '#fff', padding: '0.75rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>Update</button>
        </form>
        <button onClick={() => setIsUpdateLocationOpen(false)} style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#ccc', color: '#000', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>Cancel</button>
      </div>
    </div>
  )}
  
  {/* Footer */}
  <footer style={{ backgroundColor: '#f1f1f1', padding: '2rem', textAlign: 'center', marginTop: 'auto', fontSize: '14px', color: '#555' }}>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px', marginBottom: '20px' }}>
      <div style={{ minWidth: '150px' }}>
        <h3 style={{ color: '#2b9348', marginBottom: '8px' }}>Get to Know Us</h3>
        <a href="/about" style={footerLinkStyle}>About Us</a><br/>
        <a href="/blog" style={footerLinkStyle}>Blog</a><br/>
        <a href="/faq" style={footerLinkStyle}>FAQ</a><br/>
        <a href="/careers" style={footerLinkStyle}>Careers</a><br/>
      </div>
      <div style={{ minWidth: '150px' }}>
        <h3 style={{ color: '#2b9348', marginBottom: '8px' }}>Make Money with Us</h3>
        <a href="/signup" style={footerLinkStyle}>Become a Vendor</a><br/>
        <a href="/advertise" style={footerLinkStyle}>Advertise Products</a><br/>
      </div>
      <div style={{ minWidth: '150px' }}>
        <h3 style={{ color: '#2b9348', marginBottom: '8px' }}>Buyer Resources</h3>
        <a href="/orders" style={footerLinkStyle}>Your Orders</a><br/>
        <a href="/shipping" style={footerLinkStyle}>Shipping Info</a><br/>
        <a href="/returns" style={footerLinkStyle}>Returns</a><br/>
        <a href="/help" style={footerLinkStyle}>Help Center</a><br/>
      </div>
      <div style={{ minWidth: '150px' }}>
        <h3 style={{ color: '#2b9348', marginBottom: '8px' }}>Stay Connected</h3>
        <a href="/contact" style={footerLinkStyle}>Contact Us</a><br/>
        <a href="/newsletter" style={footerLinkStyle}>Newsletter Signup</a><br/>
        <a href="/socials" style={footerLinkStyle}>Follow Us</a><br/>
      </div>
    </div>
  
    <p style={{ marginTop: '1rem', fontSize: '12px', color: '#777' }}>© {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
  </footer>
  
  
  
  
  
  
  
