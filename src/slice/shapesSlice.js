import { createSlice } from "@reduxjs/toolkit";

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

export const shapesSlice = createSlice({
    name: "@@shapes",
    initialState,
    reducers: {
    }
})

export const shapesReducer = shapesSlice.reducer;
export const {addFilter} = shapesSlice.actions;