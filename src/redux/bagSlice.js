import { createSlice } from '@reduxjs/toolkit';
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
                date:action.payload.date
            };
            console.log(item);
            state.push(item);
        },
        deleteItem: (state,action) => {
            return state.filter((item)=> item.id !== action.payload.id )
        }
    },
});
export const { addToBag, deleteItem } = bagSlice.actions
export default bagSlice.reducer;