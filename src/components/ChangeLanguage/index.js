import React ,{useCallback}from 'react';

export const SelectLanguage=({change})=> {
 
  const handleSubmit  = useCallback(
      (e) => {
       
          change(e.target.value)
      },
      [],
  );
  
    return (
        <select onChange={handleSubmit}>
            <option value="español" >español</option>
            <option value="inglés" >inglés</option>
        </select>
    )
}

export const ChangeLanguage = React.memo(SelectLanguage)