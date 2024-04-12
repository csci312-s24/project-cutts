/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("SeatRequest", (table) => {
    table.increments("id").primary();
    table.integer("requester").notNullable();
    table.string("status").notNullable();
    table.string("time").notNullable();
    table.integer("plannedTripId").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("SeatRequest");
};
