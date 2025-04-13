function App() {
  return (
    <div className="App" style={{ fontFamily: 'sans-serif' }}>
      {/* Navigation Bar */}
      <header style={{
        backgroundColor: '#2b9348',
        padding: '1rem',
        color: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>LocalVendorsBazaar</div>
        <nav>
          <a href="#" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Home</a>
          <a href="#" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>FAQ</a>
          <a href="#" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Blog</a>
          <a href="#" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <img src="/assets/logo.png" alt="Local Vendors Bazaar Logo" style={{ width: '200px', marginBottom: '1rem' }} />
        <h1 style={{ color: '#2b9348' }}>Welcome to Local Vendors Bazaar 🎉</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Shop and Save Locally — Supporting Chicago and Beyond!
        </p>

        <img src="/assets/flyer.png" alt="Local Vendors Bazaar Flyer" style={{ maxWidth: '100%', marginTop: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />

        {/* Vendor CTA */}
        <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#f0fdf4', borderRadius: '12px' }}>
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
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#f5f5f5', padding: '1rem', textAlign: 'center', color: '#666' }}>
        <p>&copy; {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
}
<div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
  LocalVendorsBazaar 🚀
</div>
