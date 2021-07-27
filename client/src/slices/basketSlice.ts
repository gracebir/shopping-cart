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
        removeFromBasket: (state, action) => {
            const index: number = state.items.findIndex(
                (baskItem: any) => baskItem.id === action.payload.id
            );
            let newBasket = [...state.items];
            if(index >= 0){
                newBasket.splice(index,1);
            } else{
                console.warn(`id item does not exists ${action.payload.id}`)
            }
            state.items = newBasket;
        }
    }
});

// we expore the action of basket
export const { addToBasket, removeFromBasket} = BasketSlice.actions;



// to create the reducer 
export default BasketSlice.reducer;


export const selectItems = (state:any) => state.basket.items;
export const selectTotal = (state:any) => state.basket.items.reduce((total:any,b:any)=> total + b.price,0);