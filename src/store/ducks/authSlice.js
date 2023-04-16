import { createSlice } from "@reduxjs/toolkit";

// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
// };
export const authSlice = createSlice({
  name: "auth",

  initialState: {
    isLogined: false, //일단 열어둠
    accessToken: null,
    isLoading: false,
    error: null,
  },

  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isLogined = true;
      state.accessToken = action.payload.accessToken;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.isLogined = false;
      state.accessToken = null;
      state.error = action.payload.response.data;
    },
    logoutSuccess: (state) => {
      state.isLoading = false;
      state.isLogined = false;
      state.accessToken = null;
      state.error = null;
    },
  },
});

// const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

export const { loginRequest, loginSuccess, loginFailure, logoutSuccess } =
  authSlice.actions;

export const authReducer = authSlice.reducer;
// export default persistedReducer;
