import { configureStore } from '@reduxjs/toolkit'
import cart from "../features/cart/cartSlice.js";
import product from "../features/products/productSlice.js"
import filter from "../features/filter/filterSlice.js"

const store=configureStore({
  reducer:{
    product,
    filter,
    cart
  }

})
export default store;