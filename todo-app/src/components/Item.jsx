import React from 'react';
import { useCart } from '../context-api/CartContext';

const Item=(props)=>{
const cart=useCart();
console.log('Cart',cart);
    return(
        <div className="item-cart">
            <h1>{props.name}</h1>
            <p>Price ${props.price}</p>
            <button onClick={()=>cart.setItems([...cart.items,{name:props.name,price:props.price},])}>Add to cart</button>


        </div>

    );
};

export default Item;