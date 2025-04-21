import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home'; // ✅ NOT inside pages
import Blog from '../Blog'; // ✅ NOT inside pages
import Faq from '../Faq'; // ✅ NOT inside pages
import Contact from '../Contact'; // ✅ NOT inside pages
import VendorSignupPage from '../VendorSignupPage'; // ✅ NOT inside pages
import ThankYou from '../ThankYouPage'; // ✅ NOT inside pages
import Products from './Products'; // ✅ Correct new shop page inside pages

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
        <Route path="/shop" element={<Products />} /> {/* ✅ SHOP NOW POINTS TO PRODUCTS.JSX */}
      </Routes>
    </Router>
  );
}

export default App;




















