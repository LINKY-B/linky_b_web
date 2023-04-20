import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchString: ''
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.searchString = action.payload;
        }
    }
})

export const homeReducer = homeSlice.reducer;
export const homeActions = homeSlice.actions;