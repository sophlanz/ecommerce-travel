import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import uniqid from 'uniqid';
const ShoppingCart = () => {
    const items = useSelector((state) => state.bag)
    return(  
 <ul className = "shoppingCart">
   
       { items.map((item)=> (
           <li key={uniqid()} >
        <CartItem title ={item.title} price = {item.price} date = {item.date} id = {item.id}/> 
        </li>
       ))}

</ul>
        )
}
export default ShoppingCart;