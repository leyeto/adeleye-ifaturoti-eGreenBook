const Patient = require("../models/patientModel");
const Weight = require("../models/weightModel");
const Note = require("../models/noteModel");

const getInfo = async (req, res) => {
  const patient = await Patient.query();
  res.status(200).json(patient[0]);
};

const getWeights = async (req, res) => {
  const weights = await Weight.query();
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
};
