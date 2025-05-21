import React from 'react';
import VendorSidebar from '../components/VendorSidebar';
import logo from '../assets/logo.png';

const AccountSettings = () => {
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
          <a href="/vendor-signup" className="hover:underline">🚪 Log Out</a>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex flex-grow">
        <VendorSidebar />
        <main className="flex-1 max-w-5xl mx-auto px-6 py-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Account Settings</h1>
          <p className="text-gray-700">
            Update your profile, preferences, and account details.
          </p>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-4 text-sm mt-auto">
        © {new Date().getFullYear()} Local Vendors Bazaar. All rights reserved.
      </footer>
    </div>
  );
};

export default AccountSettings;











