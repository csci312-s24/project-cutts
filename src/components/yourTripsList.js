/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import ToolTip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { tripList } from "../material/theme";

export default function YourTripsList({ plannedTrips, proposedTrips }) {
  const router = useRouter();

  const handleEditPlannedClick = (trip) => {
    router.push(`/yourTrips/${trip.id}/editPlannedTrip`);
  };

  const handleEditProposedClick = (trip) => {
    router.push(`/yourTrips/${trip.id}/editProposedTrip`);
  };

  const yourPlannedTripsList = plannedTrips.map((trip) => (
    <ListItem key={trip.id}>
      <Container>
        <Box sx={tripList}>
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
          {/* this button is being clicked automatically ?? */}
          <Button
            variant="contained"
            size="small"
            onClick={() => handleEditPlannedClick(trip)}
          >
            Edit This Planned Trip
          </Button>
        </Box>
      </Container>
    </ListItem>
  ));

  const yourProposedTripsList = proposedTrips.map((trip) => (
    <ListItem key={trip.id}>
      <Container>
        <Box sx={{ border: 1, borderRadius: "8px" }}>
          <Typography variant="h5">
            <ToolTip
              title={`Email: ${trip.relatedProposer.email}
            Number: ${trip.relatedProposer.num}`}
            >
              {/* fix this if you can -- need a new line above btwn those two */}
              <b>{trip.relatedProposer.name}</b>
            </ToolTip>{" "}
            needs a ride to <b>{trip.dest}</b>
          </Typography>
          <Typography>
            Date: <b>{trip.date.slice(0, 10)}</b>
          </Typography>
          <Typography>
            Departure Time: <b>{trip.timeFrame}</b>
          </Typography>
          <br />
          <Typography>{trip.message}</Typography>
          {/* this button is being clicked automatically ?? */}
          <Button
            variant="contained"
            size="small"
            onClick={() => handleEditProposedClick(trip)}
          >
            Edit This Proposed Trip
          </Button>
        </Box>
      </Container>
    </ListItem>
  ));

  return (
    <div>
      <List>{yourPlannedTripsList}</List>
      <List>{yourProposedTripsList}</List>
    </div>
  );
}
