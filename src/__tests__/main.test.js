import { render } from "@testing-library/react";
import Home from "@/pages/index";
import mockRouter from "next-router-mock";
import { createDynamicRouteParser } from "next-router-mock/dynamic-routes";

// Code from Micheal Linderman, main.test.js Assignment 4
// Replace the router with the mock
// eslint-disable-next-line global-require
jest.mock("next/router", () => require("next-router-mock"));

describe("End-to-end testing", () => {
  test("Render index.js component", () => {
    render(<Home />);
  });
});

// Tell the mock router about the pages we will use (so we can use dynamic routes)
mockRouter.useParser(
  createDynamicRouteParser([
    // These paths should match those found in the `/pages` folder:
    "/articles/[[...id]]",
    "/articles/[id]/edit",
    "/edit",
  ]),
);
