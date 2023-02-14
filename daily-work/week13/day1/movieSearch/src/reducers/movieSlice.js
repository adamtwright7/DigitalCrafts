import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    searchMovie: (state, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchMovie } = movieSlice.actions;

export default movieSlice.reducer;
