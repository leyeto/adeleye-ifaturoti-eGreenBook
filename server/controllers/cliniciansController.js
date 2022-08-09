const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Clinician = require("../models/clinicianModel");

const SALTS_ROUNDS = 10;

const signJwtToken = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
    {
      expiresIn: "1200000",
    }
  );
  return token;
};

const registerClinican = async (req, res) => {
  console.log("registerClinician in clinicianController called");
  const { username, password } = req.body;

  bcrypt.hash(password, SALTS_ROUNDS, async (err, hashedPassword) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Could not encrypt the supplied password" });
    }

    const clinician = await Clinician.query().insert({
      ...req.body,
      password: hashedPassword,
    });

    const token = signJwtToken(clinician);
    console.log("user registered");

    return res.status(201).json({ clinicianAuthToken: token });
  });
};

const authClinician = async (req, res) => {
  const { username, password } = req.body;

  const user = await Clinician.query()
    .select()
    .where("username", "=", username)
    .then((user) => {
      bcrypt.compare(password, user[0].password, (err, success) => {
        if (err) {
          return res.status(403).json({
            message: "Clinican Username/Password combination incorrect",
          });
        }
        if (success) {
          const token = signJwtToken(user[0]);
          console.log("Clinician successfully authenticated");

          return res.status(200).send({ clinicanAuthtoken: token });
        }
      });
    });
};

module.exports = { registerClinican, authClinician };
