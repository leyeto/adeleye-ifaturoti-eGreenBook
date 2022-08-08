import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import WelcomePage from "../WelcomePage/WelcomePage";
import "./ClinicianLoginPage.scss";
import axios from "axios";

const ClinicianLoginPage = ({ patientDetails }) => {
  const [ClinicianIsLoggedIn, setClinicianIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const BASE_API = process.env.REACT_APP_API;

  useEffect(() => {
    const authToken = sessionStorage.getItem("clinicanAuthtoken");
    console.log("clinician authToken->", authToken);
    if (authToken) {
      setClinicianIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (e) => {
    e.preventDefault();

    axios
      .post(`${BASE_API}/clinicians/login`, {
        username: userName,
        password: userPassword,
      })
      .then((res) => {
        sessionStorage.setItem("clinicanAuthtoken", res.data.clinicanAuthtoken);
        console.log(
          "clinician Login sessionStorage->",
          res.data.clinicanAuthtoken
        );
        setClinicianIsLoggedIn(true);
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
        console.log("clinician loginHandler->", err);
      });
  };

  return (
    <>
      <h1>Can you see this</h1>
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
      {ClinicianIsLoggedIn && <WelcomePage patientDetails={patientDetails} />}
    </>
  );
};

export default ClinicianLoginPage;
