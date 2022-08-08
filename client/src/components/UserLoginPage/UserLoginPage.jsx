import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ClinicianLogin from "../ClinicianLoginPage/ClinicianLoginPage";
import "./UserLoginPage.scss";
import axios from "axios";

const UserLoginPage = ({ patientDetails }) => {
  const [UserIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [username, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const BASE_API = process.env.REACT_APP_API;

  useEffect(() => {
    const authToken = sessionStorage.getItem("authToken");
    console.log("user authToken->", authToken);
    if (authToken) {
      setUserIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (e) => {
    e.preventDefault();

    axios
      .post(`${BASE_API}/users/login`, {
        username: username,
        password: userPassword,
      })
      .then((res) => {
        sessionStorage.setItem("authToken", res.data.userAuthtoken);
        setUserIsLoggedIn(true);
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
        console.log("user loginHandler", err);
      });
  };

  return (
    <>
      {!UserIsLoggedIn && (
        <div className="user-login">
          <h1>Login</h1>
          <form onSubmit={loginHandler}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>
            <button>Login</button>
          </form>
        </div>
      )}

      {UserIsLoggedIn && <ClinicianLogin patientDetails={patientDetails} />}
    </>
  );
};

export default UserLoginPage;
