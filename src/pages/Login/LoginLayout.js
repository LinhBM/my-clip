import React from "react";
import Login from "./Login";
import LoginPolicy from "./LoginPolicy";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { stateSelectors } from "../../features/state";
import { userSelectors, getUser } from "../../features/Users/userSlice";
import { faL } from "@fortawesome/free-solid-svg-icons";

function LoginLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const storeState = useSelector(stateSelectors.selectAll);
  const storeUsers = useSelector(userSelectors.selectAll);
  let boo = false;

  storeState.map((state) => {
    storeUsers.map((user) => {
      if (state.username === user.username) {
        boo = true;
      }
    });
  });
  console.log(boo, storeState, storeUsers);

  return (
    <div>
      {boo ? (
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
