import { createSlice } from "@reduxjs/toolkit";

export const loadingbarSlice = createSlice({
  name: "loadingbar",
  initialState: {
    loadingbar: 0,
  },
  reducers: {
    setProgress: (state, { payload }) => {
        state.loadingbar = payload
    },
  },
});

export const {setProgress} = loadingbarSlice.actions
export default loadingbarSlice.reducer;
