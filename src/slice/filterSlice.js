import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const filterSlice = createSlice({
    name: '@@filter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            if(!(state.find(item => item === action.payload))) {
                state.push(action.payload)
            } else {
                let item = state.indexOf(action.payload)
                state.splice(item, 1)
            }
        }
    }
})

export const {setFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

