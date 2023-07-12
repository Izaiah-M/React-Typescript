import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../features/CartSlice";
import ItemsReducer from "../features/ItemsSlice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
    items: ItemsReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
