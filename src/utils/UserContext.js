import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    nickname: "",
    email: "",
  });

  const login = (nickname, email) => {
    setUser({ nickname, email });
  };

  const logout = () => {
    setUser({ nickname: null, email: null });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
