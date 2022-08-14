/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("clinic_notes", (table) => {
    table.increments("id").primary();
    table.timestamp("date_added").defaultTo(knex.fn.now());
    table.string("comment", 255).notNullable();
    table
      .integer("clinician_id")
      .unsigned()
      .references("id")
      .inTable("clinicians");
  });
};

/**
 * @param { import("knex").Knex } knex
 *  * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("clinic_notes");
};
