import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import Faq from './Faq';
import Contact from './Contact';
import VendorSignupPage from './VendorSignup';
import ThankYou from './ThankYou'; // ✅ import thank-you page

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<VendorSignupPage />} />
        <Route path="/thank-you" element={<ThankYou />} /> {/* ✅ new route */}
      </Routes>
    </Router>
  );
}

export default App;















