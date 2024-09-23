import React, { useState, useContext } from "react";
import UserContext from "../Context/UseContext";
const Login = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
    // console.log("User Logged in", userName);
  };
  return (
    <>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="enter name"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />

      <input
        type="password"
        placeholder="Passwords"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button onClick={handleSubmit}>submit</button>
    </>
  );
};

export default Login;
