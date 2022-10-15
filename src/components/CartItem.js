import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity } from '../redux/bagSlice';
import { increaseQuantity, deleteItem } from '../redux/bagSlice';
import Image from 'next/image';
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
        case "elephant.jpg":
        url='/images/elephant.jpg'
        break;
        case "temple.jpg":
        url='/images/temple.jpg'
        break;
        case "beach.jpg":
        url='/images/beach.jpg'
        break;
        case "food.jpg":
        url='/images/food.jpg'
        break;
        case "halong.jpg":
        url='/images/halong.jpg'
        break;
        case "hanoi.jpg":
        url= '/images/hanoi.jpg'
        break;
        case"loop.jpg":
        url='/images/loop.jpg'
        break;
        case "market.jpg":
        url='/images/market.jpg'
        break;
        case "rajaampat.jpg":
        url='/images/rajaampat.jpg'
        break;
        case "kelimutu.jpg":
        url='/images/kelimutu.jpg'
        break;
        case "komodo.jpg" :
        url='/images/komodo.jpg'
        break;
        case "kuta.jpg":
        url='/images/kuta.jpg'
        break;
        default:
        url='/images/cover.jpg'
    }
    console.log(coverPhoto)
    console.log(url)
    return(
        <div className = "cartItem">
            <div className="cartImage">
            <Image src={url} layout="fill" objectFit="cover"/>
            </div>
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