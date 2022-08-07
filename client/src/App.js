import "./App.scss";
import { Routes, Route } from "react-router-dom";
import NameSticker from "./components/NameSticker/NameSticker";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import { useState, useEffect } from "react";
import ClinicalNotes from "./components/ClinicalNotes/ClinicalNotes";
import WeightLog from "./components/WeightLog/WeightLog";
import UserLoginPage from "./components/UserLoginPage/UserLoginPage";
import Header from "./components/Header/Header";

const axios = require("axios");

function App() {
  const BACKEND_API = process.env.REACT_APP_API;

  const [patientDetails, setPatientDetails] = useState();
  const API = "http://localhost:5500/patient/info";

  const getPatientDetails = async () => {
    await axios
      .get("http://localhost:5500/patient/info")
      .then((response) => setPatientDetails(response.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => getPatientDetails, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<UserLoginPage patientDetails={patientDetails} />}
        />
        <Route
          exact
          path="/home"
          element={<WelcomePage patientDetails={patientDetails} />}
        />
        <Route
          path="/sticker"
          element={<NameSticker patientDetails={patientDetails} />}
        />
        <Route path="/weights" element={<WeightLog />} />
        <Route path="/notes" element={<ClinicalNotes />} />
      </Routes>
    </div>
  );
}

export default App;
