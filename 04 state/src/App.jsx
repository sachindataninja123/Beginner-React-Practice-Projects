import "./App.css";
import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [fruit, setFruit] = useState("apple");

  function handleFruit() {
    setFruit("Guava");
  }
  return (
    <div>
      <h1>State in React</h1>
      <h3>{fruit}</h3>

      <button onClick={handleFruit}>change fruit</button>
      <Counter/>
    </div>
  );
}

export default App;
