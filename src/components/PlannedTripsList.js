/* eslint-disable react/prop-types */
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import ToolTip from "@mui/material/Tooltip";

export default function PlannedTripsList({ plannedTrips }) {
  const plannedTripList = plannedTrips.map((trip) => (
    <ListItem key={trip.id}>
      <Container>
        <Box
          sx={{
            border: 1,
            padding: 1,
            boxShadow: 1,
            borderColor: "lightgrey",
            borderRadius: "8px",
            bgcolor: "#f0f4ff",
          }}
        >
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
