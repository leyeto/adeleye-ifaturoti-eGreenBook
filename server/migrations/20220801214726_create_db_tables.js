/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("patient", (table) => {
      table.increments("id").unsigned().primary();
      table.string("first_name", 255).notNullable();
      table.string("last_name", 255).notNullable();
      table.string("nhs_number", 255).notNullable();
      table.decimal("birth_weight").notNullable();
      table.timestamp(true, true);
    })
    .createTable("users", (table) => {
      table.increments("id").primary();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.decimal("relationship").notNullable();
      table.string("admin_rights").notNullable().defaultTo(false);
      table.timestamp(true, true);
    })
    .createTable("clinicians", (table) => {
      table.increments("id").primary();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.string("role").notNullable().defaultTo(false);
      table.decimal("badge_number").notNullable();
      table.timestamp(true, true);
    })
    .createTable("weights", (table) => {
      table.increments("id").primary();
      table.timestamp("date_weighed").defaultTo(knex.fn.now());
      table.decimal("weight").notNullable();
      table
        .string("role")
        .unsigned()
        .index()
        .references("role")
        .inTable("clinicians");
      table
        .decimal("badge_number")
        .unsigned()
        .index()
        .references("badge_number")
        .inTable("clinicians");
    })
    .createTable("clinic_notes", (table) => {
      table.increments("id").primary();
      table.timestamp("date_time").defaultTo(knex.fn.now());
      table.string("content", 1000).notNullable();
      table
        .string("role")
        .unsigned()
        .index()
        .references("role")
        .inTable("clinicans");
      table
        .string("first_name")
        .unsigned()
        .index()
        .references("first_name")
        .inTable("clinicans");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("patient")
    .dropTable("users")
    .dropTable("clinicans")
    .dropTable("weights")
    .dropTable("clinical_notes");
};
