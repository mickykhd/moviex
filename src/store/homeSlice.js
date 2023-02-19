import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGerners: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { getApiConfiguration, getGerners } = homeSlice.actions;

export default homeSlice.reducer;
