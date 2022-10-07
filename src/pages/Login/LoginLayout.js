import React from "react";
import Login from "./Login";
import LoginPolicy from "./LoginPolicy";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { stateSelectors } from "../../features/Users/state";
import { userSelectors, getUser } from "../../features/Users/userSlice";

function LoginLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const storeState = useSelector(stateSelectors.selectAll);
  const storeUsers = useSelector(userSelectors.selectAll);
  const storeCaptcha = useSelector((state) => state.storeCaptcha);
  let propsLoginLayout = false;
  let userStatus = false;

  let arrUsers = [];

  storeUsers.map((user) => {
    let arrPhone = [];
    for (let i = 0; i < user.phone.length; i++) {
      if (
        user.phone[i] !== "-" &&
        user.phone[i] !== "(" &&
        user.phone[i] !== ")" &&
        user.phone[i] !== " " &&
        user.phone[i] !== "."
      ) {
        if (user.phone[i] === "x") {
          arrPhone = arrPhone + "0";
        } else {
          arrPhone = arrPhone + user.phone[i];
        }
      }
    }

    let arrResult = { username: arrPhone, password: user.email };
    arrUsers.push(arrResult);
  });

  storeState.map((state) => {
    arrUsers.map((user) => {
      propsLoginLayout = true;
      if (
        state.username === user.username &&
        state.password === user.password &&
        state.status === false
      ) {
        userStatus = true;
      }
    });
  });

  console.log(arrUsers);

  return (
    <div>
      {userStatus ? (
        <div>
          <LoginPolicy />
        </div>
      ) : (
        <div>
          <Login propsLoginLayout={propsLoginLayout} />
        </div>
      )}
    </div>
  );
}

export default LoginLayout;
