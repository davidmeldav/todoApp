import React, { createContext,useState } from "react";

export const Language = createContext();

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(()=>{
   return "español"
  });
  const value={
    lang,
    setLangAndSave:(langText)=>{
      setLang(langText);
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