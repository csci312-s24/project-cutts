/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable("User", (table) => {
    table.increments("id").primary();
    table.string("email").unique().notNullable();
    table.string("name");
    table.integer("num");
    table.integer("year");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("User");
};
