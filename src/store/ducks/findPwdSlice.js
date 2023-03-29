import { createSlice } from "@reduxjs/toolkit";

export const findPwdSlice = createSlice({
    name: "findPwd",
    initialState: {
        isLoading: false,
        certifiedNum: null,
        error: null,
    },
});
