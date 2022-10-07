import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const stateAdapter = createEntityAdapter({ selectId: (user) => user.username });

const slice = createSlice({
  name: "linh",
  initialState: stateAdapter.getInitialState({ loading: "idle" }),
  reducers: {
    stateAdd: stateAdapter.addOne,
    stateReceived(state, action) {
      state.loading = "pending";
      stateAdapter.setAll(state, action.payload);
    },
  },
});

export const stateSelectors = stateAdapter.getSelectors(
  (state) => state.storeState
);
export const { stateAdd, stateReceived, stateUpdate } = slice.actions;

export default slice.reducer;
