/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const twoDays = new Date();
  twoDays.setDate(twoDays.getDate() + 2);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  // Deletes ALL existing entries
  await knex("User").del();
  await knex.raw('ALTER SEQUENCE "User_id_seq" RESTART WITH 1');
  await knex("User").insert([
    {
      email: "dtyrie@middlebury.edu",
      name: "Devon Tyrie",
      num: "6177747109",
      year: 2025,
      googleId: "dtyrie",
    },
    {
      email: "lkosowsky@middlebury.edu",
      name: "Lila Kosowsky",
      num: "7812498085",
      year: 2024,
      googleId: "lkosowsky",
    },
  ]);

  await knex("PlannedTrip").del();
  await knex.raw('ALTER SEQUENCE "PlannedTrip_id_seq" RESTART WITH 1');
  await knex("PlannedTrip").insert([
    {
      planner: 1,
      dest: "Boston",
      date: tomorrow,
      timeFrame: "morning",
      seatNumber: 3,
      message:
        "I'm driving to Boston on May 20th, 2024. I have 3 seats available.",
    },
    {
      planner: 2,
      dest: "New York",
      date: yesterday,
      timeFrame: "afternoon",
      seatNumber: 2,
      message:
        "I'm driving to New York on on April 20th, 2024. I have 2 seats available. We will stop twice along the way.",
    },
  ]);

  await knex("ProposedTrip").del();
  await knex.raw('ALTER SEQUENCE "ProposedTrip_id_seq" RESTART WITH 1');
  await knex("ProposedTrip").insert([
    {
      proposer: 2,
      dest: "Burlington",
      date: tomorrow,
      timeFrame: "afternoon",
      message: "I want a ride to Burlington on May 22nd, 2024. Will pay!",
    },
    {
      proposer: 1,
      dest: "Miami",
      date: twoDays,
      timeFrame: "night",
      message: "I want a ride to Miami on June 22nd, 2024. Will pay!",
    },
  ]);
};
