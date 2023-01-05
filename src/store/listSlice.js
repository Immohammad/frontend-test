import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
    contents: [],
  },
  reducers: {
    update: (state, action) => {
      state.contents = action.payload;
    },
    deleteCard: (state, action) => {
      state.contents = state.contents.filter((image) => image.id != action.payload);
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

export const { update, deleteCard } = listSlice.actions;

export default listSlice.reducer;
