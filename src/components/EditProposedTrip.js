/* eslint-disable react/prop-types */
import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { en } from "date-fns/locale";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField } from "@mui/x-date-pickers/DateField";

export default function EditProposedTrip({ proposedTrip, complete }) {
  const [destination, setDestination] = useState(proposedTrip.dest);
  const [time, setTime] = useState(proposedTrip.timeFrame);
  const [editedDate, setEditedDate] = useState(proposedTrip.date);
  const [note, setNote] = useState(
    proposedTrip.message ? proposedTrip.message : "",
  );

  const handleSaveClick = () => {
    const editedPlannedTrip = {
      ...proposedTrip,
      dest: destination,
      timeFrame: time,
      date: editedDate,
      message: note,
    };
    complete(editedPlannedTrip);
  };

  const handleCancelClick = () => complete();

  return (
    <div>
      <Container sx={{ mt: 3 }}>
        <Typography variant="h5" align="left" sx={{ color: "#0C4C7F" }}>
          Edit Your Proposed Trip
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
              id="editedDate"
              label="What day would you like to leave?"
              //   need to get the date from the database
              value={editedDate}
              error={!editedDate}
              helperText={!editedDate ? "Date can't be blank" : " "}
              onChange={(event) => setEditedDate(event)}
            />
          </LocalizationProvider>
          <br />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              What time of day would you like to leave?
            </InputLabel>
            <Select
              required
              labelId="time"
              id="time"
              value={time}
              helpertext={!time ? "time frame can't be blank" : " "}
              label="What time of day would you like to leave?"
              onChange={(event) => setTime(event.target.value)}
            >
              <MenuItem value="morning"> Morning</MenuItem>
              <MenuItem value="afternoon">Afternoon</MenuItem>
              <MenuItem value="night">Night</MenuItem>
            </Select>
          </FormControl>
          <br />

          <TextField
            id="note"
            label="(Optional) Add a message about your ride"
            value={note}
            onChange={(event) => setNote(event.target.value)}
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
