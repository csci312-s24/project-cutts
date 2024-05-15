import Head from "next/head";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import LoginWidget from "../components/LoginWidget";

export default function Home() {
  return (
    <AppCacheProvider>
      <Head>
        <title>Cutts App</title>
      </Head>
      <main>
        <div>
          <Container sx={{ mt: 20 }}>
            <Typography variant="h3" align="center" sx={{ color: "#0C4C7F" }}>
              Midd Rideshare
            </Typography>
            <p align="center">
              Get rides to Burlington, Boston, or wherever else you may need to
              go!
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
    </AppCacheProvider>
  );
}
