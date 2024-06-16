import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import loginReducer from "./loginSlice";
import moviesReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    flag: loginReducer,
    movies: moviesReducer,
  },
});

export default appStore;
