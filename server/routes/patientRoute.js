const router = require("express").Router();
const patientController = require("../controllers/patientController");

router.route("/welcomePage").get(patientController.getInfo);

router.route("/weights").get(patientController.getWeights);

router.route("/clinic-notes").get(patientController.getClinicNotes);

router.route("/weights").post(patientController.addWeight);

module.exports = router;
