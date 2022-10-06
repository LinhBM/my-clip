import { configureStore } from "@reduxjs/toolkit";
import reducerLogin from "../features/Users/Login";
import reducerCaptcha from "../features/Captcha";
import user from "../features/Users/userSlice";
import state from "../features/state";

export const store = configureStore({
  reducer: {
    storeLogin: reducerLogin,
    storeCaptcha: reducerCaptcha,
    storeUser: user,
    storeState: state,
  },
});
