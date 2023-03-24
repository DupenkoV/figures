import { createSlice } from "@reduxjs/toolkit";

const columnNumberSlice = createSlice({
    name: "@@numbersOfColumn",
    initialState: 4,
    reducers: {
        selectNumbers: (state, action) => state = action.payload,
    }
})

export const {selectNumbers} = columnNumberSlice.actions;
export const columnReducer = columnNumberSlice.reducer;