import React from "react";
import { useState } from "react";
import "./NameSticker.scss";

const NameSticker = ({ patientDetails }) => {
  return (
    <div className="name-sticker">
      <ol>
        <li>Name : {patientDetails.name}</li>
        <li>Date of Birth : {patientDetails.dob}</li>
        <li>NHS Number : {patientDetails.nhs}</li>
        <li>Gestation : {patientDetails.gestation}</li>
      </ol>
    </div>
  );
};

export default NameSticker;
