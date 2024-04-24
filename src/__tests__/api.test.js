/**
 * @jest-environment node
 *
 * Use Node environment for server-side tests to avoid loading browser libraries.
 * This needs to be the top comment in the file
 */
/* eslint-disable no-return-assign, no-param-reassign */
import { testApiHandler } from "next-test-api-route-handler";
import { knex } from "../../knex/knex";
import plannedTripsEndpoint from "../pages/api/plannedTrip/index";
import plannedTripEndpoint from "../pages/api/plannedTrip/[id]";

describe("Cutts API", () => {
  beforeAll(
    () =>
      // ensure test database is initialized before tests
      knex.migrate.rollback().then(() => knex.migrate.latest()),
    20000,
  );

  afterAll(() =>
    // ensure database collection is cleaned up after all tests
    knex.destroy(),
  );

  beforeEach(
    () =>
      // reset contents of test database
      knex.seed.run(),
    20000,
  );

  test("GET /api/plannedTrip should return all trips with dates that haven't happened yet", async () => {
    await testApiHandler({
      rejectOnHandlerError: true, // Make sure to catch any errors
      pagesHandler: plannedTripsEndpoint, // NextJS API function to test
      test: async ({ fetch }) => {
        // Test endpoint with mock fetch
        const res = await fetch();
        await expect(res.json()).resolves.toHaveLength(1);
      },
    });
  });

  test("GET /api/plannedTrip/id should return the trip with the corresponding index", async () => {
    const trip1 = {
      id: 1,
      planner: 1,
      dest: "Boston",
      date: expect.any(String),
      timeFrame: "morning",
      seatNumber: 3,
      message:
        "I'm driving to Boston on May 20th, 2024. I have 3 seats available.",
    };

    await testApiHandler({
      rejectOnHandlerError: true, // Make sure to catch any errors
      pagesHandler: plannedTripEndpoint,
      params: { id: 1 },
      test: async ({ fetch }) => {
        const res = await fetch();
        const data = await res.json();
        expect(data).toMatchObject(trip1);
      },
    });
  });
});
