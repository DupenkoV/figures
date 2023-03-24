import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    'красный': true,
    'синий': true,
    'желтый': true,
    'зеленый': true,
    'круги': true,
    'квадраты': true,
}

const filterSlice = createSlice({
    name: '@@filter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            const {label, checked} = action.payload;
            state[label] = checked;
        }
    }
})

export const {setFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

