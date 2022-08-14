/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const clinicians = require("../seed_data/clinicians");
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("clinicians").del();
  await knex("clinicians").insert(clinicians);
};
