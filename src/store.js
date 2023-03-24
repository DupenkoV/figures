import { configureStore } from "@reduxjs/toolkit";
import { columnReducer } from "./slice/numbersOfColumn";

export const store = configureStore({
    devTools: true,
    reducer: {
        numbersOfColumn: columnReducer,
    }
})
