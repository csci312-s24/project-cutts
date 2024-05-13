/* eslint-disable react/prop-types */
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import ToolTip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

export default function PlannedTripsList({ plannedTrips, userId }) {
  const handleCancelClick = async (tripId) => {
    console.log("hello");
    const newSeatRequest = {
      requester: userId, // not sure how to get the user id
      status: "requested",
      time: new Date().toISOString(),
      plannedTripId: tripId,
    };

    const response = await fetch(`/api/plannedTrip`, {
      method: "POST",
      body: JSON.stringify(newSeatRequest),
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    if (response.ok) {
      console.log(response.JSON);
    } else {
      console.log("Error: Failed to create the seat request"); // eslint-disable-line no-console
    }
  };

  const plannedTripList = plannedTrips.map((trip) => (
    <ListItem key={trip.id}>
      <Container>
        <Box sx={{ border: 1, borderRadius: "8px" }}>
          <Button
            variant="contained"
            onClick={handleCancelClick(trip.id)}
            sx={{ top: 0, right: 0 }}
          >
            Request <br /> Seat
          </Button>
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
