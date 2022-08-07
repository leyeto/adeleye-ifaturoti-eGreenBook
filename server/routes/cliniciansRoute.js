const router = require("express").Router();
const clinicianController = require("../controllers/cliniciansController");

router.route("/login").post(clinicianController.authClinician);
router.route("/register").get(clinicianController.registerClinican);

module.exports = router;
