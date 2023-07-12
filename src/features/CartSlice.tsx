import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export type Item = {
  id: string;
  name: string;
  description: string;
  price: number;
};

type Cart = {
  cartItems: Item[];
  totalPrice?: number | null;
};

const initialState: Cart = {
  cartItems: [],
  totalPrice: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Item>) => {
      const newItem = action.payload;
      state.cartItems.push(newItem);
      state.totalPrice = (state.totalPrice || 0) + newItem.price;
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const itemIdToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== itemIdToRemove
      );
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price,
        0
      );
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = (state: RootState): Item[] =>
  state.cart.cartItems;
