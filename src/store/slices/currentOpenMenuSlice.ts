import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentOpenMenu: "",
};

export const currentOpenMenuSlice = createSlice({
  name: "currentOpenMenu",
  initialState,
  reducers: {
    update: (state, action) => {
      state.currentOpenMenu = action.payload;
    },
  },
});

export const { update } = currentOpenMenuSlice.actions;
export default currentOpenMenuSlice.reducer;
