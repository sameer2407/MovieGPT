import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import loginReducer from "./loginSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import watchlistReducer from "./watchlistSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    flag: loginReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    watchlist: watchlistReducer,
  },
});

export default appStore;
