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
    console.log(items);
    const dispatch = useDispatch();
    let addTotal = 0
    let addItems = 0;
    const calcTotal = async (items) => {
        //reset to 0
        setTotal(0);
        Promise.all(items.map((item) => (
            //add total based on the total of each item
            addTotal += item.total,
            addItems += item.counter
           // setTotal((prev)=> prev + item.price)
        ))).then(() => {setTotal(addTotal)}).then(() => 
            dispatch(
                totalCount({
                    total:total,
                    count:addItems,
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
        <div id = "modal" className="modal">
            <div className="cartList">
                  <ul className = "shoppingCart">
                 { items.map((item)=> (
                     <li key={uniqid()} >
                  <CartItem total = {item.total}coverPhoto={item.image} title ={item.title} price = {item.price} date = {item.date} id = {item.id}/> 
                  </li>
                 ))}
                 </ul>
            </div>
            <div className="checkOut">
                <p className="taxes">Taxes will be calculated at checkout.</p>
                <div className = "total"><p>Total</p><p>${total}</p></div>  
                <button>Checkout</button>  
            </div>
        </div> 
 
    )
}
export default ShoppingCart;