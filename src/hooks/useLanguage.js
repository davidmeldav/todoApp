import React ,{createContext ,useState, useContext} from 'react';

 const languageContext = createContext({lang:"es"});

export const LanguageProvider = ({children})=>{
     const [lang, setLang] = useState(()=>{
        return "español"
       });
   
    const value={
        lang,
        setLangAndSave:(langText)=>{
          setLang(langText);
        }
      }
    return(
        <languageContext.Provider value={value}>
            {children}
        </languageContext.Provider>
    )
}

export const useLanguage =()=>
    {
         return useContext(languageContext);   
    }


