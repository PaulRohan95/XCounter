import React, { useState } from "react";


function App() {

  const [counter, setCounter] = useState(0);

  const handleClickInc = () => {
    setCounter(counter + 1);
  };

  const handleClickDec = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <div>
        <p>Count: {counter}</p>
      </div>
      <button onClick={handleClickInc}>Increment</button>
      <button onClick={handleClickDec}>Decrement</button>
    </div>
  );
}

export default App;
