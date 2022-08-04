/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const users = require("../seed_data/parents");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert(users);
};
