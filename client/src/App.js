import "./App.scss";
import { Routes, Route } from "react-router-dom";
import NameSticker from "./components/NameSticker/NameSticker";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import { useState } from "react";
import ClinicalNotes from "./components/ClinicalNotes/ClinicalNotes";
import WeightLog from "./components/WeightLog/WeightLog";

function App() {
  const patient = {
    name: "John Doe",
    dob: "14/05/2022",
    gestation: "43 weeks",
    nhs: "799 802 9684",
    sex: "male",
    imgSrc: "",
  };

  const [patientDetails, setPatientDetails] = useState(patient);

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
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
