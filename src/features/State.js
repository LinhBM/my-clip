import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "linh",
  initialState: [],
  reducers: {
    addState: (state, action) => {
      state.push(action.payload);
    },
  },
});
