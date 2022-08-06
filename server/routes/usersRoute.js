const router = require("express").Router();
const usersController = require("../controllers/usersController");

router.post("/", usersController.addUser);

router.post("/login", usersController.authUser);

module.exports = router;
