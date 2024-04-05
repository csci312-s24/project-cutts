import { render } from "@testing-library/react";
import CarInfo from "./CarInfo";

describe("CarInfo: CarInfo tests", () => {
  let exampleCar;

  beforeEach(() => {
    exampleCar = {
      make: "Honda",
      model: "CRV",
      year: 2015,
      plate: "123ABC",
    };
  });
  test("CarInfo: car make is displayed", () => {
    const { getByText } = render(<CarInfo car={exampleCar} />);
    expect(getByText(`Make: ${exampleCar.make}`)).toBeVisible();
  });
  test("CarInfo: car model is displayed", () => {
    const { getByText } = render(<CarInfo car={exampleCar} />);
    expect(getByText(`Model: ${exampleCar.model}`)).toBeVisible();
  });
  test("CarInfo: car year is displayed", () => {
    const { getByText } = render(<CarInfo car={exampleCar} />);
    expect(getByText(`Year: ${exampleCar.year}`)).toBeVisible();
  });
  test("CarInfo: car plate is displayed", () => {
    const { getByText } = render(<CarInfo car={exampleCar} />);
    expect(getByText(`Plate: ${exampleCar.plate}`)).toBeVisible();
  });
});
