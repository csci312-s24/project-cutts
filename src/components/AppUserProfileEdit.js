import PropTypes from "prop-types";
import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import UserShape from "./UserShape";

export default function AppUserProfileEdit({ appUser, complete }) {
  // states for title and text inputs
  const [nameInput, setNameInput] = useState(appUser ? appUser.name : "");
  const [numInput, setNumInput] = useState(appUser ? appUser.num : "");
  const [yearInput, setYearInput] = useState(appUser ? appUser.year : "");

  const handleSaveClick = () => {
    const newUserInfo = {
      ...appUser,
      nameInput,
      numInput,
      yearInput,
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
