import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listSearchKeyword: '',
    roomsInput: {} // {'chatRoomId' : input value} in the room
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setChatRoomSearchInput: (state, action) => {
            state.listSearchKeyword = action.payload;
        }
    },
});

export const chatReducer = chatSlice.reducer;
export const chatActions = chatSlice.actions;
