import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity } from '../redux/bagSlice';
import { increaseQuantity } from '../redux/bagSlice';

const CartItem = ({id, total, title, price, date,coverPhoto}) => {
    let url="";
    const items = useSelector((state)=>state.bag);
    //get specific item
    const item = items.filter(item=> {
        return item.id === id;
    })
    
    console.log(item);
    const dispatch = useDispatch();
    const deleteHandler = () => {
        dispatch(
            decreaseQuantity({id})
        )
    };
    const increaseHandler = () => {
        dispatch(
            increaseQuantity({id})
        )
    };
    switch(coverPhoto){
        case "elephant":
        url=require('../images/elephant.jpg');
        break;

    }
    return(
        <div className = "cartItem">
            <img src={url}/>
            <p>{title}</p>
            <div className="changeQuantity"><button onClick={deleteHandler} className="delete">-</button><div className="bagCount">{item[0].counter}</div><button onClick={increaseHandler} className="add">+</button></div>
            <p>${total}</p>
            <p>{date}</p>
           
        </div>
    )
}
export default CartItem;