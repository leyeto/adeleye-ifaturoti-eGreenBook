require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");

// const patientRouter = require("./routes/patientRoute");
const usersRouter = require("./routes/usersRoute");

const cors = require("cors");

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5500;

app.get("/", (_req, res) => {
  res.status(200).send("Hello Leye");
});

app.use("/register", usersRouter);

// app.get("/patient", patientRouter);

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
