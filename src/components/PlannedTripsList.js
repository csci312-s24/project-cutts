/* eslint-disable react/prop-types */
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import ToolTip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import { tripList } from "../material/theme";

export default function PlannedTripsList({ plannedTrips, userID }) {
  const handleRequestClick = async (trip) => {
    const newSeatRequest = {
      requester: userID,
      status: "pending",
      time: new Date().toISOString(),
      plannedTripId: trip.id,
    };

    const response = await fetch(`/api/seatRequest`, {
      method: "POST",
      body: JSON.stringify(newSeatRequest),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      // put new planned trip
      const response2 = await fetch(`/api/plannedTrip/${trip.id}`, {
        method: "PUT",
        body: JSON.stringify({
          ...trip,
          seatInput: trip.seatInput - 1,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response2.ok) {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      } else {
        console.log("Error: Failed to update the planned trip"); // eslint-disable-line no-console
      }
    } else {
      console.log("Error: Failed to create the seat request"); // eslint-disable-line no-console
    }
  };

  const plannedTripList = plannedTrips.map((trip) => (
    <ListItem key={trip.id}>
      <Container>
        <Box sx={{ border: 1, borderRadius: "8px" }}>
          <Box container sx={tripList}>
            <Typography variant="h5">
              <ToolTip
                title={`Email: ${trip.relatedUser.email}
            Number: ${trip.relatedUser.num}`}
              >
                {/* fix this if you can -- need a new line above btwn those two */}
                <b>{trip.relatedUser.name}</b>
              </ToolTip>{" "}
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

            <Button
              variant="contained"
              onClick={() => handleRequestClick(trip)}
              sx={{ top: 9, right: 9, position: "absolute" }}
            >
              Request <br /> Seat
            </Button>
          </Box>
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
