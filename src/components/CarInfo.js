/*
  Displays the information of a car

  props:
    user - user object
*/
import Typography from "@mui/material/Typography";
import UserShape from "./UserShape";

export default function CarInfo({ user }) {
  let carYear = "";
  let carMake = "";
  let carModel = "";
  let carPlate = "";

  if (user !== undefined) {
    carYear = user.carYear;
  }
  if (user !== undefined) {
    carMake = user.carMake;
  }
  if (user !== undefined) {
    carModel = user.carModel;
  }
  if (user !== undefined) {
    carPlate = user.carPlate;
  }
  return (
    <div>
      <Typography variant="h5" align="left" sx={{ color: "#0C4C7F" }}>
        Car Info:
      </Typography>
      <ul>Year: {carYear}</ul>
      <ul>Make: {carMake}</ul>
      <ul>Model: {carModel}</ul>
      <ul>Plate: {carPlate}</ul>
    </div>
  );
}

CarInfo.propTypes = {
  user: UserShape.isRequired,
};
