/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("first_name", 255).notNullable();
    table.string("last_name", 255).notNullable();
    table.string("username").notNullable().unique();
    table.string("password").notNullable();
    table.string("isAdmin", 12).notNullable().defaultTo(false);
    table.string("isPrimaryCarer", 12).notNullable().defaultTo(false);
    table.string("relationship_to_patient").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
