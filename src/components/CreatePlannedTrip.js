import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { en } from "date-fns/locale";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField } from "@mui/x-date-pickers/DateField";
import UserShape from "@/components/UserShape";
import PropTypes from "prop-types";

// just for creating planned trips - need to make separate React component for editing them
export default function CreatePlannedTrip({ driver, complete }) {
  const [destinationInput, setDestinationInput] = useState("");
  const [departureTimeInput, setDepartureTimeInput] = useState("");
  const [departureDateInput, setDepartureDateInput] = useState("");
  const [departureLocationInput, setDepartureLocationInput] = useState("");
  const [seatInput, setSeatInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const handleSaveClick = () => {
    const plannedTrip = {
      driverID: driver.id,
      destinationInput,
      date: departureDateInput,
      departureTimeInput,
      departureLocationInput,
      seatInput: parseInt(seatInput, 10),
      messageInput,
    };
    complete(plannedTrip);
  };

  const handleCancelClick = () => complete();

  return (
    <div>
      <Container sx={{ mt: 3 }}>
        <Typography variant="h5" align="left" sx={{ color: "#0C4C7F" }}>
          Create a Planned Trip
        </Typography>
        <div>
          <TextField
            required
            id="destinationInput"
            label="Where are you headed"
            error={!destinationInput}
            helperText={
              !destinationInput ? "destinationInput can't be blank" : " "
            }
            onChange={(event) => setDestinationInput(event.target.value)}
          />

          <br />
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={en}>
            <DateField
              required
              label="What date is your ride"
              id="departureDateInput"
              value={departureDateInput}
              error={!departureDateInput}
              onChange={(event) => setDepartureDateInput(event)}
            />
          </LocalizationProvider>
          <br />

          <TextField
            required
            margin="normal"
            id="departureTimeInput"
            label="What time will you leave "
            error={!departureTimeInput}
            value={departureTimeInput}
            helperText={
              !departureTimeInput ? "departure time can't be blank" : " "
            }
            onChange={(event) => setDepartureTimeInput(event.target.value)}
          />
          <br />

          <TextField
            required
            margin="normal"
            id="departureLocationInput"
            label="Where will you leave "
            error={!departureLocationInput}
            helperText={
              !departureLocationInput ? "destinationInput can't be blank" : " "
            }
            onChange={(event) => setDepartureLocationInput(event.target.value)}
          />
          <br />

          <TextField
            required
            margin="normal"
            type="number"
            min={0}
            max={12}
            id="seatInput"
            label="Available seats in your car "
            error={!seatInput || seatInput > 12 || seatInput < 0}
            helperText={
              !seatInput ? "You must enter a number between 0 and 12 " : " "
            }
            onChange={(event) => setSeatInput(event.target.value)}
          />
          <br />

          <TextField
            id="message"
            label="(Optional) Add a message about your ride"
            onChange={(event) => setMessageInput(event.target.value)}
          />
          <br />

          <div>
            <Button variant="contained" size="small" onClick={handleSaveClick}>
              Save
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={handleCancelClick}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

CreatePlannedTrip.propTypes = {
  driver: UserShape.isRequired,
  complete: PropTypes.func.isRequired,
};
