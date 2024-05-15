/* eslint-disable react/prop-types */
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { en } from "date-fns/locale";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField } from "@mui/x-date-pickers/DateField";

export default function EditPlannedTrip({ plannedTrip, complete }) {
  const [destination, setDestination] = useState(plannedTrip.destinationInput);
  const [time, setTime] = useState(plannedTrip.departureTimeInput);
  const [editedDate, setEditedDate] = useState(plannedTrip.date);
  const [loca, setLoca] = useState(plannedTrip.departureLocationInput);
  const [seat, setSeat] = useState(plannedTrip.seatInput);
  const [message, setMessage] = useState(
    plannedTrip.messageInput ? plannedTrip.messageInput : "",
  );

  const handleSaveClick = () => {
    const editedPlannedTrip = {
      ...plannedTrip,
      destinationInput: destination,
      departureTimeInput: time,
      date: editedDate,
      departureLocationInput: loca,
      seatInput: seat,
      messageInput: message,
    };
    complete(editedPlannedTrip);
  };

  const handleCancelClick = () => complete();

  return (
    <div>
      <CssBaseline />
      <Container sx={{ mt: 3 }}>
        <Typography variant="h5" align="left" sx={{ color: "#0C4C7F" }}>
          Edit Your Planned Trip
        </Typography>
        <div>
          <TextField
            required
            id="destination"
            label="Where are you headed"
            value={destination}
            error={!destination}
            helperText={!destination ? "destinationInput can't be blank" : " "}
            onChange={(event) => setDestination(event.target.value)}
          />
          <br />

          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={en}>
            <DateField
              required
              label="What date is your ride"
              id="editedDate"
              //   need to get the date from the database
              value={editedDate}
              error={!editedDate}
              helperText={!editedDate ? "Date can't be blank" : " "}
              onChange={(event) => setEditedDate(event)}
            />
          </LocalizationProvider>
          <br />
          <TextField
            required
            margin="normal"
            id="time"
            label="What time will you leave"
            value={time}
            error={!time}
            helperText={!time ? "departure time can't be blank" : " "}
            onChange={(event) => setTime(event.target.value)}
          />
          <br />

          <TextField
            required
            margin="normal"
            id="loca"
            label="Where will you leave "
            value={loca}
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
            id="seat"
            label="Available seats in your car "
            value={seat}
            error={!seat || seat > 12 || seat < 0}
            helperText={
              !seat ? "You must enter a number between 0 and 12 " : " "
            }
            onChange={(event) => setSeat(event.target.value)}
          />
          <br />
          <TextField
            id="message"
            label="(Optional) Add a message about your ride"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
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
