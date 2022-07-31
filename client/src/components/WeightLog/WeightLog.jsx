import { useState } from "react";

import "./WeightLog.scss";

const WeightLog = () => {
  const weightData = [
    {
      date: "12/02/2020",
      age: 30,
      weight: 4,
      clinician: "Sandra",
    },
    {
      date: "12/03/2020",
      age: 36,
      weight: 5,
      clinician: "Sandra",
    },
    {
      date: "12/04/2020",
      age: 62,
      weight: 7,
      clinician: "Sandra",
    },
    {
      date: "12/05/2020",
      age: 35,
      weight: 9,
      clinician: "Sandra",
    },
    {
      date: "12/06/2020",
      age: 56,
      weight: 13,
      clinician: "Sandra",
    },
  ];
  const [weights, setWeights] = useState([weightData]);

  return (
    <>
      <h1>React Table Used below</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Age</th>
            <th>Weight</th>
            <th>Clinician</th>
          </tr>
        </thead>

        <tbody>
          {weights[0].map((weightEntry, i) => {
            console.log({ weights });
            return (
              <tr key={i}>
                <td>{weightEntry.date}</td>
                <td>{weightEntry.age}</td>
                <td>{weightEntry.weight}</td>
                <td>{weightEntry.clinician}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default WeightLog;
