import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newsData: [],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    changeNewsDataAdmin(state, { payload }) {
      state.newsData = payload;
    },
  },
});

export default adminSlice.reducer;
export const { changeNewsDataAdmin } = adminSlice.actions;
