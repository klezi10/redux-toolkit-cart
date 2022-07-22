import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0
   },
  reducers: {
    addItems(state, action) {
      state.quantity++;
    },
    removeItems(state) {
      state.quantity--;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
