import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../src/redux/actions";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const [number, setNumber] = useState(0);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setNumber(+value);
  };

  const onClickIncrement = () => {
    dispatch(increment(number));
  };
  const onClickDecrement = () => {
    dispatch(decrement(number));
  };

  return (
    <div>
      <h2>Counter: {count}</h2>

      <input type="number" onChange={onChangeHandler}></input>
      <button onClick={onClickIncrement}>Increment</button>
      <button onClick={onClickDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
