import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useRouter } from "next/router";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import theme, { ProfileButton, HomeButton, Footer } from "../material/theme";

export default function Rider() {
  const router = useRouter();
  const handleClick = (comm) => {
    router.push(`/${comm}`);
  };
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
          Rider Portal
        </Typography>
        <p align="left">Planned Trips</p>
      </Container>
      <Footer>CS 312 - Spring 2024 - Cutts</Footer>
    </ThemeProvider>
  );
}
