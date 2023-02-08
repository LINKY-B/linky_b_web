import { createSlice } from "@reduxjs/toolkit";

export const MATCH_MODAL_TYPES = {
    NONE: "MATCH_MODAL_TYPES/NONE",
    APPROVE: "MATCH_MODAL_TYPES/APPROVE",
    APPROVE_ALL: "MATCH_MODAL_TYPES/APPROVE_ALL",
    REJECT: "MATCH_MODAL_TYPES/REJECT",
    DELETE: "MATCH_MODAL_TYPES/DELETE",
    BLOCK: "MATCH_MODAL_TYPES/BLOCK",
    REPORT: "MATCH_MODAL_TYPES/REPORT"
};

const initialState = {
    userId: '',
    userNickname: '',
    modalType: MATCH_MODAL_TYPES.NONE,
}

const matchSlice = createSlice({
    name: 'match',
    initialState,
    reducers: {
        setMatchInfo: (state, action) => {
            const { userId, userNickname } = action.payload;
            state.userId = userId;
            state.userNickname = userNickname;
        },
        setMatchModalType: (state, action) => {
            state.modalType = action.payload;
        },
        showModal: (state, action) => {
            const { userId, userNickname, modalType } = action.payload;
            state.userId = userId;
            state.userNickname = userNickname;
            state.modalType = modalType;
        },
        resetModal: (state) => {
            state.userId = null;
            state.userNickname = null;
            state.modalType = MATCH_MODAL_TYPES.NONE
        }
    }
})

export const matchReducer = matchSlice.reducer;
export const matchActions = matchSlice.actions;