import React from 'react';

const Blog = ({ cart }) => {
  const posts = [
    {
      title: "Why Shopping Local Matters",
      content: "Supporting local vendors helps grow your community's economy and keeps neighborhoods vibrant. Learn why your local purchase makes a big difference!",
    },
    {
      title: "Top 5 Local Products to Try",
      content: "From homemade honey to handcrafted jewelry, discover the best products made with love by your neighbors!",
    },
    {
      title: "How to Save Money While Shopping Locally",
      content: "Find out tips and tricks for saving big while still supporting local businesses. Your wallet and community will thank you!",
    },
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
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
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/assets/logo.png"
            alt="Local Vendors Bazaar Logo"
            style={{ width: '40px', marginRight: '10px' }}
          />
          <div style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>LocalVendorsBazaar</div>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/faq" style={navLinkStyle}>FAQ</a>
          <a href="/blog" style={navLinkStyle}>Blog</a>
          <a href="/contact" style={navLinkStyle}>Contact</a>
          <a href="/signup" style={navLinkStyle}>Become a Vendor</a>
          <a href="/shop" style={navLinkStyle}>Shop</a>
          <a href="/cart" style={navLinkStyle}>
            <span style={{ filter: 'brightness(0) invert(1)' }}>🛒</span> {cart?.length > 0 && `(${cart.length})`}
          </a>

          <input type="text" placeholder="Search products..." style={inputStyle} />
          <input type="text" placeholder="Zip Code" style={{ ...inputStyle, width: '100px' }} />
          <button style={searchButtonStyle}>Search</button>
        </nav>
      </header>

      {/* Blog Content */}
      <main style={{ textAlign: 'center', padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ color: '#2b9348', fontSize: '2.5rem', marginBottom: '2rem' }}>
          Blog and News
        </h1>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {posts.map((post, index) => (
            <div key={index} style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'left' }}>
              <h2 style={{ color: '#1f7a3f', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{post.title}</h2>
              <p style={{ color: '#555', fontSize: '1rem' }}>{post.content}</p>
            </div>
          ))}
        </div>
      </main>

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

const navLinkStyle = {
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

const searchButtonStyle = {
  marginLeft: '10px',
  padding: '6px 12px',
  backgroundColor: '#40916c',
  color: '#fff',
  borderRadius: '8px',
  border: 'none',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default Blog;

























