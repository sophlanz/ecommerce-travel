import { createSlice, current } from '@reduxjs/toolkit';
import uniqid from 'uniqid';
export const bagSlice = createSlice({
    name:'bag',
    initialState:[],
    reducers: {
        addToBag: (state,action) => {
            const item = {
                id:uniqid(),
                title:action.payload.title,
                price:action.payload.price,
                total:action.payload.price,
                date:action.payload.date,
                image:action.payload.image,
                counter:1
            };
            state.push(item);
            console.log(item);
         
        },
        increaseQuantity: (state,action) => {
            console.log(current(state));
            //get index of item to be changed
            const index = state.findIndex(item => item.id === action.payload.id)
            console.log(index);
            
            //map to get item with matching index, duplicate the item and change the quantity
            //also multiply the price
         return  state.map((item,i)=> (
                
                index===i ? {...item,counter:item.counter +1 ,total:item.total + item.price} : item
            )) 
        },
        decreaseQuantity: (state,action) => {
            //get index of item to be changed
            const index = state.findIndex(item => item.id === action.payload.id)
            //find object by index and check counter value
            let item = state.find(item => item.id === action.payload.id);
            //if counter is 1, we want to delete the object
            if(item.counter ===1 ) {
                return state.filter((item)=> item.id !== action.payload.id )
            } 
            //map to get item with matching index, duplicate the item and change the quantity
            //change price
            return  state.map((item,i)=> (
                index===i ? {...item,counter:item.counter - 1, total:item.total - item.price} : item
            ))
            
        },
       
}});
export const { addToBag, decreaseQuantity, totalCount, increaseQuantity } = bagSlice.actions
export default bagSlice.reducer;
