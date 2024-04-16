/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ProposedTrip').del()
  await knex('ProposedTrip').insert([
    {proposer: 2, 
    dest: "Burlington", 
    date: "2024-05-22T15:30:00Z", 
    timeframe: "afternoon", 
    message: "I want a ride to Burlington on May 22nd, 2024. Will pay!"},
    {proposer: 1, 
      dest: "Miami", 
      date: "2024-06-22T20:30:00Z", 
      timeframe: "night", 
      message: "I want a ride to Miami on June 22nd, 2024. Will pay!"},
  ]);
};
