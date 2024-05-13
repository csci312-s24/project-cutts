/* eslint-disable react/prop-types */
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
import { DateField } from "@mui/x-date-pickers/DateField";
import theme from "../material/theme";

// just for creating planned trips - need to make separate React component for editing them
export default function EditPlannedTrip({ plannedTrip, complete }) {
  const [destinationInput, setDestinationInput] = useState(
    plannedTrip.destinationInput ? plannedTrip.destinationInput : "",
  );
  const [departureTimeInput, setDepartureTimeInput] = useState(
    plannedTrip.departureTimeInput ? plannedTrip.departureTimeInput : "",
  );
  const [departureDateInput, setDepartureDateInput] = useState(
    plannedTrip.fateInput ? plannedTrip.dateInput : "",
  );
  const [departureLocationInput, setDepartureLocationInput] = useState(
    plannedTrip.departureLocationInput
      ? plannedTrip.departureLocationInput
      : "",
  );
  const [seatInput, setSeatInput] = useState(
    plannedTrip.seatInput ? plannedTrip.seatInput : "",
  );
  const [messageInput, setMessageInput] = useState(
    plannedTrip.messageInput ? plannedTrip.messageInput : "",
  );

  const handleSaveClick = () => {
    const editedPlannedTrip = {
      ...plannedTrip,
      destinationInput,
      date: departureDateInput,
      departureTimeInput,
      departureLocationInput,
      seatInput,
      messageInput,
    };
    complete(editedPlannedTrip);
  };

  const handleCancelClick = () => complete();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ mt: 3 }}>
        <Typography variant="h5" align="left" sx={{ color: "#0C4C7F" }}>
          Edit Your Planned Trip
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
