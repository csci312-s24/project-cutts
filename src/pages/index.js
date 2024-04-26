import Head from "next/head";
import { useRouter } from "next/router";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Button, ButtonGroup, Box } from "@mui/material";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import theme, { ProfileButton, Footer } from "../material/theme";
import LoginWidget from "../components/LoginWidget";

export default function Home() {
  const router = useRouter();
  const handleClick = (comm) => {
    router.push(`/${comm}`);
  };
  return (
    <AppCacheProvider>
      <Head>
        <title>Cutts App</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <div>
            <Container sx={{ mt: 20 }}>
              <Typography variant="h3" align="center" sx={{ color: "#0C4C7F" }}>
                Midd Rideshare
              </Typography>
              <p align="center">
                Get rides to Burlington, Boston, or wherever else you may need
                to go!
              </p>
            </Container>
          </div>

          <ProfileButton
            variant="outlined"
            size="medium"
            endIcon={<AccountBoxIcon />}
            onClick={() => handleClick("profile")}
          >
            Profile
          </ProfileButton>
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            flexDirection="column"
            sx={{ mt: 1 }}
          >
            <div>
              <LoginWidget />
            </div>
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
        </main>

        <Footer>CS 312 - Spring 2024 - Cutts</Footer>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
