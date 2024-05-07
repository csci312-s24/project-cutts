import { render } from "@testing-library/react";
import CarInfo from "./CarInfo";

describe("CarInfo: CarInfo tests", () => {
  let exampleUser;

  beforeEach(() => {
    exampleUser = {
      id: 1,
      email: "email",
      name: "name",
      num: "1234567890",
      year: 2024,
      hasCar: true,
      carMake: "Honda",
      carModel: "CRV",
      carYear: 2015,
      carPlate: "123ABC",
    };
  });
  test("CarInfo: car make is displayed", () => {
    const { getByText } = render(<CarInfo user={exampleUser} />);
    expect(getByText(`Make: ${exampleUser.carMake}`)).toBeVisible();
  });
  test("CarInfo: car model is displayed", () => {
    const { getByText } = render(<CarInfo user={exampleUser} />);
    expect(getByText(`Model: ${exampleUser.carModel}`)).toBeVisible();
  });
  test("CarInfo: car year is displayed", () => {
    const { getByText } = render(<CarInfo user={exampleUser} />);
    expect(getByText(`Year: ${exampleUser.carYear}`)).toBeVisible();
  });
  test("CarInfo: car plate is displayed", () => {
    const { getByText } = render(<CarInfo user={exampleUser} />);
    expect(getByText(`Plate: ${exampleUser.carPlate}`)).toBeVisible();
  });
});
