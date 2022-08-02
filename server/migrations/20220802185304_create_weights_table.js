/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("weights", (table) => {
    table.increments("weight_id").primary();
    table.timestamp("date_weighed").defaultTo(knex.fn.now());
    table.decimal("child's age").notNullable();
    table
      .integer("clinician_id")
      .unsigned()
      .notNullable()
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
