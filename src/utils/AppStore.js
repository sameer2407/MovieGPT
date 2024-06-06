import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import loginReducer from "./loginSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    flag: loginReducer,
  },
});

export default appStore;
