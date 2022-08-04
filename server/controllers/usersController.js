const User = require("../models/userModel");

const addUser = async (req, res) => {
  console.log("addUser from usersController called");
  const user = await User.query().insert({ ...req.body });
  res.status(200).json(user);
};

module.exports = {
  addUser,
};
