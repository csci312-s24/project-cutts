/* eslint-disable react/prop-types */
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

export default function PlannedTripsList({ plannedTrips }) {
  async function FindDriverName(driverID) {
    const [driver, setDriver] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`/api/User/${driverID}`);
        const data = await response.json();
        setDriver(data);
      };
      fetchData();
    }, [driverID]);
    // console.log(driver)
    // help
    // sometimes driver is returning as null... so the driver name is not being displayed
    return driver;
  }

  const plannedTripList = plannedTrips.map((trip) => (
    <ListItem key={trip.id}>
      <Container>
        <Box sx={{ border: 1, borderRadius: "8px" }}>
          <Typography variant="h5">
            <b>
              {FindDriverName(trip.driverID).name
                ? FindDriverName(trip.driverID).name
                : "PantherNotHere"}
            </b>{" "}
            is driving from <b>{trip.departureLocationInput}</b> to{" "}
            <b>{trip.destinationInput}</b>
          </Typography>
          <Typography>
            Date: <b>{trip.date.slice(0, 10)}</b>
          </Typography>
          <Typography>
            Departure Time: <b>{trip.departureTimeInput}</b>
          </Typography>
          <Typography>
            Seats Available: <b>{trip.seatInput}</b>
          </Typography>
          <br />
          <Typography>{trip.messageInput}</Typography>
        </Box>
      </Container>
    </ListItem>
  ));
  return (
    <div>
      <List>{plannedTripList}</List>
    </div>
  );
}
