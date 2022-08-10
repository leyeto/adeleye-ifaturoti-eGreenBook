/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("weights", (table) => {
    table.increments("weight_id").primary();
    table.timestamp("date_weighed").notNullable().defaultTo(knex.fn.now());
    table.decimal("weight").notNullable();
    table.decimal("child_age");
    table
      .integer("clinician_id")
      .unsigned()
      .notNullable()
      .defaultTo(10)
      .references("id")
      .inTable("clinicians");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("weights");
};
