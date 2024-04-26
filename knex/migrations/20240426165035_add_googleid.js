/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.table("User", (table) => {
    table.string("googleId");
  });
};

exports.down = function (knex) {
  return knex.schema.table("User", (table) => {
    table.dropColumn("googleId");
  });
};
