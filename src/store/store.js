import { configureStore } from "@reduxjs/toolkit";
import { matchReducer } from "./ducks/matchSlice";
import { authSlice } from "./ducks/authSlice";
import authReducer from "./ducks/authSlice";

import termsServiceReducer from "./ducks/termsServiceSlice";

export const store = configureStore({
  reducer: {
    match: matchReducer,
    termsService: termsServiceReducer,
    auth: authReducer,
  },
});
