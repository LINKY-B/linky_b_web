import { configureStore } from "@reduxjs/toolkit";
import { matchReducer } from "./ducks/matchSlice";
import termsServiceReducer from "./ducks/termsServiceSlice";

export const store = configureStore({
  reducer: {
    match: matchReducer,
    termsService: termsServiceReducer,
  },
});
