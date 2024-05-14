import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useRouter } from "next/router";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PlannedTripsList from "@/components/PlannedTripsList";
import Button from "@mui/material/Button";
import { useSession } from "next-auth/react";
import theme, { ProfileButton, Footer } from "../../material/theme";

export default function Rider() {
  const router = useRouter();
  const handleClick = (comm) => {
    router.push(`/${comm}`);
  };
  const toProposedTripCreator = () => {
    router.push(`/rider/newProposedTrip`);
  };

  const [plannedTrips, setPlannedTrips] = useState([]);
  useEffect(() => {
    fetch("/api/plannedTrip")
      .then((res) => res.json())
      .then((data) => setPlannedTrips(data));
  }, []);

  const { data: session } = useSession();
  const [localUser, setLocalUser] = useState("");
  useEffect(() => {
    if (!session) return;
    fetch(`/api/User/${session.user.id}`)
      .then((res) => res.json())
      .then((data) => setLocalUser(data));
  }, [session]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
          Rider Portal
        </Typography>
        <Button
          variant="contained"
          onClick={() => toProposedTripCreator()}
          sx={{ left: "7px" }}
        >
          {" "}
          New Ride
        </Button>
        <PlannedTripsList plannedTrips={plannedTrips} userID={localUser.id} />
      </Container>
      <Footer>CS 312 - Spring 2024 - Cutts</Footer>
    </ThemeProvider>
  );
}
