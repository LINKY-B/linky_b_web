import { configureStore } from "@reduxjs/toolkit";
import { matchReducer } from "./ducks/matchSlice";
import termsServiceReducer from "./ducks/termsServiceSlice";
import signUpReducer from "./ducks/signUpSlice";

export const store = configureStore({
  reducer: {
    match: matchReducer,
    termsService: termsServiceReducer,
    signUp: signUpReducer,
  },
});
