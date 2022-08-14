/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("patient", (table) => {
    table.increments("id").primary();
    table.string("nhs_number", 20).notNullable();
    table.string("first_name", 255).notNullable();
    table.string("last_name", 255).notNullable();
    table.timestamp("dob").notNullable();
    table.string("gender").notNullable();
    table.string("blood_group").notNullable();
    table.decimal("birth_height").notNullable();
    table.decimal("birth_weight").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("patient");
};
