import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./ducks/authSlice";
import { chatReducer } from "./ducks/chatSlice";
import { modalReducer } from "./ducks/modalSlice";
import termsServiceReducer from "./ducks/termsServiceSlice";
import signUpReducer from "./ducks/signUpSlice";
import { homeReducer } from "./ducks/homeSlice";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  modal: modalReducer,
  termsService: termsServiceReducer,
  auth: authReducer,
  // persisted: persistedReducer,
  chat: chatReducer,
  signUp: signUpReducer,
  home: homeReducer,
});
export const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ["auth"],
  // blacklist -> 그것만 제외합니다
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: [thunk],

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
  // 추후 서버연결시 CORS에러가 난다면 미들웨어 로직 추가 고려
});

export const persistor = persistStore(store);
