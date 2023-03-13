import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./ducks/authSlice";
import authReducer from "./ducks/authSlice";
import { chatReducer } from "./ducks/chatSlice";
import { modalReducer } from "./ducks/modalSlice";

import termsServiceReducer from "./ducks/termsServiceSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    termsService: termsServiceReducer,
    auth: authReducer,
    chat: chatReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
  //추후 서버연결시 CORS에러가 난다면 미들웨어 로직 추가 고려
});
