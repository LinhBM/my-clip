import React from "react";
import Login from "./Login";
import LoginPolicy from "./LoginPolicy";
import { useSelector } from "react-redux";

function LoginLayout() {
  const store = useSelector((state) => state.storeLogin);
  let boo = false;
  store.map((get) => {
    if (get.check === true) {
      boo = true;
    }
  });

  return (
    <div>
      {boo === true ? (
        <div>
          <LoginPolicy />
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </div>
  );
}

export default LoginLayout;
