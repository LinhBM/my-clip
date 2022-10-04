import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "linh",
  initialState: [],
  reducers: {
    user: (state, action) => {
      const numberPhone = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const arr = [];
      arr.push(action.payload);

      arr.map((index) => {
        let value = 0;
        for (let i = 0; i < index.length; i++) {
          for (let number = 0; number < numberPhone.length; number++) {
            if (numberPhone[number] === +index[i]) {
              value++;
            }
            console.log(index[i]);
          }
        }

        if (value !== index.length) {
          alert("phai nhập số điện thoại");
        }
      });
    },
  },
});

const { reducer, actions } = slice;
export const { captcha, user } = actions;
export default reducer;
