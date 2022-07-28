import React from "react";
import { useState } from "react";
import "./NameSticker.scss";

const NameSticker = () => {
  const patient = {
    name: "John Doe",
    dob: "14/05/2022",
    gestation: "42 weeks",
  };

  const [patientName, setPatientName] = useState(patient.name);
  const [dob, setDob] = useState(patient.dob);
  const [gestation, setGestation] = useState(patient.gestation);

  return (
    <div className="name-sticker">
      <ol>
        <li>Name : {patientName}</li>
        <li>Date of Birth : {dob}</li>
        <li>gestation : {gestation}</li>
      </ol>
    </div>
  );
};

export default NameSticker;
