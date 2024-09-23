import React, { useEffect } from "react";

function Github() {
  useEffect(() => {
    fetch("https://github.com/users/projectkuldeep")
      .then((response) => {
        response.json;
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div> GitHub Followers:- </div>;
}

export default Github;
