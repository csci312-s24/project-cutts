/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { useRouter } from "next/router";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import YourTripsList from "@/components/yourTripsList";
import { ProfileButton } from "../../material/theme";

export default function yourUpcomingTrips() {
  const router = useRouter();
  const handleClick = (comm) => {
    router.push(`/${comm}`);
  };

  const [yourTrips, setYourTrips] = useState([[], []]);
  useEffect(() => {
    fetch("/api/yourTrips")
      .then((res) => res.json())
      .then((data) => setYourTrips(data));
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
          Your Upcoming Trips
        </Typography>
      </Container>
      <YourTripsList plannedTrips={yourTrips[0]} proposedTrips={yourTrips[1]} />
    </div>
  );
}
