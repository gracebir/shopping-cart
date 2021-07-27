import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
}


export const BasketSlice = createSlice({
    name:'basket',
    initialState,
    reducers:{
        addToBasket: (state:any, action:any) => {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) => {}
    }
});

// we expore the action of basket
export const { addToBasket, removeFromBasket} = BasketSlice.actions;



// to create the reducer 
export default BasketSlice.reducer;


export const selectItems = (state:any) => state.basket.items;