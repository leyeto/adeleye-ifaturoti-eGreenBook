import "./ClinicianLoginPage.scss";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const axios = require("axios");

const ClinicianLoginPage = () => {
  const [ClinicianIsLoggedIn, setClinicianIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const BASE_API = process.env.API;

  useEffect(() => {
    const authToken = sessionStorage.getItem("authToken");
    if (authToken) {
      setUserIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (e) => {
    e.preventDefault();

    axios
      .post(`${BASE_API}/clinician/login`, {
        username: userName,
        password: userPassword,
      })
      .then((res) => {
        sessionStorage.setItem("authToken", res.data.authToken);
        setClinicianIsLoggedIn(true);
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
      });
  };

  return (
    <>
      {!ClinicianIsLoggedIn && (
        <div className="clinician-login">
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
    </>
  );
};

export default ClinicianLoginPage;
