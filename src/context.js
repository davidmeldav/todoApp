import React, { createContext,useState } from "react";

export const Language = createContext();

const LanguageProvider = ({ children }) => {
  const [lang, setlang] = useState(()=>{
   return "español"
  });
  const value={
    lang,
    setlangAndSave:(langText)=>{
      setlang(langText);
    }
  }
  return (
    <Language.Provider value={value}>
      {children}
    </Language.Provider>
  );
}

export default{
  LanguageProvider  
}