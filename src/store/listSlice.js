import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
    contents: [],
  },
  reducers: {
    setContents: (state, action) => {
      state.contents = action.payload;
    },
    deleteCard: (state, action) => {
      state.contents = state.contents.filter((image) => image.id != action.payload);
    }
  },
});

export const { setContents, deleteCard } = listSlice.actions;

export default listSlice.reducer;
