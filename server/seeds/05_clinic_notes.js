/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const clinic_notes = require("../seed_data/clinic_notes");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("clinic_notes").del();
  await knex("clinic_notes").insert(clinic_notes);
};
