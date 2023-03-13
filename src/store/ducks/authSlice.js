import { createSlice } from "@reduxjs/toolkit";

// export const TOKEN_TIME_OUT = 600 * 1000;

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
      state.error = action.payload; //id에러 pw에러 나눠져야함
    },
    logoutSuccess: (state) => {
      state.isLoading = false;
      state.isLogined = false;
      state.accessToken = null;
      state.error = null;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logoutSuccess } =
  authSlice.actions;

export default authSlice.reducer;
