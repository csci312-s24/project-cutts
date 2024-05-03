/*
  Displays the information of a car

  props:
    user - user object
*/
import Typography from "@mui/material/Typography";
import UserShape from "./UserShape";

export default function CarInfo({ user }) {
  // const carYear = ""
  // const carMake = ""
  // const carModel = ""
  return (
    <div>
      <Typography variant="h5" align="left">
        Car Info:
      </Typography>
      <ul>Year: {user.carYear ? user.carYear : ""}</ul>
      <ul>Make: {user.carMake ? user.carMake : ""}</ul>
      <ul>Model: {user.carModel}</ul>
      <ul>Plate: {user.carPlate}</ul>
    </div>
  );
}

CarInfo.propTypes = {
  user: UserShape.isRequired,
};
