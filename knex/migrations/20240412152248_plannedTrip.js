/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("PlannedTrip", (table) => {
    table.increments("id").primary();
    table.string("planner").notNullable();
    table.string("dest").notNullable();
    table.string("date").notNullable();
    table.string("timeFrame").notNullable();
    table.integer("seatNumber").notNullable();
    table.string("message");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("PlannedTrip");
};
