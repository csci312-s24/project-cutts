import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ButtonGroup, Box } from "@mui/material";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import Grid from "@mui/material/Grid";
import CarInfo from "../../components/CarInfo";

export default function Profile() {
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

  return (
    <div>
      <Container sx={{ mt: 5 }}>
        <Typography variant="h2" align="center" sx={{ color: "#0C4C7F" }}>
          Midd Rideshare
        </Typography>
        {session && (
          <Container align="center">
            Signed in as {session.user.email}{" "}
            <button type="button" onClick={signOut}>
              Sign out
            </button>
          </Container>
        )}
      </Container>

      <Box
        alignItems="center"
        justifyContent="center"
        display="flex"
        flexDirection="column"
        sx={{ mt: 1 }}
      >
        <ButtonGroup
          variant="contained"
          size="large"
          sx={{ backgroundColor: "#0C4C7F" }}
        >
          <Button
            onClick={() => handleClick("rider")}
            endIcon={<DirectionsCarIcon />}
            sx={{ color: "white" }}
          >
            Planned Trips
          </Button>
          {localUser.hasCar && (
            <Button
              onClick={() => handleClick("driver")}
              endIcon={<AirportShuttleIcon />}
              sx={{ color: "white" }}
            >
              Driver Portal
            </Button>
          )}
          <Button
            onClick={() => handleClick("yourTrips")}
            endIcon={<ChildCareIcon />}
            sx={{ color: "white" }}
          >
            Your Upcoming Trips
          </Button>
        </ButtonGroup>
      </Box>

      <Container sx={{ ml: 5 }}>
        <Typography variant="h4" align="left" sx={{ mt: 5, color: "#0C4C7F" }}>
          Profile
        </Typography>
        <Grid container sx={{ m: 2 }}>
          <Grid item>
            <Typography variant="h5" align="left" sx={{ color: "#0C4C7F" }}>
              Personal Info:
            </Typography>
            <ul>Name: {localUser.name} </ul>
            <ul>Email: {localUser.email} </ul>
            <ul>Phone Number: {localUser.num} </ul>
            <ul>Grad Year: {localUser.year} </ul>
          </Grid>
          <Grid item sx={{ ml: 5 }}>
            {localUser.hasCar && <CarInfo user={localUser} />}
          </Grid>
        </Grid>
        <Button
          variant="contained"
          size="small"
          onClick={() => toProfileEditor()}
          sx={{ left: "7px" }}
        >
          {" "}
          Edit Profile
        </Button>
      </Container>
    </div>
  );
}
