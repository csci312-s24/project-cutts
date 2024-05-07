import PropTypes from "prop-types";
import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import UserShape from "./UserShape";

export default function AppUserProfileEdit({ appUser, complete }) {
  // states for title and text inputs
  const [nameInput, setNameInput] = useState(appUser.name ? appUser.name : "");
  const [numInput, setNumInput] = useState(appUser.num ? appUser.num : "");
  const [yearInput, setYearInput] = useState(appUser.year ? appUser.year : "");
  const [hasCarInput, setHasCarInput] = useState(
    appUser.hasCar ? appUser.hasCar : false,
  );
  const [carYearInput, setCarYearInput] = useState(
    appUser.carYear ? appUser.carYear : "",
  );
  const [carMakeInput, setCarMakeInput] = useState(
    appUser.carMake ? appUser.carMake : "",
  );
  const [carModelInput, setCarModelInput] = useState(
    appUser.carModel ? appUser.carModel : "",
  );
  const [carPlateInput, setCarPlateInput] = useState(
    appUser.carPlate ? appUser.carPlate : "",
  );

  const handleSaveClick = () => {
    const newUserInfo = {
      ...appUser,
      name: nameInput,
      num: numInput,
      year: yearInput,
      hasCar: hasCarInput,
      carYear: carYearInput,
      carMake: carMakeInput,
      carModel: carModelInput,
      carPlate: carPlateInput,
    };
    complete(newUserInfo);
  };

  const handleCancelClick = () => complete();

  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h5" align="left" sx={{ color: "#0C4C7F" }}>
        Edit Your Profile
      </Typography>
      <TextField
        id="Name"
        placeholder="enter your name"
        label="Name"
        variant="outlined"
        value={nameInput}
        onChange={(event) => setNameInput(event.target.value)}
        sx={{ paddingBottom: 1 }}
      />
      <div />
      <TextField
        id="PhoneNumber"
        placeholder="enter your phone number"
        label="Phone Number"
        variant="outlined"
        value={numInput}
        onChange={(event) => setNumInput(event.target.value)}
        sx={{ paddingBottom: 1 }}
      />
      <div />
      <TextField
        id="Year"
        placeholder="enter your class year"
        label="Class Year"
        variant="outlined"
        value={yearInput}
        onChange={(event) => setYearInput(event.target.value)}
        sx={{ paddingBottom: 1 }}
      />

      <Button
        variant="contained"
        size="small"
        onClick={() => setHasCarInput(!hasCarInput)}
      >
        {/* does this update hasCar to true or false? */}
        {hasCarInput ? "Delete Car" : "Add Car"}
      </Button>
      {hasCarInput && (
        <TextField
          id="CarYear"
          placeholder="enter the year of your car"
          label="Car Year"
          variant="outlined"
          value={carYearInput}
          onChange={(event) => setCarYearInput(event.target.value)}
          sx={{ paddingBottom: 1 }}
        />
      )}
      {hasCarInput && (
        <TextField
          id="CarMake"
          placeholder="enter the make of your car"
          label="Car Make"
          variant="outlined"
          value={carMakeInput}
          onChange={(event) => setCarMakeInput(event.target.value)}
          sx={{ paddingBottom: 1 }}
        />
      )}
      {hasCarInput && (
        <TextField
          id="CarModel"
          placeholder="enter the model of your car"
          label="Car Model"
          variant="outlined"
          value={carModelInput}
          onChange={(event) => setCarModelInput(event.target.value)}
          sx={{ paddingBottom: 1 }}
        />
      )}
      {hasCarInput && (
        <TextField
          id="CarPlate"
          placeholder="enter the plate of your car"
          label="Car Plate"
          variant="outlined"
          value={carPlateInput}
          onChange={(event) => setCarPlateInput(event.target.value)}
          sx={{ paddingBottom: 1 }}
        />
      )}
      <div>
        <Button variant="contained" size="small" onClick={handleSaveClick}>
          Save
        </Button>
        <Button variant="contained" size="small" onClick={handleCancelClick}>
          Cancel
        </Button>
      </div>
    </Container>
  );
}

AppUserProfileEdit.propTypes = {
  appUser: UserShape,
  complete: PropTypes.func.isRequired,
};
