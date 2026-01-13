import axios from 'axios';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchProduct=createAsyncThunk('products/fetch',async(_,thunkAPI)=>{
    try{
        const products=await axios.get("http://localhost:5000/api/products");
        res.data;
    }catch(error){
          return thunkAPI.rejectWithValue(
            error.respoense?.data?.message||error.message
        )
    }
})

export const addProduct=createAsyncThunk('products/add',async(productData,thunkAPI)=>{
      try{
          const product=await axios.post("http://localhost:5000/api/products",productData);
           return res.data;
      }catch(error){
         return thunkAPI.rejectWithValue(
            error.respoense?.data?.message||error.message
        )
      }
})

const productSlice=createSlice({
    name:'products',
    initalState:{
        productList:[],
        isLoading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder

        //getProduct
        .addCase(fetchProduct.pending,(state)=>{
             state.isLoading=true;
             state.error=null;
        })
        .addCase(fetchProduct.fulfilled,(state,action)=>{
             state.isLoading=false,
             state.productList=action.payload;
        })
        .addCase(fetchProduct.rejected,(state,action)=>{
             state.isLoading=false;
             state.error=action.payload;
        })

        //addProduct
        .addCase(addProduct.pending,(state)=>{
             state.isLoading=false;
             state.error=null;
        })
        .addCase(addProduct.fulfilled,(state)=>{
            state.isLoading=false;
            state.productList.push(action.payload);
        })
        .addCase(addProduct.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        });
    }

});

export default productSlice.reducer;