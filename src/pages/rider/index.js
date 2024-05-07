import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useRouter } from "next/router";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PlannedTripsList from "@/components/PlannedTripsList";
import theme, { ProfileButton, Footer } from "../../material/theme";

export default function Rider() {
  const router = useRouter();
  const handleClick = (comm) => {
    router.push(`/${comm}`);
  };

  const [plannedTrips, setPlannedTrips] = useState([]);
  useEffect(() => {
    fetch("/api/plannedTrip")
      .then((res) => res.json())
      .then((data) => setPlannedTrips(data));
  }, []);

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
        <PlannedTripsList plannedTrips={plannedTrips} />
      </Container>
      <Footer>CS 312 - Spring 2024 - Cutts</Footer>
    </ThemeProvider>
  );
}
