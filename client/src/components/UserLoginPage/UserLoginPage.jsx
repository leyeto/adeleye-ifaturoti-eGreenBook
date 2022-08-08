import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ClinicianLogin from "../ClinicianLoginPage/ClinicianLoginPage";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "./UserLoginPage.scss";

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
          <h1 style={{ textAlign: "center" }}>Electronic Red Book</h1>
          <h2 style={{ textAlign: "center" }}>
            Documenting your baby's health
          </h2>
          <h3>{`Login (parent/guardian)`}</h3>
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
            <Button variant="primary" type="submit">
              User Login
            </Button>
          </form>
        </div>
      )}

      {UserIsLoggedIn && <ClinicianLogin patientDetails={patientDetails} />}
    </>
  );
};

export default UserLoginPage;
