import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [vendorId, setVendorId] = useState(null);

  useEffect(() => {
    const storedVendorId = localStorage.getItem('vendorId');
    if (storedVendorId) setVendorId(storedVendorId);
  }, []);

  const login = (id) => {
    localStorage.setItem('vendorId', id);
    setVendorId(id);
  };

  const logout = () => {
    localStorage.removeItem('vendorId');
    setVendorId(null);
  };

  return (
    <AuthContext.Provider value={{ vendorId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export { AuthContext };
