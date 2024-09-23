import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const { userid } = useParams();
  return (
    <div className=" text-center bg-slate-400 text-3xl ">User:-{userid}</div>
  );
};

export default User;
