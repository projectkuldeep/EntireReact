import { useState } from "react";

function App() {
  const [count, setCount] = useState("blue");

  return (
    <>
      <div
        className=" w-full h-screen flex flex-wrap justify-center bottom-8 fixed-bottom "
        style={{ background: count }}
      >
        {" "}
        h
        <div className=" w-full flex flex-wrap content-center  inset-x-1 px-2 ">
          <div className="  justify-center flex flex-wrap content-center  inset-x-1 px-2  bg-slate-100 rounded">
            <button
              className=" content-center border-none bg-red-600 px-4 rounded-xl py-2 gap-3 m-3"
              onClick={() => {
                setCount("red");
              }}
            >
              {" "}
              Red
            </button>
            <button
              className=" content-center border-none bg-sky-600 px-4 rounded-xl py-2 gap-3 m-3"
              onClick={() => {
                setCount("blue");
              }}
            >
              {" "}
              Sky blue
            </button>
            <button
              className=" content-center border-none bg-yellow-400 px-4 rounded-xl py-2 gap-3 m-3"
              onClick={() => {
                setCount("yellow");
              }}
            >
              {" "}
              yellow
            </button>
            <button
              className=" content-center border-none bg-violet-400 px-4 rounded-xl py-2 gap-3 m-3"
              onClick={() => {
                setCount("violet");
              }}
            >
              {" "}
              violet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
