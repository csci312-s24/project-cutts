import Head from "next/head";
import { useRouter } from "next/router";
import { styled, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Button, ButtonGroup, Box } from "@mui/material";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import theme from "../material/theme";

const ProfileButton = styled(Button)({
  position: "absolute",
  top: "7px",
  right: "7px",
});

const Footer = styled("footer")(({ theme: styledTheme }) => ({
  borderTop: "1px solid #eaeaea",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: styledTheme.spacing(5),
  paddingTop: styledTheme.spacing(2),
}));

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
            <Container>
              <Typography variant="h3" align="center">
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
        </main>

        <Footer>CS 312 Cutts Footer</Footer>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
