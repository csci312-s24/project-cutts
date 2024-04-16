/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('PlannedTrip').del()
  await knex('PlannedTrip').insert([
    {planner: 1, dest: "Boston", date: "2024-05-20T10:00:00Z", timeframe: "morning", seatNumber: 3, message: "I'm driving to Boston on May 20th, 2024. I have 3 seats available."},
    {planner: 2, dest: "New York", date: "2024-04-20T12:00:00Z", timeframe: "afternoon", seatNumber: 2, message: "I'm driving to New York on on April 20th, 2024. I have 2 seats available. We will stop twice along the way."},
  ]);
};
