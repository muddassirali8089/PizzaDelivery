// store.js
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import cartReducer from './features/cart/cartSlice.js'

export const store = configureStore({
  reducer: {
    user: userReducer,
     cart : cartReducer,
  },
})
