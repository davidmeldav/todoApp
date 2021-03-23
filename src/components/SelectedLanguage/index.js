import React from 'react';

const LanguageApp = ({lang}) => {
    return <div>El idioma seleccionado es {lang}</div>
}

export const SelectedLanguage = React.memo(LanguageApp)