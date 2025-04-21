import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // ✅ matches Home.js
import Blog from './pages/Blog'; // ✅ matches Blog.jsx
import Faq from './pages/Faq'; // ✅ matches Faq.jsx
import Contact from './pages/Contact'; // ✅ matches Contact.jsx
import VendorSignupPage from './pages/VendorSignupPage'; // ✅
import ThankYouPage from './pages/ThankYouPage'; // ✅
import Products from './pages/Products'; // ✅ matches Products.jsx

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<VendorSignupPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/shop" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;























