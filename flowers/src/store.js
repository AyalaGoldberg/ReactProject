import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productRedux/productSlice';
import cartReducer from './components/shoppingCart/CartSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
