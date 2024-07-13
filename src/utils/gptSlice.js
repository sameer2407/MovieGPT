import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    movieNames: [],
    movieResults: [],
    toggle: false,
  },
  reducers: {
    toggleGPT: (state) => {
      state.toggle = !state.toggle; // Correctly toggle the state
    },
    addGptMoviesResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGPT, addGptMoviesResult } = gptSlice.actions;
export default gptSlice.reducer;
