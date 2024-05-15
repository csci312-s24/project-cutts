/**
 * @jest-environment node
 *
 * Use Node environment for server-side tests to avoid loading browser libraries.
 * This needs to be the top comment in the file
 */
/* eslint-disable no-return-assign, no-param-reassign */
import { testApiHandler } from "next-test-api-route-handler";
import { getServerSession } from "next-auth/next";
import { knex } from "../../knex/knex";
import plannedTripsEndpoint from "../pages/api/plannedTrip/index";
import plannedTripEndpoint from "../pages/api/plannedTrip/[id]";
import proposedTripsEndpoint from "../pages/api/proposedTrip/index";
import proposedTripEndpoint from "../pages/api/proposedTrip/[id]";
import seatRequestEditEndpoint from "../pages/api/seatRequest/index";
import seatRequestEndpoint from "../pages/api/seatRequest/[id]";

jest.mock("next-auth/next");

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

  beforeEach(() => {
    // Mock nex-auth getServerSession with id of test user
    getServerSession.mockResolvedValue({
      user: {
        id: 1,
      },
    });
    // Reset contents of the test database
    return knex.seed.run();
  }, 20000);

  afterEach(() => {
    getServerSession.mockReset();
  });

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
      driverID: 0,
      destinationInput: "Boston",
      date: expect.any(String),
      seatInput: 3,
      messageInput:
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

  test("GET /api/proposedTrip should return all trips with dates that haven't happened yet", async () => {
    await testApiHandler({
      rejectOnHandlerError: true,
      pagesHandler: proposedTripsEndpoint,
      test: async ({ fetch }) => {
        const res = await fetch();
        expect(res.json()).resolves.toHaveLength(2);
      },
    });
  });

  test("GET /api/proposedTrip/id should return the trip with the corresponding id", async () => {
    const trip2 = {
      id: 2,
      proposer: 0,
      dest: "Miami",
      date: expect.any(String),
      timeFrame: "night",
      message: "I want a ride to Miami on June 22nd, 2024. Will pay!",
    };

    await testApiHandler({
      rejectOnHandlerError: true,
      pagesHandler: proposedTripEndpoint,
      params: { id: 2 },
      test: async ({ fetch }) => {
        const res = await fetch();
        expect(res.json()).resolves.toMatchObject(trip2);
      },
    });
  });

  test("GET /api/seatRequest/id should return the seat request with the corresponding id", async () => {
    const seatRequest = {
      id: 1,
      requester: 0,
      status: "pending",
      time: "2024-05-13T17:37:21.505Z",
      plannedTripId: 1,
    };

    await testApiHandler({
      rejectOnHandlerError: true,
      pagesHandler: seatRequestEndpoint,
      params: { id: 1 },
      test: async ({ fetch }) => {
        const res = await fetch();
        expect(res.json()).resolves.toMatchObject(seatRequest);
      },
    });
  });

  test("POST /api/seatRequest should create a new seat request", async () => {
    const newSeatRequest = {
      id: 3,
      requester: 0,
      status: "approved",
      time: new Date().toISOString(),
      plannedTripId: 1,
    };

    await testApiHandler({
      rejectOnHandlerError: true,
      pagesHandler: seatRequestEditEndpoint,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newSeatRequest),
        });
        expect(res.json()).resolves.toMatchObject(newSeatRequest);
      },
    });
  });
});
