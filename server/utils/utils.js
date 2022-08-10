const bcrypt = require("bcrypt");

const SALTS_ROUNDS = 10;

const encryptPassword = (password) => {
  bcrypt.hash(password, SALTS_ROUNDS, (err, hashedPassword) => {
    if (err) {
      console.log("Unable to hash default password");
    }
    return hashedPassword;
  });
};

module.exports = {
  encryptPassword,
};
