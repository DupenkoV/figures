import { configureStore } from "@reduxjs/toolkit";
import { columnReducer } from "./slice/numbersOfColumn";
import { shapesReducer } from "./slice/shapesSlice";
import { filterReducer } from "./slice/filterSlice";

export const store = configureStore({
    devTools: true,
    reducer: {
        numbersOfColumn: columnReducer,
        shapes: shapesReducer,
        filter: filterReducer,
    }
})
