import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export type Item = {
  id: string;
  name: string;
  description: string;
  price: number;
  qty: number;
};

type CartState = {
  cartItems: Item[];
  totalPrice: number;
};

const initialState: CartState = {
  cartItems: [],
  totalPrice: -0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state: CartState, action: PayloadAction<Item>) => {
      const { id, name, description, price } = action.payload;

      const filteredCart: Item[] = state.cartItems.filter(
        (item) => item.id !== id
      );

      const itemInCart: Item | undefined = state.cartItems.find(
        (item) => item.id === id
      );

      const qty: number = itemInCart ? itemInCart.qty + 1 : 1;

      return {
        ...initialState,
        cartItems: [...filteredCart, { id, name, description, price, qty }],
      };
    },
    removeItemFromCart: (state: CartState, action: PayloadAction<Item>) => {
      const { id } = action.payload;

      const filteredCart: Item[] = state.cartItems.filter(
        (item) => item.id !== id
      );

      return {
        ...initialState,
        cartItems: [...filteredCart],
      };
    },
    RemoveFromQuantity: (state: CartState, action: PayloadAction<Item>) => {
      const { id, qty } = action.payload;

      const itemInCart: Item | undefined = state.cartItems.find(
        (item) => item.id === id
      );

      if (!itemInCart) {
        throw new Error("Item is not in cart");
      }

      const updatedItem: Item = { ...itemInCart, qty };

      const filteredCart: Item[] = state.cartItems.filter(
        (item) => item.id !== id
      );

      return {
        ...initialState,
        cartItems: [...[...filteredCart, updatedItem]],
      };
    },
    submit: () => {
      return initialState;
    },
  },
});

export const { addItemToCart, removeItemFromCart, submit } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = (state: RootState): Item[] =>
  state.cart.cartItems;

export const selectTotalPrice = (state: RootState): number =>
  state.cart.totalPrice;
