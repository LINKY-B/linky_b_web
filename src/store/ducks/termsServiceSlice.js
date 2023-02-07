import { createSlice } from "@reduxjs/toolkit";

const initialState = Array(8).fill(false);

const termsServiceSlice = createSlice({
  name: "termsService",
  initialState,
  reducers: {
    checkToggle: (state, action) => {
      state[action.payload] = !state[action.payload];
      if (state.slice(1).every((item) => item)) {
        state[0] = true;
      } else {
        state[0] = false;
      }
    },
    allAgree: (state) => {
      state = state.every((item) => item)
        ? Array(state.length).fill(false)
        : Array(state.length).fill(true);
      return state;
    },
  },
});

export default termsServiceSlice.reducer;
export const { checkToggle, allAgree } = termsServiceSlice.actions;
