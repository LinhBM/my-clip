import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "linh",
  initialState: [
    { name: "111", password: "admin@123" },
    { name: "112", password: "admin@123" },
    { name: "113", password: "admin@123" },
  ],
  reducers: {
    user: (state, action) => {
      const numberPhone = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

      for (let i = 0; i < action.payload.name.length; i++)
        if (numberPhone.indexOf(action.payload.name[i]) === -1)
          console.log("Chỉ được nhập ký tự số");
    },
  },
});

const { reducer, actions } = slice;
export const { user } = actions;
export default reducer;
