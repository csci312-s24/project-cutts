/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable("ProposedTrip", (table) => {
    table.increments("id").primary();
    table
      .integer("proposer")
      .references("id")
      .inTable("User")
      .notNullable()
      .onDelete("cascade");
    table.string("dest").notNullable();
    table.string("date");
    table.string("timeFrame");
    table.string("message").defaultTo("");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("ProposedTrip");
};
