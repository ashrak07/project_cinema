import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movieData: [],
  },
  reducers: {
    addMovies: (state, action) => {
      state.movieData = action.payload;
    },
  },
});

export const { addMovies } = movieSlice.actions;

export default movieSlice.reducer;
