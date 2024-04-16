/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable("SeatRequest", (table) => {
    table.increments("id").primary();
    table
      .integer("requester")
      .references("id")
      .inTable("User")
      .notNullable()
      .onDelete("cascade");
    table.string("status").defaultTo("pending");
    table.timestamp("time").defaultTo(knex.fn.now());
    table
      .integer("plannedTripId")
      .references("id")
      .inTable("PlannedTrip")
      .notNullable()
      .onDelete("cascade"); // a plannedTrip will never be deleted
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("SeatRequest");
};
