import React from "react";
import "./App.css";
import User from "./User";
import ArrayProp from "./ArrayProp";
import FunctionProp from "./FunctionProp";
import { useState } from "react";

const App = () => {
  // let email ="messi703345@gmail.com";
  let userObj1 = {
    name: "Sachin",
    age: "19",
    email: "messi@tezt.com",
    hobby: "playing Cricket",
  };
  let userObj2 = {
    name: "peter",
    age: "30",
    email: "peter@tezt.com",
    hobby: "playing football",
  };
  let name = ["DU", "IIT BOMBAY", "IIT DELHI", "AIIMS"];

  const [student, setStudent] = useState("sachin");

  return (
    <div>
      <h1>props in react</h1>

      {student && <FunctionProp name={student} />}
      <button onClick={() => {
      setStudent("bhaskar")
      }}>update student name </button>

      <ArrayProp collegeNames={name[0]} />
      <ArrayProp collegeNames={name[1]} />
      <ArrayProp collegeNames={name[3]} />

      {/* <User name="Sachin" age="19" email = {email} /> */}

      <User user={userObj1} />
      <User user={userObj2} />
    </div>
  );
};

export default App;
