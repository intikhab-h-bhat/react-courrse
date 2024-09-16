import React from 'react';
import { useCart } from '../context-api/CartContext';
const Cart=()=>{

    const cartitems=useCart();
    const total=cartitems.items.reduce((a,b)=> parseInt(a) + parseInt(b.price),0);
    return(
        <div className="cart">
            <h1>Cart</h1>
           {
            cartitems && cartitems.items.map(items=><li> {items.name}-{items.price}</li>)
           }
            <h5>Total: ${total}</h5>
        </div>

    );
}
export default Cart;