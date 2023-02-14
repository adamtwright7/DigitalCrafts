import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../../reducers/counterSlice";
import {
  changeUserName,
  changeUserSettingsStrict,
  changeUserSettingsUnstrict,
} from "../../reducers/userSlice";

const Settings = () => {
  const counter = useSelector((state) => state.counter.value);
  const userLoogedIn = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1> Settings </h1>
      <h2> The counter is at: {counter} </h2>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>
        Increment by 2
      </button>
      <button onClick={() => dispatch(reset())}>Reset the Count</button>
      <h2> User: {userLoogedIn.name} </h2>
      <button onClick={() => dispatch(changeUserName())}>Change User</button>
    </div>
  );
};

export default Settings;
