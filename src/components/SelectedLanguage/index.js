import React, {useContext} from 'react';
import {Language} from '../../context'
import {useLanguage} from '../../hooks/useLanguage'
const LanguageApp = () => {
    

    //así sería sin desestructurar
    // const data=useLanguage();
    // const lang=data.lang;
    const {lang}=useLanguage();
    
    return <div>El idioma seleccionado es {lang}</div>
}

export const SelectedLanguage = React.memo(LanguageApp)