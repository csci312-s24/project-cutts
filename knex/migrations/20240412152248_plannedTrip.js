/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable("PlannedTrip", (table) => {
    table.increments("id").primary();
    table
      .integer("driverID")
      .references("id")
      .inTable("User")
      .notNullable()
      .onDelete("cascade");
    table.string("destinationInput").notNullable();
    table.string("date");
    table.string("departureTimeInput");
    table.string("departureLocationInput");
    table.integer("seatInput").defaultTo(0);
    table.string("messageInput").defaultTo("");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("PlannedTrip");
};
