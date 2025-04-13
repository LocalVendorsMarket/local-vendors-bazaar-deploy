import './App.css';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '2rem' }}>
      <img src="/assets/logo.png" alt="Local Vendors Bazaar Logo" style={{ width: '200px', marginBottom: '1rem' }} />
      <h1 style={{ color: '#2b9348' }}>Welcome to Local Vendors Bazaar 🎉</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>
        Shop and Save Locally — Supporting Chicago and Beyond!
      </p>
      <img src="/assets/flyer.png" alt="Local Vendors Bazaar Flyer" style={{ maxWidth: '100%', marginTop: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
    </div>
  );
}

export default App;
