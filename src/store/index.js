import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { quantity: 0, showCart: true };

const cartSlice = createSlice({
  name: "quantity",
  initialState,
  reducers: {
    addItems(state) {
      state.quantity++;
    },
    removeItems(state) {
      state.quantity--;
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;

export default store;
