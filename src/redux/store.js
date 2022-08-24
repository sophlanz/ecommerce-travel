import {configureStore} from '@reduxjs/toolkit';
import bagReducer from './bagSlice';
//creates stores and reducers, then exports
export default configureStore({
    reducer:{
        bag:bagReducer,
        
    },
})