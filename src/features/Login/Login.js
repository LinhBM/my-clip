import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "linh",
  initialState: [],
  reducers: {
    user: (state, action) => {
      const numberPhone = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const userArr = [
        { name: 111, password: "admin@123" },
        { name: 112, password: "admin@123" },
        { name: 113, password: "admin@123" },
      ];

      for (let i = 0; i < action.payload.name.length; i++)
        if (numberPhone.indexOf(+action.payload.name[i]) === -1)
          console.log("Chỉ được nhập ký tự số");

      let index = 0;
      for (let i = 0; i < userArr.length; i++)
        if (
          (userArr[i].name === +action.payload.name) &
          (userArr[i].password === action.payload.password)
        )
          index++;
      if (index === 0) {
        console.log("sai so tai khoan");
        state.push({ check: false });
      }
    },
  },
});

const { reducer, actions } = slice;
export const { captcha, user } = actions;
export default reducer;
