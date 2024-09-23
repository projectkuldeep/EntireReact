import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  //const [count, setCount] = useState(0);
  //let name= "kuldeep";

  return (
    <>
      <h1 className=" font-mono text-blue-400 border-l-amber-800 mb-4">
        {" "}
        Welcom here
      </h1>
      <Card name="Kuldeep" Clk="visit here" />
      <Card name="Shivam" />
    </>
  );
}

export default App;
