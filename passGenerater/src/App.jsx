import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(5);
  const [allowumber, setAllowumber] = useState(false);
  const [allowcarreter, setAllowcarreter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordref = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowcarreter) str = str + "@!#`^&*(){}[]+$";
    if (allowumber) str = str + "0123456789";
    for (let i = 0; i < length; i++) {
      pass = pass + str[Math.floor(Math.random() * str.length + 1)];
    }
    setPassword(pass);
  }, [length, allowcarreter, allowumber, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, allowcarreter, allowumber, passwordGenerator]);
  return (
    <>
      <div className=" text-center text-black-100 px-4 py-6 text-3xl bg-slate-300 mx-auto  w-full max-w-md rounded-xl">
        Generat{" "}
        <div className=" flex rounded-lg overflow-hidden shadow my-4">
          <input
            type="text"
            placeholder="Password"
            className=" bg-slate-100  outline-none  "
            value={password}
            readOnly
            ref={passwordref}
          />

          <button
            className="  text-center bg-blue-500 px-1 py-1 shrink-0"
            onClick={copyPasswordToClipboard()}
          >
            {" "}
            copy
          </button>
        </div>
        <div className="flex  flex-wrap justify-center items-center gap-x-2">
          <div className="flex justify-center items-center gap-x-1">
            <input
              type="range"
              min={5}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>length{length}</label>
          </div>

          <div className="flex justify-center items-center gap-x-1">
            <input
              type="checkbox"
              checked={allowumber}
              onChange={() => {
                setAllowumber((prev) => !prev);
              }}
            />{" "}
            <label>number</label>
          </div>
          <div className="flex justify-center items-center gap-x-1">
            <input
              type="checkbox"
              checked={allowcarreter}
              onChange={() => {
                setAllowcarreter((last) => !last);
              }}
            />{" "}
            <label>character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
