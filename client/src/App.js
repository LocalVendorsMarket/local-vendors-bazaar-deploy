import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

<Router basename="/">
  {/* ... your routes */}
</Router>


import Home from './Home';
import Blog from './Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;







