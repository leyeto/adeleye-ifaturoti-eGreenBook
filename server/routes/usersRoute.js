const router = require("express").Router();
const usersController = require("../controllers/usersController");

router.post("/", usersController.addUser);

module.exports = router;
