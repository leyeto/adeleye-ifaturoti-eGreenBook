/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const patient = require("../seed_data/patient");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("patient").del();
  await knex("patient").insert(patient);
};
