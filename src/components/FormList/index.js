import React, {useCallback, useState} from 'react'
import {ButtonForm} from '../ButtonForm'

const FormList=({onSubmit}) => {
    const [value,setValue]=useState("") 
    const internalSubmit = useCallback(
        (e,value) => {
            e.preventDefault();
            console.log("value")
            console.log(value)
            onSubmit(value);
        },
        [],
      );
       
  
    return( <form onSubmit={(e)=>internalSubmit(e,value)}>
            <input onChange={e => setValue(e.target.value)} type="text"></input>
            <ButtonForm/>
        </form>)
}

export default FormList;