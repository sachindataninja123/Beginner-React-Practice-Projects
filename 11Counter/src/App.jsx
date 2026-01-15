import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if(counter >= 20) {
      alert("Counter cannot exceed 20");
      setCounter(20);
      return;
    } 
    setCounter(counter + 1);
  };
  const decrement = () => {
    if(counter <= 0){
      alert("Counter cannot be less than 0");
      setCounter(0)
      return;
    }
    setCounter(counter - 1);
  };

  const resetValue = () => {
    setCounter(0);
  };

  return (
    <>
      <h1>Chai aur Code</h1>
      <h1>Counter App</h1>

      <h3>Counter Value: {counter}</h3>

      <button onClick={increment}>Add Value</button>
      <button onClick={decrement}>Subtract Value</button>
      <button onClick={resetValue}>Reset Value</button>
    </>
  );
}

export default App;
