/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable("PlannedTrip", (table) => {
    table.increments("id").primary();
    table
      .integer("planner")
      .references("id")
      .inTable("User")
      .notNullable()
      .onDelete("cascade");
    table.string("dest").notNullable();
    table.string("date");
    table.string("timeFrame");
    table.integer("seatNumber").defaultTo(0);
    table.string("message").defaultTo("");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("PlannedTrip");
};
