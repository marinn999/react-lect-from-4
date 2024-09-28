import React, { createContext, useState } from "react";

export const langContext = createContext();

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("eng");
  const changeLang = (value) => setLang(value);
  const contextValue = {
    changeLang,
    lang,
    vocabularyENG: {
      hello: "hello",
    },
    vocabularyUKR: {
      hello: "привіт",
    },
  };
  return (
    <langContext.Provider value={contextValue}>{children}</langContext.Provider>
  );
};

export default LangProvider;
