import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../redux/bagSlice';
const CartItem = ({id, title, price, date}) => {
    const dispatch = useDispatch();
    const deleteHandler = () => {
        dispatch(
            deleteItem({id})
        )
    };
    return(
        <div className = "cartItem">
            <p>{title}</p>
            <p>{price}</p>
            <p>{date}</p>
            <button onClick = {deleteHandler}>Delete</button>
        </div>
    )
}
export default CartItem;