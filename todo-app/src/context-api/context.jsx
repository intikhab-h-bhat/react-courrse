import {createContext,useState} from 'react'

export const CotextDemo=createContext(null);

export const ContextProvider=(props)=>{

    const [count,setCount]=useState(0);
    return(
        <CotextDemo.Provider value={{count,setCount,name:"Intikhab"}}>

        {props.children}

        </CotextDemo.Provider>

    )
}