import {configureStore} from '@reduxjs/toolkit';
import bagReducer from './bagSlice';
import countReducer from './countSlice';
//creates stores and reducers, then exports
export default configureStore({
    reducer:{
        bag:bagReducer,
        count:countReducer,
        
    },
})