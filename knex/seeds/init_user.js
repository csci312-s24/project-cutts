/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("User").del();
  await knex("User").insert([
    {
      email: "dtyrie@middlebury.edu",
      name: "Devon Tyrie",
      num: "6177747109",
      year: 2025,
    },
    {
      email: "lkosowsky@middlebury.edu",
      name: "Lila Kosowsky",
      num: "7812498085",
      year: 2024,
    },
  ]);
};
