import { useEffect } from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import { convertDaysToWeeks, convertTimestampToDate } from "../../utils/utils";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Label,
  CartesianGrid,
} from "recharts";

import "./WeightLog.scss";

const axios = require("axios").default;

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
  const [weights, setWeights] = useState([]);

  const BACKEND_API = process.env.REACT_APP_API;

  const getWeights = async () => {
    try {
      const response = await axios.get(`${BACKEND_API}/patient/weights`);
      console.log("getWeights data: ", response.data[0]);
      const rawArray = response.data[0];
      console.log("rawArray", rawArray);
      const temp = [];

      rawArray.forEach((element) => {
        temp.push({
          date: convertTimestampToDate(element.date),
          weight: element.weight,
          age: convertDaysToWeeks(element.age_in_days),
          weight: element.weight,
          clinician: element.clinician,
        });
      });

      setWeights(temp);
    } catch (error) {
      console.log("getWeights error: ", error);
    }
  };

  useEffect(() => {
    getWeights();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const newDate = e.target[0].value;
    const newWeight = e.target[1].value;
    const newAge = e.target[2].value;

    axios
      .post(`${BACKEND_API}/patient/weights`, { weight: newWeight })
      .then((response) => {
        console.log(response);
        getWeights();
      })
      .catch((err) => console.log("post weight error: ", err));
  };

  if (weights.length < 1) {
    return <h2>Page Loading</h2>;
  }

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
          <h4>{`Add new weight (date set as today)`}</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="weights__input-date">
              <label htmlFor="date">Date</label>
              <input type="text" />
            </div>
            <div className="weights__input-weight">
              <label htmlFor="weight">{`Weight (kg)`}</label>
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
          <LineChart width={600} height={600} data={weights}>
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="weight" stroke="#508991" />
            <Legend />
            <Tooltip />
            <XAxis dataKey="age" type="number">
              <Label
                position="bottom"
                offset={0}
                style={{
                  textAnchor: "middle",
                  fontSize: "100%",
                  fill: "black",
                }}
                angle={0}
                value={"Age (weeks)"}
              />
            </XAxis>
            <YAxis dataKey="weight" type="number">
              <Label
                style={{
                  textAnchor: "middle",
                  fontSize: "100%",
                  fill: "black",
                }}
                angle={270}
                value={"Weight (kg)"}
              />
            </YAxis>
          </LineChart>
        </div>
      </div>
    </>
  );
};

export default WeightLog;
