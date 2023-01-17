import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { customAxios } from "customAxios";

export const getInitialMemo = createAsyncThunk("/memo/getInitialMemo", async (payload, thunkOptions) => {
    try {
        const { data } = await customAxios.get('/memo/?_sort=id&_order=DESC&_limit=20');
        console.log(data);
        return data;
    } catch (error) {
        throw thunkOptions.rejectWithValue(error);
    }
})

export const getRecentMemo = createAsyncThunk("memo/getRecentMemo", async(payload, thunkOptions) => {
    try {
        const { cursor } = payload;
        const { data } = await customAxios.get(`/memo/?id_gte=${cursor+1}&_sort=id&_order=DESC&`);
        return data;
    } catch (error) {
        throw thunkOptions.rejectWithValue(error);
    }
})

export const postMemo = createAsyncThunk("/memo/postMemo", async (payload, thunkOptions) => {
    try {
        const { title, body } = payload;
        await axios.post('/memo', { title, body });
        return true;
    } catch (error) {
        thunkOptions.rejectWithValue(error);
    }
})