import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import uniqid from 'uniqid';
import { useState, useEffect } from 'react';
import { totalCount } from '../redux/countSlice';
const ShoppingCart = () => {
    const [total,setTotal] = useState(0);
    const items = useSelector((state) => state.bag)
    console.log(items);
    const count = useSelector((state)=> state.count[0].count)
    const dispatch = useDispatch();
    const calcTotal = async (items) => {
        //reset to 0
        setTotal(0);
        let count = items.length;
        Promise.all(items.map((item) => (
            setTotal((prev)=> prev + item.price)
        ))).then(() => 
            dispatch(
                totalCount({
                    total:total,
                    count:count,
                })
            )
        )   
    };
    //inital render calculate total items, then monitor changes to the items array
    useEffect(() => {
        calcTotal(items);
  }, [items, total]);
  console.log(useSelector((state) => state.count[0].count));
    return(  
    <div id = "modal" className= "modal">
        <div className="modalLeft"></div>
        <div id = "modalRight" className="modalRight">
        <ul className = "shoppingCart">
       { items.map((item)=> (
           <li key={uniqid()} >
        <CartItem total = {item.total}coverPhoto={item.image} title ={item.title} price = {item.price} date = {item.date} id = {item.id}/> 
        </li>
       ))}
       </ul>
       <div className="checkOut">
       <p className="taxes">Taxes will be calculated at checkout.</p>
        <div className = "total"><p>Total</p><p>${total}</p></div>  
        <button>Checkout</button>  
       </div>
        </div> 
    </div>
        )
}
export default ShoppingCart;