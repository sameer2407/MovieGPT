import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "flag",
  initialState: false,
  reducers: {
    flagToggle: (state, action) => {
      return action.payload;
    },
  },
});

export const { flagToggle } = loginSlice.actions;
export default loginSlice.reducer;
