import React from 'react';
import { useNavigate } from 'react-router-dom';

const VendorSidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Dashboard', path: '/vendor/dashboard' },
    { label: 'Products', path: '/vendor/products' },
    { label: 'Orders', path: '/vendor/orders' },
    { label: 'Analytics', path: '/vendor/analytics' },
    { label: 'Account', path: '/vendor/account' },
    { label: 'Help', path: '/vendor/help' },
  ];

  return (
    <div className="w-full sm:w-64 bg-green-600 min-h-screen p-4 text-white shadow-lg">
      <div className="mb-8 text-center">
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate('/')}
        >
          LocalVendorsBazaar.com
        </h1>
      </div>

      <nav className="space-y-3">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className="cursor-pointer hover:bg-green-700 px-4 py-2 rounded transition"
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default VendorSidebar;





