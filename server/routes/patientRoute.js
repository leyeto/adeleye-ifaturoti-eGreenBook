const router = require("express").Router();
const patientController = require("../controllers/patientController");

router.route("/welcomePage").get(patient.info);

router.route("/weights").get(patient.weights);

router.route("/clinical-notes").get(patient.clinic - notes);

module.exports = router;
