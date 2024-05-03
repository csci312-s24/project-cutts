import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import theme, { HomeButton, Footer } from "../../material/theme";
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
  const { data: session } = useSession();
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
      <HomeButton
        variant="outlined"
        size="medium"
        endIcon={<HomeIcon />}
        onClick={() => handleClick("")}
      >
        Home
      </HomeButton>

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
        {hasCar && <CarInfo car={localUser} />}
        <Button
          variant="contained"
          onClick={() => toProfileEditor()}
          sx={{ left: "7px" }}
        >
          {" "}
          Edit Profile
        </Button>
      </Container>
      <Footer>CS 312 - Spring 2024 - Cutts</Footer>
    </ThemeProvider>
  );
}
