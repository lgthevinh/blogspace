"use client"

import { useEffect } from 'react';
import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [is_logged_in, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user_data = JSON.parse(sessionStorage.getItem("user"));
      if (user_data) {
        setIsLoggedIn(true);
        setUser(user_data);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ is_logged_in, setIsLoggedIn, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
