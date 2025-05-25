import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [vendor, setVendor] = useState(null);

  const login = (vendorInfo) => setVendor(vendorInfo);
  const logout = () => setVendor(null);

  return (
    <AuthContext.Provider value={{ vendor, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
