/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const weights = require("../seed_data/weights");
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("weights").del();
  await knex("weights").insert(weights);
};
