/**
 * @jest-environment node
 *
 * Use Node environment for server-side tests to avoid loading browser libraries.
 * This needs to be the top comment in the file
 */
import { knex } from "../../knex/knex";
import User from "../../models/User";

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
    knex.seed.run(),
  );

  test("Querying users", async () => {
    const users = await User.query();
    console.log(users);
  });
});
