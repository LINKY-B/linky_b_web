import { createSlice } from "@reduxjs/toolkit";
// import jwtDecode from "../../../node_modules/jwt-decode/index";
// import axios from "../../../node_modules/axios/index";

export const TOKEN_TIME_OUT = 600 * 1000;

export const authSlice = createSlice({
  name: "auth",

  initialState: {
    inLoggedIn: false,
    accessToken: null,
    refreshToken: null,
    loading: false,
    error: null,
  },

  reducers: {
    // SET_TOKEN: (state, action) => {
    //   state.authenticated = true;
    //   state.accessToken = action.payload;
    //   state.expireTime = new Date().getTime() + TOKEN_TIME_OUT;
    // },

    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.accessToken = null;
      state.refreshToken = null;

      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;
