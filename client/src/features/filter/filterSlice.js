import { createSlice } from "@reduxjs/toolkit";

const filterSlice=createSlice({
    name:'filter',
    initialState:{
         search:"",
         category:"all",
    },
    reducers:{
        setSearch:(state,action)=>{
             state.search=action.payload;
        },
        setCategory:(state,action)=>{
             state.category=action.payload;
        }
    }
})

export const {setCategory,setSearch} =filterSlice.actions;
export default filterSlice.reducer;