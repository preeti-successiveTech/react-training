"use client";

import { createContext, useContext, useState } from "react";  // Fix 'require' to 'import'

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);  // Custom hook to access context

export const AuthProvider = ({ children }) => {  // Proper destructuring for 'children'
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState("");

  const login = (userName) => {
    setIsAuthenticated(true);
    setUser(userName);
  };

  const logOut = () => {
    setUser("");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated,setIsAuthenticated, user, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
