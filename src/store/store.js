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
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
  //추후 서버연결시 CORS에러가 난다면 미들웨어 로직 추가 고려
});
