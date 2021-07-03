import React, { useState } from "react";

const App = ({ name }) => {
  const [counter, seCounter] = useState(0);

  const handleChange = (type: number) => {
    seCounter((oldCounter) => oldCounter + type);
  };

  return (
    <>
      <h1>{name}</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={() => handleChange(-1)}>Decrement</button>
      <button onClick={() => handleChange(1)}>Increment</button>
    </>
  );
};

export default App;
