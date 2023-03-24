import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    'red': true,
    'blue': true,
    'yellow': true,
    'green': true,
    'circle': true,
    'square': true,
}

const filterSlice = createSlice({
    name: '@@filter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            const {id, checked} = action.payload;
            state[id] = checked;
        }
    }
})

export const {setFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

