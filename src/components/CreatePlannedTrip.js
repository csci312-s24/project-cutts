/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useState } from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { TextField } from "@mui/material";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import { Unstable_NumberInput as NumberInput } from "@mui/base/Unstable_NumberInput";

import { DateField } from "@mui/x-date-pickers/DateField";

const inter = Inter({ subsets: ["latin"] });

// just for creating planned trips - need to make separate React component for editing them
export default function CreatePlannedTrip({ driver, complete }) {
  // states for inputs (driver - name, destination, departure time, departure location, number of open seats)
  const [driverNameInput, setDriverNameInput] = useState(
    driver ? driver.name : "",
  );
  const [destinationInput, setDestinationInput] = useState("");
  const [departureTimeInput, setDepartureTimeInput] = useState("");
  const [departureDateInput, setDepartureDateInput] = useState("");
  const [departureLocationInput, setDepartureLocationInput] = useState("");
  const [seatInput, setSeatInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const handleSaveClick = () => {
    const plannedTrip = {
      driverNameInput,
      destinationInput,
      departureTimeInput,
      departureLocationInput,
      seatInput,
      messageInput,
    };
    complete(plannedTrip);
  };

  const canSave =
    driverNameInput &&
    destinationInput &&
    departureTimeInput &&
    departureLocationInput &&
    seatInput;

  const handleCancelClick = () => complete();

  return (
    <div className={styles.component}>
      <h1 className={inter.className}>Plan a Trip</h1>
      <div className={styles.form}>
        <TextField
          required
          fullWidth
          margin="normal"
          id="driverNameInput"
          label="Your name"
          error={!driverNameInput}
          helperText={!driverNameInput ? "DriverName can't be blank" : " "}
          onChange={(event) => setDriverNameInput(event.target.value)}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="destinationInput"
          label="Where are you headed"
          error={!destinationInput}
          helperText={
            !destinationInput ? "destinationInput can't be blank" : " "
          }
          onChange={(event) => setDestinationInput(event.target.value)}
        />

        {/* <DateField
          required
          label="What date is your ride"
          id="departureDateInput"
          value={departureDateInput}
          error={!destinationInput}
          onChange={(event) => setDepartureDateInput(event.target.value)}   
        /> */}
        {/* <TimeField
          id="Departure Time"
          label="What time will you leave"
          value={departureTimeInput}
          onChange={(event) => setDepartureTimeInput(event.target.value)}
        /> */}
        <TextField
          required
          fullWidth
          margin="normal"
          id="departureLocationInput"
          label="Where will you leave "
          error={!departureLocationInput}
          helperText={
            !departureLocationInput ? "destinationInput can't be blank" : " "
          }
          onChange={(event) => setDepartureLocationInput(event.target.value)}
        />
        <NumberInput
          min={0}
          max={12}
          type="number"
          id="seatInput"
          placeholder="Available seats in your car"
          value={seatInput}
          onChange={(event, val) => setSeatInput(val)}
        />
        <input
          className={styles.messageInput}
          type="text"
          id="message"
          placeholder="(Optional) Add a message about your ride"
          value={messageInput}
          onChange={(event) => setMessageInput(event.target.value)}
        />
        <div>
          <button type="button" onClick={handleSaveClick} disabled={!canSave}>
            Save
          </button>
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
