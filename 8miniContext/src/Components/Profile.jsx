import React from "react";
import UserContext from "../Context/UseContext";
function Profile() {
  const { user } = React.useContext(UserContext);
  if (!user) {
    return <div>There is no user</div>;
  } else {
    return <div>the User name is {user.userName}</div>;
  }
}

export default Profile;
