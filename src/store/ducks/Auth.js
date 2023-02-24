import { createSlice } from "../../../node_modules/@reduxjs/toolkit/dist/createSlice";

export const TOKEN_TIME_OUT=600*1000;

export const tokenSlice=createSlice({
    name: "authToken",
    initialState:{
        authenticated:false,
        accessToken:null,
        expireTime:null,
    },
    reducers:{
        SET_TOKEN:(state, action)=>{
            state.authenticated=true;
            state.accessToken=action.payload;
            state.expireTime=new Date().getTime()+ TOKEN_TIME_OUT;
            
        }
    }
})