import React, { useState } from "react";



function Counter() {
    //read-only. write-only
    //get. set.
    const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>+1</button>
    </div>
  );
}

export default Counter;