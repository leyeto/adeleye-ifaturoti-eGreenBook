const Patient = require("../models/patientModel");
const Weight = require("../models/weightModel");
const Note = require("../models/noteModel");
const { default: knex } = require("knex");

const getInfo = async (req, res) => {
  const patient = await Patient.query();
  res.status(200).json(patient[0]);
};

const getWeights = async (req, res) => {
  const weights = await Weight.query();
  res.status(200).json(weights);
};

const getWeightsWithDiff = async (req, res) => {
  const weights = await Weight.knex().raw(
    `SELECT date_weighed AS date,weight,c.first_name AS clinician,
  timestampdiff(day ,patient.dob,w.date_weighed) AS age_in_days
FROM redbook.weights w
JOIN redbook.patient 
JOIN redbook.clinicians c ON w.clinician_id = c.id`
  );

  res.status(200).json(weights);
};

const getClinicNotes = async (req, res) => {
  const notes = await Note.query();
  res.status(200).json(notes);
};

const addWeight = async (req, res) => {
  const newWeight = await Weight.query().insert({ ...req.body });
  res.status(201).send(newWeight);
};

module.exports = {
  getInfo,
  getWeights,
  getClinicNotes,
  addWeight,
  getWeightsWithDiff,
};
