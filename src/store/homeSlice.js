import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    geners: {},
  },
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGerner: (state, action) => {
      state.geners = action.payload;
    },
  },
});

export const { getApiConfiguration, getGerner } = homeSlice.actions;

export default homeSlice.reducer;
