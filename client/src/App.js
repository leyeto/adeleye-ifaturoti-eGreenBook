import "./App.scss";
import { Routes, Route } from "react-router-dom";
import NameSticker from "./components/NameSticker/NameSticker";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import { useState } from "react";

function App() {
  const patient = {
    name: "John Doe",
    dob: "14/05/2022",
    gestation: "43 weeks",
    nhs: "799 802 9684",
    image: "",
  };

  const [patientDetails, setPatientDetails] = useState(patient);

  return (
    <div className="App">
      <h1>Welcome to eRed Book</h1>

      <Routes>
        <Route
          path="/sticker"
          element={<NameSticker patientDetails={patientDetails} />}
        />
        <Route
          path="/welcome"
          element={<WelcomePage patientDetails={patientDetails} />}
        />
      </Routes>
    </div>
  );
}

export default App;
