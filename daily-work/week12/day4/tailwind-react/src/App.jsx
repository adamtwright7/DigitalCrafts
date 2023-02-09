import { useState } from "react";
import SignUp from "./components/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid place-items-center my-20">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <SignUp />
    </div>
  );
}

export default App;
