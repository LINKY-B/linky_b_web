import { createSlice } from "@reduxjs/toolkit";
import { getInitialMemo, getRecentMemo, postMemo } from "./memoThunk";

const initialState = {
    memos: [],
    isLoading: true,
    isAsyncError: false,
    focused: false,
    title: '',
    body: '',
    cursor: 0
}

const memoSlice = createSlice({
    name: 'memo',
    initialState,
    reducers: {
        focusInput: (state) => {
            state.focused = true;
        },
        blurInput: (state) => {
            state.focused = false;
        },
        changeInput: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
            return state;
        },
        resetInput: (state) => {
            state.title = '';
            state.body = '';
            state.focused = false;
            console.log('reset input!');
        },
        setCursor: (state, action) => {
            state.cursor = action.payload.cursor;
        }
    },
    extraReducers: (build) => {
        build
            .addCase(getInitialMemo.pending, (state) => {
                state.isLoading = true;
                state.isAsyncError = false;
            })
            .addCase(getInitialMemo.fulfilled, (state, action) => {
                state.memos = action.payload;
                state.cursor = action.payload[0].id;
                state.isLoading = false;
            })
            .addCase(getInitialMemo.rejected, (state) => {
                state.isLoading = false;
                state.isAsyncError = true;
            })
            .addCase(getRecentMemo.fulfilled, (state, action) => {
                console.log('get recent memo is fulfilled: ', action.payload);
                state.memos = [...action.payload, ...state.memos];
                state.cursor = action.payload[0]?.id || state.cursor;
            })
            .addCase(postMemo.fulfilled, (state) => {
                console.log('post memo is fullied!');
            })
            .addCase(postMemo.rejected, (state) => {
                state.isAsyncError = true;
            })
    }
})

export const memoReducer = memoSlice.reducer;
export const memoActions = memoSlice.actions;
// export const { focusInput, blurInput, changeInput, resetInput } = memoActions;