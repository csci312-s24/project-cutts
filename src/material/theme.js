import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

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
      default: "#ACD1FA",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  spacing: 40,
});

export default theme;
