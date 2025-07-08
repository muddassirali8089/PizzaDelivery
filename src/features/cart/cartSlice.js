/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   addItem(state, action) {
    const pizza = action.payload;
    state.cart.push({
      pizzaId: pizza.pizzaId,
      name: pizza.name,
      quantity: pizza.quantity,
      unitPrice: pizza.unitPrice,
      totalPrice: pizza.unitPrice * pizza.quantity,
    });
  }
,
    deleteItem(state, action) {
      const id = action.payload;
      state.cart = state.cart.filter((item) => item.pizzaId !== id);
    },

    increaseItemQuantity(state, action) {
      const id = action.payload;
      const item = state.cart.find((item) => item.pizzaId === id);

      if (item) {
        item.quantity++;
        item.totalPrice = item.unitPrice * item.quantity;
      }
    },

    decreaseItemQuantity(state, action) {
  const id = action.payload;
  const item = state.cart.find((item) => item.pizzaId === id);

  if (item) {
    if (item.quantity > 1) {
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
    } else {
       cartSlice.caseReducers.deleteItem(state,action);
    }
  }
}
,

    removeCartItem(state, action) {
      const id = action.payload;
      state.cart = state.cart.filter((item) => item.pizzaId !== id);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeCartItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;


export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((total, item) => total + item.quantity, 0);

export const getTotalPrice = (state) =>
  state.cart.cart.reduce((total, item) => total + item.totalPrice, 0);

export const getCurrentQuantityById = id => (state) =>
  state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0

