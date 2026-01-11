import { useState } from "react";
import "./App.css";
import React from "react";
import Compo from "./Compo";

const App = () => {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <h1>Toggle to hide and show in React js</h1>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Toggle
      </button>

      {/* {
        display? <h1>Sachin</h1>:null
      } */}

      {display ? (
        <h1>
          <Compo />
        </h1>
      ) : null}
    </div>
  );
};

export default App;
