import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import Students from "./components/Students";

function App() {
  // State example
  const [counter, setCounter] = useState(0);

  /// The above line is basically:
  // let counter = 0;
  // const setCounter = (value) => {
  //   counter = value;
  // };

  // username example
  const [username, setUsername] = useState("Joe");

  const students = [
    { name: "Adam" },
    { name: "Mauro" },
    { name: "Rokhaya" },
    { name: "Peter" },
    { name: "Vinny" },
    { name: "Meg" },
    { name: "Jess" },
    { name: "Jaye" },
    { name: "Corey" },
  ];

  const cohortB = [
    { name: "Stacy" },
    { name: "Blake" },
    { name: "Jason" },
    { name: "Olivia" },
    { name: "Amanda" },
  ];

  return (
    <div className="App">
      <button onClick={() => setCounter(counter + 1)}>Increase Counter</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease Counter</button>
      <h1>Howdy</h1>
      <p>{counter}</p>

      <button onClick={() => setUsername("Adam")}>
        Change the current user to "Adam"
      </button>

      <p>The current user is {username}</p>

      <h2>Cohort B contained:</h2>
      {cohortB.map((student) => (
        <Students student={student} />
      ))}

      <h2>The current cohort is:</h2>
      <Greeting />
      {students.map((student) => (
        <Students student={student} />
      ))}
    </div>
  );
}

export default App;
