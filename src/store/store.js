import { configureStore } from "@reduxjs/toolkit";
import { chatReducer } from "./ducks/chatSlice";
import { modalReducer } from "./ducks/modalSlice";
import termsServiceReducer from "./ducks/termsServiceSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    termsService: termsServiceReducer,
    chat: chatReducer
  },
});
