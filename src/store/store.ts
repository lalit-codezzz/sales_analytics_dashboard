import { configureStore } from "@reduxjs/toolkit";
import currentOpenMenuSliceReducer from "./slices/currentOpenMenuSlice";
import productsSliceReducer from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    currentOpenMenu: currentOpenMenuSliceReducer,
    products: productsSliceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
