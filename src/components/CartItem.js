import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity } from '../redux/bagSlice';
import { increaseQuantity, deleteItem } from '../redux/bagSlice';

const CartItem = ({id, total, title, price, date,coverPhoto}) => {
    let url="";
    const items = useSelector((state)=>state.bag);
    //get specific item
    const item = items.filter(item=> {
        return item.id === id;
    })
    
    console.log(item);
    const dispatch = useDispatch();
    const decreaseHandler = () => {
        dispatch(
            decreaseQuantity({title})
        )
    };
    const increaseHandler = () => {
        dispatch(
            increaseQuantity({title})
        )
    };
    const deleteHandler = ()=>{
        dispatch(
            deleteItem({id})
        )
    }
    
    //import all of the images ahead of time so they can be compiled by webpack
    switch(coverPhoto){
        case "elephant":
        url=require('../images/elephant.jpg');
        break;
        case "temple":
        url=require('../images/temple.jpg');
        break;
        case "beach":
        url=require('../images/beach.jpg');
        break;
        case "food":
        url=require('../images/food.jpg');
        break;
        case "halong":
        url=require('../images/halong.jpg');
        break;
        case "hanoi":
        url= require('../images/hanoi.jpg');
        break;
        case"loop":
        url=require('../images/loop.jpg')
        break;
        case "market":
        url=require('../images/market.jpg');
        break;
        case "rajaampat":
        url=require('../images/rajaampat.jpg');
        break;
        case "kelimutu":
        url=require('../images/kelimutu.jpg');
        break;
        case "komodo" :
        url=require('../images/komodo.jpg');
        break;
        case "kuta":
        url=require('../images/kuta.jpg');
        break;
        default:
        url=require('../images/cover.jpg');
    }
    return(
        <div className = "cartItem">
            <img src={url}/>
            <div className="itemInfo">
                <div className="itemName">
                    <h1>{title}</h1>
                    <p>{date}</p>
                </div>
                <div className="changeQuantity">
                    <button onClick={decreaseHandler} className="delete">-</button>
                    <div className="bagCount">{item[0].counter}</div>
                    <button onClick={increaseHandler} className="add">+</button>
                    <button className="remove"onClick={deleteHandler}>REMOVE</button>
                </div>
            </div>
            <p className="totalItem">${total}</p>
        </div>
    )
}
export default CartItem;