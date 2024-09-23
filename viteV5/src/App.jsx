import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [v, setV] = useState(5);

  const incors = () => {
    if (v <= 19) {
      setV(v + 1);
    } else {
      alert("full");
    }

    console.log(v);
  };
  const decris = () => {
    if (v >= 1) {
      setV(v - 1);
    }
    console.log(v);
  };

  return (
    <>
      <h1> the count is :- {v}</h1>
      <button onClick={incors}> increse {v}</button>
      <br></br>
      <button onClick={decris}> decrese {v}</button>
    </>
  );
}

export default App;
