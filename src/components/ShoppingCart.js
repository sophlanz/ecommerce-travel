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
    const count = useSelector((state) =>state.count.count);
    console.log(count);
    const dispatch = useDispatch();

    const calcTotal = async (items) => {
        //reset to 0
        setTotal(0);
        let count = items.length;
        Promise.all(items.map((item) => (
            setTotal((prev)=> prev + Number(item.price.substr(1)))
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