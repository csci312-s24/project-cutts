/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useState } from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

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
        <div>
          <input
            type="text"
            id="DriverName"
            placeholder="Your name"
            value={driverNameInput}
            onChange={(event) => setDriverNameInput(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            id="Destination"
            placeholder="Where are you headed"
            value={destinationInput}
            onChange={(event) => setDestinationInput(event.target.value)}
          />
        </div>
        <div>
          <input
            type="date"
            id="Departure Time"
            placeholder="What time will you leave"
            value={departureDateInput}
            onChange={(event) => setDepartureDateInput(event.target.value)}
          />
        </div>
        <div>
          <input
            type="time"
            id="Departure Time"
            placeholder="What time will you leave"
            value={departureTimeInput}
            onChange={(event) => setDepartureTimeInput(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            id="Departure Location"
            placeholder="Where will you leave from"
            value={departureLocationInput}
            onChange={(event) => setDepartureLocationInput(event.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            min="0"
            id="Departure Location"
            placeholder="Available seats in your car"
            value={seatInput}
            onChange={(event) => setSeatInput(event.target.value)}
          />
        </div>
        <div>
          <input
            className={styles.messageInput}
            type="text"
            id="message"
            placeholder="(Optional) Add a message about your ride"
            value={messageInput}
            onChange={(event) => setMessageInput(event.target.value)}
          />
        </div>
        <div>
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
    </div>
  );
}
