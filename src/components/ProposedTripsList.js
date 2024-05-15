/* eslint-disable react/prop-types */
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import ToolTip from "@mui/material/Tooltip";
import { tripList } from "../material/theme";

export default function ProposedTripsList({ proposedTrips }) {
  const proposedTripList = proposedTrips.map((trip) => (
    <ListItem key={trip.id}>
      <Container>
        <Box sx={tripList}>
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
        </Box>
      </Container>
    </ListItem>
  ));
  return (
    <div>
      <List>{proposedTripList}</List>
    </div>
  );
}
