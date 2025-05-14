import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart,
  Settings,
  HelpCircle,
  Menu,
  X,
} from 'lucide-react';
import { useLocation } from 'react-router-dom';

const VendorSidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    { label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, path: '/vendor/dashboard' },
    { label: 'Products', icon: <Package className="w-5 h-5" />, path: '/vendor/products' },
    { label: 'Orders', icon: <ShoppingCart className="w-5 h-5" />, path: '/vendor/orders' },
    { label: 'Analytics', icon: <BarChart className="w-5 h-5" />, path: '/vendor/analytics' },
    { label: 'Account', icon: <Settings className="w-5 h-5" />, path: '/vendor/account-settings' },
    { label: 'Support', icon: <HelpCircle className="w-5 h-5" />, path: '/vendor/support' },
  ];

  return (
    <div className="flex flex-col">
      {/* Mobile Toggle Button */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:block w-full md:w-64 bg-white border-r h-full shadow-lg`}
      >
        <div className="p-6 font-bold text-xl text-green-700">Vendor Panel</div>
        <nav className="flex flex-col gap-2 px-4">
          {navItems.map(({ label, icon, path }) => {
            const isActive = location.pathname === path;
            return (
              <NavLink
                key={label}
                to={path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium ${
                  isActive
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {icon}
                <span>{label}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </div>
  );
};

export default VendorSidebar;






