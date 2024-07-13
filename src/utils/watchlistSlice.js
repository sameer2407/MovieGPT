import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: [],
  reducers: {
    addMovieToWatchlist: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeMovieFromWatchlist: (state, action) => {
      return state.filter((movieId) => movieId !== action.payload);
    },
  },
});

export const { addMovieToWatchlist, removeMovieFromWatchlist } =
  watchlistSlice.actions;

export default watchlistSlice.reducer;
