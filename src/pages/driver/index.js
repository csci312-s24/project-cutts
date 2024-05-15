import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ProposedTripsList from "../../components/ProposedTripsList";
import { ProfileButton, Footer } from "../../material/theme";

export default function Driver() {
  const router = useRouter();
  const { data: session } = useSession({ required: true });

  const handleClick = (comm) => {
    router.push(`/${comm}`);
  };
  const toRideCreator = () => {
    router.push(`/driver/newPlannedTrip`);
  };

  const [proposedTrips, setProposedTrips] = useState([]);
  useEffect(() => {
    if (!session) return;
    fetch("/api/proposedTrip")
      .then((res) => res.json())
      .then((data) => setProposedTrips(data));
  }, []);

  return (
    <div>
      <ProfileButton
        variant="outlined"
        size="medium"
        endIcon={<AccountBoxIcon />}
        onClick={() => handleClick("profile")}
      >
        Profile
      </ProfileButton>

      <Container sx={{ mt: 10 }}>
        <Typography variant="h4" align="left" sx={{ color: "#0C4C7F" }}>
          Driver Portal
        </Typography>
        <Button
          variant="contained"
          onClick={() => toRideCreator()}
          sx={{ left: "7px" }}
        >
          {" "}
          New Ride
        </Button>
        <ProposedTripsList proposedTrips={proposedTrips} />
      </Container>
      <Footer>CS 312 - Spring 2024 - Cutts</Footer>
    </div>
  );
}
