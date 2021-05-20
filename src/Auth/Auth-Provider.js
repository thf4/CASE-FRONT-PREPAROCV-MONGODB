import React, { useState, createContext, useEffect } from "react";
import jwt from "jsonwebtoken";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      try {
        jwt.decode(token, { headers: true });
        return setAuthenticated(true);
      } catch (err) {
        sessionStorage.removeItem("token");
        return setAuthenticated(false);
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        setAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
