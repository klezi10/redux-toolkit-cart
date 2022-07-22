import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "quantity",
  initialState: { quantity: 0 },
  reducers: {
    addItems(state) {
      state.quantity++;
    },
    removeItems(state) {
      state.quantity--;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
