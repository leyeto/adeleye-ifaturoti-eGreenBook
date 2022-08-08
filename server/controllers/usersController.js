const { knex } = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const SALTS_ROUNDS = 10;
console.log("Secret: ", process.env.JWT_SECRET);

const signJwtToken = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return token;
};

const registerUser = async (req, res) => {
  const { password } = req.body;

  bcrypt.hash(password, SALTS_ROUNDS, async (err, hashedPassword) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Could not encrypt the supplied password" });
    }

    const user = await User.query().insert({
      ...req.body,
      password: hashedPassword,
    });
    const token = signJwtToken(user);

    return res.status(201).json({ userAuthToken: token });
  });
};

const authUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.query()
    .select()
    .where("username", "=", username)
    .then((user) => {
      bcrypt.compare(password, user[0].password, function (err, success) {
        if (err) {
          return res.status(403).json({
            message: "User Username/Password combination is incorrect",
          });
        }
        if (success) {
          const token = signJwtToken(user[0]);
          console.log("User successfully authenticated");

          return res.status(200).send({ userAuthtoken: token });
        }
      });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  registerUser,
  authUser,
};
