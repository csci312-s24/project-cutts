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
import {
  Unstable_NumberInput as NumberInput,
  numberInputClasses,
} from "@mui/base/Unstable_NumberInput";
import { DateField } from "@mui/x-date-pickers/DateField";
import Input from "@mui/material/Input";
import theme from "../material/theme";

// just for creating planned trips - need to make separate React component for editing them
export default function CreateProposedTrip({ proposer, complete }) {
  const [dest, setDest] = useState("");
  const [date, setDate] = useState("");
  const [timeFrame, setTimeFrame] = useState("");
  const [message, setMessage] = useState("");

  const handleSaveClick = () => {
    const proposedTrip = {
      proposerID: proposer.id,
      dest,
      date,
      timeFrame,
      message,
    };
    complete(proposedTrip);
  };

  const canSave = dest && date && timeFrame;

  const handleCancelClick = () => complete();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ mt: 3 }}>
        <Typography variant="h5" align="left" sx={{ color: "#0C4C7F" }}>
          Propose a Trip!
        </Typography>
        <div className={styles.form}>
          <TextField
            required
            id="dest"
            label="Where do you want to go?"
            error={!dest}
            helperText={!dest ? "destination input can't be blank" : " "}
            onChange={(event) => setDest(event.target.value)}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={en}>
            <DateField
              required
              label="What date do you need a ride?"
              id="dateI"
              value={date}
              error={!date}
              onChange={(event) => setDate(event)}
            />
          </LocalizationProvider>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              What time of day would you like to leave?
            </InputLabel>
            <Select
              required
              labelId="timeFrame"
              id="timeFrame"
              value={timeFrame}
              helperText={!timeFrame ? "time frame can't be blank" : " "}
              label="What time of day would you like to leave?"
              onChange={(event) => setTimeFrame(event.target.value)}
            >
              <MenuItem>Morning</MenuItem>
              <MenuItem>Afternoon</MenuItem>
              <MenuItem>Night</MenuItem>
            </Select>
          </FormControl>

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
