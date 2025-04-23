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
    <div className="min-h-screen flex flex-col bg-gray-50" style={{ fontFamily: 'sans-serif' }}>
      {/* Navigation */}
      <header
        style={{
          backgroundColor: '#2b9348',
          padding: '1rem',
          color: '#fff',
          width: '100%',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ marginLeft: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <img
  src="/assets/logo.png"
  alt="Local Vendors Bazaar Logo"
  style={{ width: '150px', marginBottom: '1rem' }}
/>
style={{ height: '40px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>LocalVendorsBazaar</span>
        </div>
        <nav style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', marginRight: '1rem' }}>
          <a href="/" style={linkStyle}>Home</a>
          <a href="/faq" style={linkStyle}>FAQ</a>
          <a href="/blog" style={linkStyle}>Blog</a>
          <a href="/contact" style={linkStyle}>Contact</a>
          <a href="/signup" style={linkStyle}>Become a Vendor</a>
          <a href="/shop" style={linkStyle}>Shop</a>
          <a href="/cart" style={linkStyle}>🛒 <span style={{ filter: 'invert(1)' }}>Cart {cart?.length > 0 && `(${cart.length})`}</span></a>
          <input
            type="text"
            placeholder="Search products..."
            style={searchStyle}
          />
          <input
            type="text"
            placeholder="Zip Code"
            style={{ ...searchStyle, width: '100px' }}
          />
          <button style={searchBtnStyle}>Search</button>
        </nav>
      </header>

      {/* Blog Section */}
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ color: '#2b9348', fontSize: '2.5rem', marginBottom: '2rem' }}>Blog and News</h1>
        <div
          style={{
            display: 'grid',
            gap: '1.5rem',
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'left',
          }}
        >
          {posts.map((post, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              <h2 style={{ color: '#1f7a3f', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{post.title}</h2>
              <p style={{ color: '#555', fontSize: '1rem' }}>{post.content}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
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

// Styles
const linkStyle = {
  margin: '0 10px',
  color: '#fff',
  textDecoration: 'none',
};

const searchStyle = {
  marginLeft: '10px',
  padding: '6px 10px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '14px',
};

const searchBtnStyle = {
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








