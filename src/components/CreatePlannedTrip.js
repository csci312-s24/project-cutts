/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import styles from "@/styles/Home.module.css";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { en } from "date-fns/locale";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  Unstable_NumberInput as NumberInput,
  numberInputClasses,
} from "@mui/base/Unstable_NumberInput";
import { DateField } from "@mui/x-date-pickers/DateField";
import Input from "@mui/material/Input";
import theme from "../material/theme";

// just for creating planned trips - need to make separate React component for editing them
export default function CreatePlannedTrip({ driver, complete }) {
  // states for inputs (driver - name, destination, departure time, departure location, number of available seats)

  const [destinationInput, setDestinationInput] = useState("");
  const [departureTimeInput, setDepartureTimeInput] = useState("");
  const [departureDateInput, setDepartureDateInput] = useState("");
  const [departureLocationInput, setDepartureLocationInput] = useState("");
  const [seatInput, setSeatInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const handleSaveClick = () => {
    const plannedTrip = {
      driverID: driver,
      destinationInput,
      date: departureDateInput,
      departureTimeInput,
      departureLocationInput,
      seatInput,
      messageInput,
    };
    complete(plannedTrip);
  };

  const canSave =
    destinationInput &&
    departureTimeInput &&
    departureLocationInput &&
    seatInput;

  const handleCancelClick = () => complete();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ mt: 3 }}>
        <Typography variant="h5" align="left" sx={{ color: "#0C4C7F" }}>
          Create a Planned Trip
        </Typography>
        <div className={styles.form}>
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

          <TextField
            id="message"
            label="(Optional) Add a message about your ride"
            onChange={(event) => setMessageInput(event.target.value)}
          />
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
    </ThemeProvider>
  );
}

// prop type is number for driver
