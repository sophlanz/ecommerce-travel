import { createSlice } from "@reduxjs/toolkit";
export const countSlice = createSlice({
    name:"count",
    initialState: [{
        total:0,
        count:0}],
    reducers: {
        totalCount: (state,action) => {
            const total = {
                total: action.payload.total,
                count: action.payload.count
            };
            //clear the old state
            state.splice(0,state.length)
            state.push(total);
            console.log(total);
            
            
    },
}
});
export const { totalCount } = countSlice.actions;
export default countSlice.reducer;