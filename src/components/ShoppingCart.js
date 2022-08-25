import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import uniqid from 'uniqid';
import { useState, useEffect } from 'react';
const ShoppingCart = () => {
    const [total,setTotal] = useState(0);
    const items = useSelector((state) => state.bag)
    const calcTotal = (items) => {
        //reset to 0
        setTotal(0);
        items.map((item) => (
            setTotal((prev)=> prev + Number(item.price.substr(1)))
        ))
    }
    useEffect(() => {
        calcTotal(items);
  }, [items]);
    return(  
 <ul className = "shoppingCart">
   
       { items.map((item)=> (
           <li key={uniqid()} >
        <CartItem title ={item.title} price = {item.price} date = {item.date} id = {item.id}/> 
        
        </li>
       ))}
     
       <p>${total}</p>

</ul>
        )
}
export default ShoppingCart;