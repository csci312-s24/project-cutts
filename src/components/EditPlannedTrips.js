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

export default function EditPlannedTrip({ plannedTrip, complete }) {
  const [destination, setDestination] = useState(
    plannedTrip.destinationInput ? plannedTrip.destinationInput : "",
  );
  const [time, setTime] = useState(
    plannedTrip.departureTimeInput ? plannedTrip.departureTimeInput : "",
  );
  const [editedDate, setEditedDate] = useState(
    plannedTrip.date ? plannedTrip.date : "",
  );
  const [loca, setLoca] = useState(
    plannedTrip.departureLocationInput
      ? plannedTrip.departureLocationInput
      : "",
  );
  const [seat, setSeat] = useState(
    plannedTrip.seatInput ? plannedTrip.seatInput : "",
  );
  const [message, setMessage] = useState(
    plannedTrip.messageInput ? plannedTrip.messageInput : "",
  );

  const handleSaveClick = () => {
    const editedPlannedTrip = {
      ...plannedTrip,
      destinationInput: destination,
      date: editedDate,
      departureTimeInput: time,
      departureLocationInput: loca,
      seatInput: seat,
      messageInput: message,
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
            error={!destination}
            helperText={!destination ? "destinationInput can't be blank" : " "}
            onChange={(event) => setDestination(event.target.value)}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={en}>
            <DateField
              required
              label="What date is your ride"
              id="date"
              value={editedDate}
              error={!editedDate}
              onChange={(event) => setEditedDate(event)}
            />
          </LocalizationProvider>

          <TextField
            required
            margin="normal"
            id="time"
            label="What time will you leave "
            error={!time}
            value={time}
            helperText={!time ? "departure time can't be blank" : " "}
            onChange={(event) => setTime(event.target.value)}
          />

          <TextField
            required
            margin="normal"
            id="departureLocationInput"
            label="Where will you leave "
            error={!loca}
            helperText={!loca ? "destinationInput can't be blank" : " "}
            onChange={(event) => setLoca(event.target.value)}
          />

          <TextField
            required
            margin="normal"
            type="number"
            min={0}
            max={12}
            id="seatInput"
            label="Available seats in your car "
            error={!seat || seat > 12 || seat < 0}
            helperText={
              !seat ? "You must enter a number between 0 and 12 " : " "
            }
            onChange={(event) => setSeat(event.target.value)}
          />

          <TextField
            id="message"
            label="(Optional) Add a message about your ride"
            onChange={(event) => setMessage(event.target.value)}
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
