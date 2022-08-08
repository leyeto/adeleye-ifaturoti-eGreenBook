import { useState } from "react";
import Table from "react-bootstrap/Table";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
} from "recharts";

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

  // const date = new Date("2019-01-22T02:53:53.000Z");
  // undefined;
  // date.toLocaleDateString();
  // ("1/22/2019");
  // date.toLocaleTimeString();
  // ("2:53:53 AM");

  return (
    <>
      <h1>Child's Weight Log</h1>
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>{`Age (weeks)`}</th>
            <th>{`Weight (kg)`}</th>
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
          {/* INPUT row in table */}
        </tbody>
      </Table>

      <div className="weights__input-graph">
        <div className="weights__input">
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="weights__input-date">
              <label htmlFor="date">Date</label>
              <input type="text" />
            </div>
            <div className="weights__input-weight">
              <label htmlFor="weight">Weight</label>
              <input type="text" />
            </div>
            <div className="weights__input-age">
              <label htmlFor="date">{`Age (weeks)`}</label>
              <input type="text" />
            </div>
            <input type="submit" />
          </form>
        </div>
        <div className="weights__graph">
          <LineChart width={400} height={400} data={weights}>
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="weight" stroke="#508991" />
            <Legend />
            <Tooltip />
            <XAxis dataKey="age" type="number" />
            <YAxis dataKey="weight" type="number" />
          </LineChart>
        </div>
      </div>
    </>
  );
};

export default WeightLog;
