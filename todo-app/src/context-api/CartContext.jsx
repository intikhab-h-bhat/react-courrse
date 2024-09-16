import {createContext,useState,useContext} from 'react';

export const CartContext=createContext(null);

export const useCart=()=>{
    const cartitems=useContext(CartContext);
    return cartitems;
}


export const CartProvider=(props)=>{

const [items,setItems]=useState([]);

    return(
            <CartContext.Provider value={{items,setItems}}>
            {props.children}
            </CartContext.Provider>


    );

};