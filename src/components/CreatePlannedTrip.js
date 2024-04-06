/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useState } from "react";
import { Inter } from "next/font/google";
import UserShape from "./UserShape";

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

  const handleSaveClick = () => {
    const plannedTrip = {
      driverNameInput,
      destinationInput,
      departureTimeInput,
      departureLocationInput,
      seatInput,
    };
    complete(plannedTrip);
  };

  const handleCancelClick = () => complete();

  return (
    <div>
      <h1 className={inter.className}>Plan A Trip</h1>
      <div>
        <input
          type="text"
          id="DriverName"
          placeholder="enter your name"
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
          id="Departure Location"
          placeholder="How many available seats in your car"
          value={seatInput}
          onChange={(event) => setSeatInput(event.target.value)}
        />
      </div>
      <div>
        <div>
          <button type="button" onClick={handleSaveClick}>
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
