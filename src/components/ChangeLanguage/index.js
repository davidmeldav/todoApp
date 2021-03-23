import React ,{useCallback}from 'react';

export const SelectLanguage=({change})=> {
 
  const handleSubmit  = useCallback(
      (e,value) => {
          e.preventDefault();
       
          change(value)
      },
      [],
  );
  
    return (
        <select onChange={(e)=>handleSubmit(e,e.target.value)}>
            <option value="español" >español</option>
            <option value="inglés" >inglés</option>
        </select>
    )
}

export const ChangeLanguage = React.memo(SelectLanguage)