/**
 * @jest-environment node
 *
 * Use Node environment for server-side tests to avoid loading browser libraries.
 * This needs to be the top comment in the file
 */
/* eslint-disable no-return-assign, no-param-reassign */
import { testApiHandler } from "next-test-api-route-handler";
import { knex } from "../../knex/knex";
import plannedTripEndpoint from "../pages/api/plannedTrip/index";

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
      pagesHandler: plannedTripEndpoint, // NextJS API function to test
      test: async ({ fetch }) => {
        // Test endpoint with mock fetch
        const res = await fetch();
        await expect(res.json()).resolves.toHaveLength(2);
      },
    });
  });
});
