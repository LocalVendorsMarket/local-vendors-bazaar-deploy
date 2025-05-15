import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart,
  Settings,
  HelpCircle,
} from 'lucide-react';

const VendorSidebar = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, path: '/vendor-dashboard' },
    { label: 'Products', icon: <Package className="w-5 h-5" />, path: '/vendor-products' },
    { label: 'Orders', icon: <ShoppingCart className="w-5 h-5" />, path: '/vendor-orders' },
    { label: 'Analytics', icon: <BarChart className="w-5 h-5" />, path: '/vendor-analytics' },
    { label: 'Account', icon: <Settings className="w-5 h-5" />, path: '/vendor-settings' },
    { label: 'Support', icon: <HelpCircle className="w-5 h-5" />, path: '/vendor-support' },
  ];

  return (
    <aside className="h-full p-6">
      <div className="text-xl font-bold text-green-700 mb-6">Vendor Panel</div>
      <nav className="flex flex-col gap-4">
        {navItems.map(({ label, icon, path }) => {
          const isActive = location.pathname === path;
          return (
            <NavLink
              key={label}
              to={path}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${
                isActive
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {icon}
              {label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default VendorSidebar;








