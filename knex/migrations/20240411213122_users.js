/* eslint-disable func-names */
exports.up = function (knex) {
    return knex.schema.createTable("User", (table) => {
      table.increments("id").primary();
      table.string("email").unique().notNullable();
      table.string("name").notNullable();
      table.integer("num").notNullable();
      table.integer("year").notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("User");
  };
