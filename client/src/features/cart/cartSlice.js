import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
         cartItems:[],
    },
    reducers:{
         addToCart:(state,action)=>{ 
           const item=state.cartItems.find((i)=>i._id===action.payload._id);
           if(item){
             item.qty+=1;
           }else{
             state.cartItems.push({...action.payload,qty:1});
           }
         },
         removeFromCart:(state,action)=>{
            const item=state.cartItems.find((i)=>i._id===action.payload._id);
           if(item.qty>1){
                item.qty-=1;
           }else{
               state.cartItems=state.cartItems.filter(i=>i._id!==action.payload._id);
           }
         }
    }
});

export const{addToCart,removeFromCart} =cartSlice.actions;
export default cartSlice.reducer;