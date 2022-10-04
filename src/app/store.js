import { configureStore } from "@reduxjs/toolkit";
import reducerLogin from "../features/Login/Login";
import reducerCaptcha from "../features/Captcha";

export const store = configureStore({
  reducer: {
    storeLogin: reducerLogin,
    storeCaptcha: reducerCaptcha,
  },
});
