import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import uniqid from 'uniqid';
import { useState, useEffect } from 'react';
import { totalCount } from '../redux/countSlice';
import Link from 'next/Link';
const ShoppingCart = () => {
    const [total,setTotal] = useState(0);
    const items = useSelector((state) => state.bag)

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
            {/*when showing empty bag display, center the content*/}
            <div className="cartList" style={{alignItems: total===0 ? "center" : null, justifyContent:total===0 ? "center" : null}}>
                {/*display for empty bag */}
                {total === 0 ?
                <div className="emptyBag">
                <h1>Looks like your bag is empty!</h1>
                <p><Link href="/">Get Shopping</Link></p>
                </div>
                
                : null
                }{/*map the items and put them in a list */}
                  <ul className = "shoppingCart">
                 { items.map((item)=> (
                     <li key={uniqid()} >
                  <CartItem total = {item.total}coverPhoto={item.image} title ={item.title} price = {item.price} date = {item.date} id = {item.id}/> 
                  </li>
                 ))}
                 </ul>
            </div>
            {/*display the total at checkout */}
            <div className="checkOut">
                <p className="taxes">Taxes will be calculated at checkout.</p>
                <div className = "total"><p>Total</p><p>${total}</p></div>  
                <div className="coupon">
                    <div><input type = "checkbox" id="coupon" name="coupon"/>
                    <label for="coupon">Coupon Code</label></div>
                    <button>Checkout</button>  
                </div>
            </div>
        </div> 
 
    )
}
export default ShoppingCart;