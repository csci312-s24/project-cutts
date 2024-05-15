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
      id: 0,
      email: "panther@middlebury.edu",
      name: "Panther",
      num: "1234567890",
      year: 2024,
      hasCar: true,
      carYear: 2020,
      carMake: "Toyota",
      carModel: "Corolla",
      carPlate: "VT-12345",
    },
  ]);

  await knex("PlannedTrip").del();
  await knex.raw('ALTER SEQUENCE "PlannedTrip_id_seq" RESTART WITH 1');
  await knex("PlannedTrip").insert([
    {
      driverID: 0,
      destinationInput: "Boston",
      date: tomorrow,
      departureTimeInput: "morning",
      seatInput: 3,
      messageInput:
        "I'm driving to Boston on May 20th, 2024. I have 3 seats available.",
    },
    {
      driverID: 0,
      destinationInput: "New York",
      date: yesterday,
      departureTimeInput: "afternoon",
      seatInput: 2,
      messageInput:
        "I'm driving to New York on on April 20th, 2024. I have 2 seats available. We will stop twice along the way.",
    },
  ]);

  await knex("SeatRequest").del();
  await knex.raw('ALTER SEQUENCE "ProposedTrip_id_seq" RESTART WITH 1');
  await knex("SeatRequest").insert([
    {
      id: 1,
      requester: 0,
      status: "pending",
      time: "2024-05-13T17:37:21.505Z",
      plannedTripId: 1,
    },
  ]);

  await knex("ProposedTrip").del();
  await knex.raw('ALTER SEQUENCE "ProposedTrip_id_seq" RESTART WITH 1');
  await knex("ProposedTrip").insert([
    {
      proposer: 0,
      dest: "Burlington",
      date: tomorrow,
      timeFrame: "afternoon",
      message: "I want a ride to Burlington on May 22nd, 2024. Will pay!",
    },
    {
      proposer: 0,
      dest: "Miami",
      date: twoDays,
      timeFrame: "night",
      message: "I want a ride to Miami on June 22nd, 2024. Will pay!",
    },
  ]);
};
