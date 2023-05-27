import React, { useState } from "react";

const StateCount = () => {
  const [state, setState] = useState(0);

  return (
    <div>
      <h2>useState Counter: {state}</h2>
      <button onClick={() => setState(state + 1)}>Increment</button>
      <button onClick={() => setState(state - 1)}>Decrement</button>
    </div>
  );
};

export default StateCount;
