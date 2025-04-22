import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const linkStyle = {
    margin: '5px 10px',
    color: '#fff',
    textDecoration: 'none',
  };

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
    <div
      className="App"
      style={{
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {/* Navigation Bar */}
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
          flexDirection: 'row',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/assets/logo.png"
            alt="Logo"
            style={{ width: '40px', height: '40px', marginRight: '10px' }}
          />
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
            LocalVendorsBazaar
          </div>
        </div>

        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a href="/" style={linkStyle}>Home</a>
          <a href="/faq" style={linkStyle}>FAQ</a>
          <a href="/blog" style={linkStyle}>Blog</a>
          <a href="/contact" style={linkStyle}>Contact</a>
          <a href="/signup" style={linkStyle}>Become a Vendor</a>

          {/* Search + Zip inside navbar */}
          <input
            type="text"
            placeholder="Search products..."
            style={{
              marginLeft: '10px',
              padding: '6px 10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '14px',
            }}
          />
          <input
            type="text"
            placeholder="Zip Code"
            style={{
              marginLeft: '10px',
              padding: '6px 10px',
              width: '100px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '14px',
            }}
          />
          <button
            style={{
              marginLeft: '10px',
              padding: '6px 12px',
              backgroundColor: '#40916c',
              color: '#fff',
              borderRadius: '8px',
              border: 'none',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Search
          </button>
        </nav>
      </header>

      {/* Main Blog Content */}
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ color: '#2b9348', fontSize: '2.5rem', marginBottom: '2rem' }}>
          Blog and News
        </h1>

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
            <div key={index} style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: '#1f7a3f', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                {post.title}
              </h2>
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

export default Blog;






