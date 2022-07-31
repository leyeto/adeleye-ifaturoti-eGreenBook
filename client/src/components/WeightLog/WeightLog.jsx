import { useState } from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";

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
      age: 46,
      weight: 6,
      clinician: "Sandra",
    },
    {
      date: "12/05/2020",
      age: 50,
      weight: 7.2,
      clinician: "Sandra",
    },
    {
      date: "12/06/2020",
      age: 56,
      weight: 13,
      clinician: "Sandra",
    },
  ];
  const [weights, setWeights] = useState(weightData);

  const submitHandler = (e) => {
    e.preventDefault();
    const newDate = e.target[0].value;
    const newWeight = e.target[1].value;
    const newAge = e.target[2].value;
    setWeights([
      ...weights,
      { date: newDate, weight: newWeight, age: newAge, clinician: "Default" },
    ]);
  };

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
          {weights.map((weightEntry, i) => {
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
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="date">
          <label htmlFor="date">Date</label>
          <input type="text" />
        </div>
        <div className="weight">
          <label htmlFor="weight">Weight</label>
          <input type="text" />
        </div>
        <div className="age">
          <label htmlFor="date">Age</label>
          <input type="text" />
        </div>
        <input type="submit" />
      </form>
      {/* GRAPH FOR DATA STARTS HERE */}

      <LineChart width={400} height={400} data={weights}>
        <Line type="monotone" dataKey="weight" stroke="#8884d8" />
        <XAxis dataKey="age" type="number" />
        <YAxis dataKey="weight" type="number" />
      </LineChart>
    </>
  );
};

export default WeightLog;
