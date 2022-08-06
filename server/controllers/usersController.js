const { knex } = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const SALTS_ROUNDS = 8;

const signJwtToken = (user) => {
  const token = jwt.sign(
    { id: user.id, sub: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return token;
};

const addUser = async (req, res) => {
  console.log("addUser from usersController called");
  const user = await User.query().insert({ ...req.body });
  res.status(200).json(user);
};

const authUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.query()
    .select()
    .where("username", "=", username)
    .then((user) => {
      bcrypt.compare(password, user[0].password, function (_, success) {
        console.log("username ", username);
        if (!success) {
          return res
            .status(403)
            .json({ message: "Username/Password combination is incorrect" });
        }

        const token = signJwtToken(user[0]);
        console.log("success reached");

        return res.status(200).send({ authtoken: token });
      });
    })
    .catch((err) => console.log(err));

  console.log(user);
};

module.exports = {
  addUser,
  authUser,
};
