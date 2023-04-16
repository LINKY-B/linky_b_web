import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import { authReducer } from "./ducks/authSlice";
import persistedReducer from "./ducks/authSlice";
import { chatReducer } from "./ducks/chatSlice";
import { modalReducer } from "./ducks/modalSlice";

import termsServiceReducer from "./ducks/termsServiceSlice";
import signUpReducer from "./ducks/signUpSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    termsService: termsServiceReducer,
    auth: authReducer,
    // persisted: persistedReducer,
    chat: chatReducer,
    signUp: signUpReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  //추후 서버연결시 CORS에러가 난다면 미들웨어 로직 추가 고려
});
