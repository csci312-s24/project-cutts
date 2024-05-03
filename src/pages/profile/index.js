import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

import { ButtonGroup, Box } from "@mui/material";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import theme, { Footer } from "../../material/theme";
import CarInfo from "../../components/CarInfo";

export default function Profile({
  ExampleCar = {
    year: 2000,
    make: "Toyota",
    model: "Corolla",
    plate: "123-ABC",
  },
}) {
  // routing
  const router = useRouter();
  const handleClick = (comm) => {
    router.push(`/${comm}`);
  };

  // editing profile
  const toProfileEditor = () => {
    router.push(`/profile/edit`);
  };
  const { data: session } = useSession({ required: true });
  const [localUser, setLocalUser] = useState("");
  useEffect(() => {
    if (!session) return;
    fetch(`/api/User/${session.user.id}`)
      .then((res) => res.json())
      .then((data) => setLocalUser(data));
  }, [session]);

  // hardcoded for now - normally get these from the AppUser prop
  const hasCar = true;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {session && (
        <div>
          Signed in as {session.user.email}{" "}
          <button type="button" onClick={signOut}>
            Sign out
          </button>
        </div>
      )}

      <Container sx={{ mt: 10 }}>
        <Typography variant="h4" align="left" sx={{ color: "#0C4C7F" }}>
          Profile
        </Typography>
        <Typography variant="h5" align="left">
          Personal Info:
        </Typography>
        <ul>Name: {localUser.name} </ul>
        <ul>Email: {localUser.email} </ul>
        <ul>Phone Number: {localUser.num} </ul>
        <ul>Grad Year: {localUser.year} </ul>
        {hasCar && <CarInfo car={ExampleCar} />}
        <Button
          variant="contained"
          onClick={() => toProfileEditor()}
          sx={{ left: "7px" }}
        >
          {" "}
          Edit Profile
        </Button>
      </Container>
      <Box
        alignItems="center"
        justifyContent="center"
        display="flex"
        flexDirection="column"
        sx={{ mt: 1 }}
      >
        <ButtonGroup variant="contained" size="large">
          <Button
            onClick={() => handleClick("rider")}
            endIcon={<DirectionsCarIcon />}
          >
            Planned Trips
          </Button>
          <Button
            onClick={() => handleClick("driver")}
            endIcon={<AirportShuttleIcon />}
          >
            Driver Portal
          </Button>
        </ButtonGroup>
      </Box>
      <Footer>CS 312 - Spring 2024 - Cutts</Footer>
    </ThemeProvider>
  );
}

// need help importing this from CarInfo.js instead of re-writing it
const CarInfooShape = PropTypes.shape({
  year: PropTypes.number.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  plate: PropTypes.string.isRequired,
});

Profile.propTypes = {
  ExampleCar: CarInfooShape,
};
