import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="home"
      className="App"
      style={{
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
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
          alignItems: 'center'
        }}
      >
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          LocalVendorsBazaar
        </div>
        <nav
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '0.5rem'
  }}
>
  <a href="/" style={linkStyle}>Home</a>
  <a href="/faq" style={linkStyle}>FAQ</a>
  <a href="/blog" style={linkStyle}>Blog</a>
  <a href="/contact" style={linkStyle}>Contact</a>
</nav>
      </header>

      {/* Main Content */}
      <main
        style={{
          textAlign: 'center',
          padding: '2rem 1rem',
          maxWidth: '800px',
          margin: '0 auto',
          width: '100%'
        }}
      >
        <motion.img
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          src="/assets/logo.png"
          alt="Local Vendors Bazaar Logo"
          style={{ width: '200px', marginBottom: '1rem' }}
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ color: '#2b9348' }}
        >
          Welcome to Local Vendors Bazaar 🎉
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ fontSize: '1.2rem', color: '#555' }}
        >
          Shop and Save Locally — Supporting Chicago and Beyond!
        </motion.p>

        <motion.img
          src="/assets/flyer.png"
          alt="Local Vendors Bazaar Flyer"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          style={{
            maxWidth: '100%',
            marginTop: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        />

        {/* Vendor CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          style={{
            marginTop: '3rem',
            padding: '2rem',
            backgroundColor: '#f0fdf4',
            borderRadius: '12px'
          }}
        >
          <h2 style={{ color: '#1f7a3f' }}>Are You a Local Vendor?</h2>
          <p style={{ color: '#333', fontSize: '1.1rem' }}>
            Join our marketplace and connect with buyers near you.
          </p>
          <a
            href="#"
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '10px 20px',
              backgroundColor: '#2b9348',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 'bold'
            }}
          >
            Become a Vendor
          </a>
        </motion.div>

        {/* FAQ Section */}
        <section id="faq" style={{ padding: '4rem 1rem', backgroundColor: '#f0fdf4' }}>
          <h2 style={{ color: '#2b9348' }}>Frequently Asked Questions</h2>
          <p>We’ll add real answers here soon!</p>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ padding: '4rem 1rem' }}>
          <h2 style={{ color: '#2b9348' }}>Contact Us</h2>
          <p>Email us at hello@localvendorsbazaar.com</p>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#f5f5f5',
          padding: '1rem',
          textAlign: 'center',
          color: '#666',
          marginTop: 'auto'
        }}
      >
        <p>&copy; {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

const linkStyle = {
    margin: '5px 10px',
    color: '#fff',
    textDecoration: 'none'
  };
};

export default Home;







