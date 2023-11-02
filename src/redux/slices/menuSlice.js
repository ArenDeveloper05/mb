import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuRender: true,
};

const menuSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    changeMenuRender(state, { payload }) {
      state.menuRender = payload;
      //   state.menuRender = !state.menuRender;
    },
  },
});

export default menuSlice.reducer;
export const { changeMenuRender } = menuSlice.actions;
