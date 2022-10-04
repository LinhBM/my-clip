import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "linh",
  initialState: [],
  reducers: {
    captcha: (state) => {
      const captchaNumber = [];
      const captchaUpcase = [];
      const captchaLowcase = [];
      for (let i = 48; i < 58; i++) captchaNumber.push(+String.fromCharCode(i));
      for (let i = 65; i < 91; i++) captchaUpcase.push(String.fromCharCode(i));
      for (let i = 97; i < 123; i++)
        captchaLowcase.push(String.fromCharCode(i));

      const captchaTotal = [
        ...captchaNumber,
        ...captchaUpcase,
        ...captchaLowcase,
      ];

      const captchaResult = [];

      for (let i = 0; i < 6; i++)
        captchaResult.push(
          captchaTotal[Math.floor(Math.random() * captchaTotal.length)]
        );

      state = captchaResult;
      return state;
    },
  },
});

const { reducer, actions } = slice;
export const { captcha } = actions;
export default reducer;
