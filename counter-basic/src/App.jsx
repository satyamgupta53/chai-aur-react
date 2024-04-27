import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter + 1);
    console.log("value added", Math.random());
  };

  const decreaseValue = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
    console.log("value decreased", Math.random());
  };

  return (
    <>
      <h1>Hello ! how many times you have clicked below !!</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Counter {counter}</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease Counter {counter}</button>
    </>
  );
}

export default App;
