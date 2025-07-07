import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items:[],
    },
    reducers:{
        addItem:(state, action) => {
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state) =>{
            state.items.length = 0; // mutate kr rha hai state reference ko 
            // or we can something like return { items:[]} that instead of mutating, returns a new state
        }
    }
})

export const { addItem, removeitem, clearCart}=cartSlice.actions;

export default cartSlice.reducer;


