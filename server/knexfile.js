// Update with your config setting
require("dotenv").config();
const DB_database = process.env.DB_database;

const DB_username = process.env.DB_username;

const DB_password = process.env.DB_password;

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql",
    connection: {
      database: "redbook",
      user: DB_username,
      password: DB_password,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
