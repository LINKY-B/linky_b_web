import { createSlice } from "@reduxjs/toolkit";

export const MODAL_TYPES = {
    NONE: "MODAL_TYPES/NONE",
    APPROVE: "MODAL_TYPES/APPROVE",
    APPROVE_ALL: "MODAL_TYPES/APPROVE_ALL",
    REJECT: "MODAL_TYPES/REJECT",
    DELETE: "MODAL_TYPES/DELETE",
    BLOCK: "MODAL_TYPES/BLOCK",
    REPORT: "MODAL_TYPES/REPORT",
    EXIT: "MODAL_TYPES/EXIT",
    ETC: "MODAL_TYPES/ETC"
};

const initialState = {
    userId: '',
    userNickname: '',

    chatRoomId: '',

    content: '',
    modalType: MODAL_TYPES.NONE,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal: (state, action) => {
            const { userId, userNickname, chatRoomId, content, modalType } = action.payload;
            state.userId = userId || '';
            state.userNickname = userNickname || '';
            state.chatRoomId = chatRoomId || '';
            state.content = content || '';
            state.modalType = modalType;
        },
        resetModal: (state) => {
            state.userId = '';
            state.userNickname = '';
            state.chatRoomId = '';
            state.content = '';
            state.modalType = MODAL_TYPES.NONE
        }
    }
})

export const modalReducer = modalSlice.reducer;
export const modalActions = modalSlice.actions;