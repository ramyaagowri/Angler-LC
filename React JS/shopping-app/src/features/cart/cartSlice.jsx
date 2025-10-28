import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    message: null,
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {
        existing.quantity += 1;
        state.message = `${existing.product_name} quantity increased!`;
        state.error = null;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        state.message = `${action.payload.product_name} added to cart!`;
        state.error = null;
      }
    },

    removeFromCart: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        state.items = state.items.filter((i) => i.id !== action.payload);
        state.message = `${item.product_name} removed from cart!`;
        state.error = null;
      } else {
        state.error = "Item not found in cart!";
        state.message = null;
      }
    },

    increment: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.message = `${item.product_name} quantity increased!`;
        state.error = null;
      } else {
        state.error = "Item not found!";
        state.message = null;
      }
    },

    decrement: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.message = `${item.product_name} quantity decreased!`;
          state.error = null;
        } else {
          state.error = "Minimum quantity reached!";
          state.message = null;
        }
      } else {
        state.error = "Item not found!";
        state.message = null;
      }
    },

    clearMessages: (state) => {
      state.message = null;
      state.error = null;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increment,
  decrement,
  clearMessages,
} = cartSlice.actions;

export default cartSlice.reducer;
