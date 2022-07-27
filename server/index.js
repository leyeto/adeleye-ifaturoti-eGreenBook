require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");

const patientRouter = require("./routes/patient");

const cors = require("cors");

app.use(cors());

const PORT = process.env.PORT;

app.get("/", (_req, res) => {
  res.status(200).res.send("<h1>You are ate the /page try /patient sites</h1>");
});

// app.get("/patient", patientRouter);

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
