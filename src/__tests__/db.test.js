/**
 * @jest-environment node
 *
 * Use Node environment for server-side tests to avoid loading browser libraries.
 * This needs to be the top comment in the file
 */
import { knex } from "../../knex/knex";
import User from "../../models/User";
import ProposedTrip from "../../models/ProposedTrip";
import PlannedTrip from "../../models/PlannedTrip";

describe("Cutts DB", () => {
  beforeAll(() =>
    // Ensure test database is initialized before an tests
    knex.migrate
      .rollback()
      .then(() => knex.migrate.latest(), 20000 /* Wait for 20 seconds */),
  );

  afterAll(() =>
    // Ensure database connection is cleaned up after all tests
    knex.destroy(),
  );

  beforeEach(() =>
    // Reset contents of the test database
    knex.seed.run(), 20000
  );

  describe("Querying tests", () => {
    test("Querying users", async () => {
      const users = await User.query();
      expect(users.length).toBe(2); 
    });
    test("Query user by ID", async () => {
      const userByID = await User.query()
      .findById(1);
      expect(userByID.name).toBe("Devon Tyrie");
    });
//     test("Query plannedTrips", async () => {
//       const plannedTrips = await PlannedTrip.query();
//       expect(plannedTrips.length).toBe(2); 
//     });
//     test("Query plannedTrip by dest", async () => {
//       const plannedTrips = await PlannedTrip.query()
//       .where("dest", "Boston");
//       expect(plannedTrips.dest).toHaveID(1); 
//     });
//     test("Querying proposedTrips", async () => {
//       const proposedTrips = await ProposedTrip.query();
//       expect(proposedTrips.length).toBe(2); 
//     });
//     test("Querying proposedTrip by dest", async () => {
//       const proposedTrips = await ProposedTrip.query()
//       .where("dest", "Burlington");
//       expect(proposedTrips.dest).toHaveValue("Burlington")
//     });
 });
 });
