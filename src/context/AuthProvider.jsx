import React, { createContext, useState } from "react";
import toast from "react-hot-toast";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const login = (username) => {
    //Тільки адмін і Марина може залогінитись
    if (username === "admin" || username === "Marina") {
      setUser(username);
    } else {
      toast.error("Invalid account!!");
    }
  };
  const logout = () => {
    setUser("");
  };
  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export default AuthProvider;

//Сотворила компонент AuthProvuder як обгортку, зайшла в main, огорнула Арр і
//тепер Арр став чілдреном і містить все, що я передам в провайдер
