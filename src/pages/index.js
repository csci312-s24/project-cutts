import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import theme, { Footer } from "../material/theme";
import LoginWidget from "../components/LoginWidget";

export default function Home() {
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
          </Box>
        </main>

        <Footer>CS 312 - Spring 2024 - Cutts</Footer>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
