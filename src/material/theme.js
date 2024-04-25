import { Roboto } from "next/font/google";
import { styled, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { Button } from "@mui/material";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const ProfileButton = styled(Button)({
  position: "absolute",
  top: "7px",
  right: "7px",
});

export const HomeButton = styled(Button)({
  position: "absolute",
  top: "7px",
  left: "7px",
});

export const Footer = styled("footer")(({ theme: styledTheme }) => ({
  borderTop: "1px solid #eaeaea",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: styledTheme.spacing(5),
  paddingTop: styledTheme.spacing(2),
}));

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#0C4C7F",
    },
    secondary: {
      main: "#1E8FE9",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#cfe5fc",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
