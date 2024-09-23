import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";
 
function App() {
  // const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const useCurrencyInfo = useCurrencyInfo(from);
  return (
    <>
      <h1 className=" flex flex-wrap w-full justify-center text-3xl bg-red-300 text-black">
        Currenty converter
      </h1>
    </>
  );
}

export default App;
