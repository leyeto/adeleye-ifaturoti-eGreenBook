import "./UserLoginPage.scss";
import React from "react";
import { useState } from "react";

const UserLoginPage = () => {
  const [UserIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return <div className="user-login">UserLoginPage</div>;
};

export default UserLoginPage;
