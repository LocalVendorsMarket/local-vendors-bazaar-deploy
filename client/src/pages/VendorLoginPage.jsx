import React, { useState } from 'react';
import logo from '../assets/logo.png';

const VendorLoginPage = () => {
  const [isNewVendor, setIsNewVendor] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [vendorName, setVendorName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNewVendor) {
      alert(`🎉 Welcome, ${vendorName}! You’ve been assigned Vendor ID: LVB-${Math.floor(1000 + Math.random() * 9000)}`);
    } else {
      alert(`✅ Logged in as ${email}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center text-white text-xl font-bold">
          <img src={logo} alt="Logo" className="w-10 mr-3" />
          Local Vendors Bazaar
        </a>
        <nav className="flex gap-6 text-sm">
          <a href="/" className="hover:underline">🏠 Home</a>
          <a href="/vendor-signup" className="hover:underline">🚪 Exit</a>
        </nav>
      </header>

      {/* Login Box */}
      <main className="flex flex-grow justify-center items-center px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-center text-blue-900 mb-4">
            {isNewVendor ? 'Sign Up as a Vendor' : 'Vendor Login'}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isNewVendor && (
              <>
                <input
                  type="text"
                  placeholder="Name or Company"
                  value={vendorName}
                  onChange={(e) => setVendorName(e.target.value)}
                  required
                  className={inputStyle}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className={inputStyle}
                />
              </>
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={inputStyle}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={inputStyle}
            />
            <button type="submit" className="bg-blue-900 text-white w-full py-2 rounded-md font-semibold hover:bg-blue-800 transition">
              {isNewVendor ? 'Create Account' : 'Log In'}
            </button>
          </form>

          <div className="text-center mt-4">
            <button
              onClick={() => setIsNewVendor(!isNewVendor)}
              className="text-blue-700 font-medium hover:underline"
            >
              {isNewVendor ? 'Already have an account? Log In' : 'New Vendor? Create Account'}
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-4 text-sm mt-auto">
        © {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.
      </footer>
    </div>
  );
};

const inputStyle = "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

export default VendorLoginPage;
