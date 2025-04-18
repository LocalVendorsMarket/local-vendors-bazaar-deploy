import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import Faq from './Faq';
import Contact from './Contact';
import VendorSignupPage from './VendorSignup';
import ThankYou from './ThankYou'; // ✅ import thank-you page
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import VendorSignupPage from './pages/VendorSignupPage';
import ThankYou from './pages/ThankYouPage';
import ShopPage from './pages/ShopPage'; // ✅ <-- NEW IMPORT for ShopPage

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<VendorSignupPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/shop" element={<ShopPage />} /> {/* ✅ NEW SHOP ROUTE */}
      </Routes>
    </Router>
  );
}

export default App;
















