/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("User").del();
  await knex("User").insert([
    {
      email: "panther@middlebury.edu",
      name: "Panther",
      num: 123456,
      year: 2024,
    },
  ]);
};
