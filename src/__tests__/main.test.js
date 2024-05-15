import { render } from "@testing-library/react";
import { useSession, SessionProvider } from "next-auth/react";
import Home from "@/pages/index";
import mockRouter from "next-router-mock";
import { createDynamicRouteParser } from "next-router-mock/dynamic-routes";

// Mock the NextAuth package
jest.mock("next-auth/react");

// Replace the router with the mock
// eslint-disable-next-line global-require
jest.mock("next/router", () => require("next-router-mock"));

// Tell the mock router about the pages we will use (so we can use dynamic routes)
mockRouter.useParser(
  createDynamicRouteParser([
    // These paths should match those found in the `/pages` folder:
    "/driver",
    "/rider",
    "/profile",
  ]),
);

describe("End-to-end testing", () => {
  afterEach(() => {
    // Clear all mocks between tests
    jest.resetAllMocks();
  });

  test("Render index.js component", () => {
    SessionProvider.mockImplementation(({ children }) => (
      <mock-provider>{children}</mock-provider>
    ));

    useSession.mockReturnValue({ data: null, status: "unauthenticated" });

    render(<Home />);
  });

  // These tests won't work until User is defined

  // describe("Profile Testing", () => {
  //   let exampleProfile;

  //   beforeEach(() => {
  //     exampleProfile = {
  //           name: "John Doe",
  //           email: "jdoe@middlebury.edu",
  //           phoneNum: 1234567890,
  //           year: 2024,
  //       };
  //   });
  //   test("ProfileInfo: Name is displayed on page", () => {
  //     const { getByText } = render(<User profile={exampleProfile} />);
  //     expect(getByText(`Name: ${exampleProfile.name}`)).toBeVisible();
  //   });
  //   test("ProfileInfo: email is displayed on page", () => {
  //     const { getByText } = render(<User profile={exampleProfile} />);
  //     expect(getByText(`Email: ${exampleProfile.email}`)).toBeVisible();
  //   });
  //   test("ProfileInfo: phone number is displayed on page", () => {
  //     const { getByText } = render(<User profile={exampleProfile} />);
  //     expect(getByText(`Phone Number: ${exampleProfile.phoneNum}`)).toBeVisible();
  //   });
  //   test("ProfileInfo: grad year is displayed on page", () => {
  //     const { getByText } = render(<User profile={exampleProfile} />);
  //     expect(getByText(`Grad Year: ${exampleProfile.year}`)).toBeVisible();
  //   });
  // });
});
