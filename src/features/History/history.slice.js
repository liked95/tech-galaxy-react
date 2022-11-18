import { createSlice } from '@reduxjs/toolkit'
import { historyApi } from './history.service';


const initialState = {
  status: "",
  purchases: [],
  isPurchaseHistoryOpen: false
}

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    togglePurchaseHistory(state) {
      state.isPurchaseHistoryOpen = !state.isPurchaseHistoryOpen
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(historyApi.endpoints.getHistory.matchFulfilled, (state, action) => {
      state.purchases = action.payload
    });

    builder.addMatcher(historyApi.endpoints.addToHistory.matchFulfilled, (state, action) => {
      state.purchases.unshift(action.payload)
    });
  }
});

export const { togglePurchaseHistory } = historySlice.actions

export default historySlice.reducer