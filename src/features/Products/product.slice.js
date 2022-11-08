import { createSlice } from '@reduxjs/toolkit'
import { productApi } from './products.service';


const initialState = {
  status: "",
  products: [],
}

const productSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(productApi.endpoints.getProducts.matchFulfilled, (state, action) => {
      console.log(action);
      state.products = action.payload
    });
  }
});

export const { } = productSlice.actions

export default productSlice.reducer