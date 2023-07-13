import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Item } from "./CartSlice";
import axios from "axios";
import { RootState } from "../app/store";

type ItemState = {
  items: Item[];
  error?: string | null;
  isLoading: boolean;
};

const initialState: ItemState = {
  items: [],
  error: null,
  isLoading: false,
};

export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async (): Promise<Item[]> => {
    try {
      const response = await axios.get("http://localhost:4000/products");

      return response.data;
    } catch (error) {
      throw new Error("Something went wrong!");
    }
  }
);

const ItemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(fetchItems.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      });
  },
});

export default ItemsSlice.reducer;

export const selectAllItems = (state: RootState): Item[] => state.items.items;
