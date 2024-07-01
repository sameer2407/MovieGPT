import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: false,
  reducers: {
    toggleGPT: (state) => {
      return !state;
    },
  },
});

export const { toggleGPT } = gptSlice.actions;
export default gptSlice.reducer;
