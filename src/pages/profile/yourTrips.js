/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useRouter } from "next/router";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import YourTripsList from "@/components/yourTripsList";
import theme, { ProfileButton, Footer } from "../../material/theme";

export default function yourUpcomingTrips() {
  const router = useRouter();
  const handleClick = (comm) => {
    router.push(`/${comm}`);
  };

  const [yourTrips, setYourTrips] = useState([]);
  useEffect(() => {
    fetch("/api/yourTrips")
      .then((res) => res.json())
      .then((data) => setYourTrips(data));
  }, []);
  console.log("your planned trips", yourTrips[0]);
  console.log("your proposed trips", yourTrips[1]);

  // we aren't sure this works really
  // const filter = async () => {
  //   fetch(`/api/yourTrips`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(),
  //   });
  // };

  // get seat requested rides
  // from all seat requests, filter by requester id and return trips

  // const response = await fetch(`/api/yourTrips`, {
  // method: "GET",
  // body: JSON.stringify(),
  // headers: new Headers({
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  // }),
  // });

  // console.log(response)

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
          Your Upcoming Trips
        </Typography>
      </Container>
      {yourTrips.length === 2 ? (
        <YourTripsList
          plannedTrips={yourTrips[0]}
          proposedTrips={yourTrips[1]}
        />
      ) : null}
      <Footer>CS 312 - Spring 2024 - Cutts</Footer>
    </ThemeProvider>
  );
}
