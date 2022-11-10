import { createSlice } from '@reduxjs/toolkit'
import { productApi } from './products.service';


const initialState = {
  status: "",
  products: [],
  isWriteReviewOpen: false,
}

const productSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    toggleWriteReview(state) {
      state.isWriteReviewOpen = !state.isWriteReviewOpen
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(productApi.endpoints.getProducts.matchFulfilled, (state, action) => {
      // console.log(action);
      state.products = action.payload
    });

    builder.addMatcher(productApi.endpoints.updateReview.matchFulfilled, (state, action) => {
      // console.log(action)
      let idx = state.products.findIndex(product => product.id == action.payload.id)
      state.products[idx] = action.payload
    });
  }
});

export const { toggleWriteReview } = productSlice.actions

export default productSlice.reducer