import { configureStore } from "@reduxjs/toolkit";
import { matchReducer } from "./ducks/matchSlice";

export const store = configureStore({
    reducer: {
        match: matchReducer
    }
})