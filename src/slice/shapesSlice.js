import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
      "form": "circle",
      "color": "blue",
      "dark": true
    },
    {
      "form": "square",
      "color": "yellow",
      "dark": false
    },	
    {
      "form": "square",
      "color": "yellow",
      "dark": false
    },	
    {
      "form": "circle",
      "color": "red",
      "dark": false
    },
    {
      "form": "circle",
      "color": "blue",
      "dark": true
    },
    {
      "form": "circle",
      "color": "green",
      "dark": false
    },	
    {
      "form": "circle",
      "color": "yellow",
      "dark": true
    },	
    {
      "form": "square",
      "color": "green",
      "dark": false
    },
    {
      "form": "square",
      "color": "yellow",
      "dark": false
    },
    {
      "form": "circle",
      "color": "green",
      "dark": true
    },	
    {
      "form": "square",
      "color": "blue",
      "dark": true
    },	
    {
      "form": "square",
      "color": "blue",
      "dark": false
    },	
    {
      "form": "square",
      "color": "blue",
      "dark": false
    },
    {
      "form": "triangle",
      "color": "red",
      "dark": true
    },	
    {
      "form": "circa",
      "color": "blue",
      "dark": false
    },	
    {
      "form": "square",
      "color": "blue",
      "dark": true
    },
    {
      "form": "circle",
      "color": "blue",
      "dark": true
    },
    {
      "form": "square",
      "color": "green",
      "dark": true
    },	
    {
      "form": "square",
      "color": "yellow",
      "dark": true
    },	
    {
      "form": "circle",
      "color": "green",
      "dark": false
    },
    {
      "form": "square",
      "color": "blue",
      "dark": false
    },
    {
      "form": "circle",
      "color": "yellow",
      "dark": true
    },	
    {
      "form": "square",
      "color": "green",
      "dark": true
    },	
    {
      "form": "square",
      "color": "yellow",
      "dark": false
    }
  ]

const initialStateId = initialState.map(item => {
  return {
    ...item,
    id: nanoid()
  }
})
export const shapesSlice = createSlice({
    name: "@@shapes",
    initialState: initialStateId,
    reducers: {
      getDark: (state) => {
        state = initialStateId
        return state.filter(item => item.dark === true)
      },
      getLigth: (state) => {
        state = initialStateId
        return state.filter(item => item.dark === false)
      },
      getAll: (state) => state = initialStateId
    }
})

export const shapesReducer = shapesSlice.reducer;
export const {getDark, getAll, getLigth} = shapesSlice.actions;