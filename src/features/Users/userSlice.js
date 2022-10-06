import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("posts/getPost", async () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
});

const userAdapter = createEntityAdapter({
  // sortComparer: (a, b) => a.username.localeCompare(b.username),
});

const sliceUser = createSlice({
  name: "linh",
  initialState: userAdapter.getInitialState({
    loading: false,
  }),
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.loading = false;
      // state.posts = action.payload;
      userAdapter.setAll(state, action.payload);
    },
    [getUser.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const userSelectors = userAdapter.getSelectors(
  (state) => state.storeUser
);

export default sliceUser.reducer;
