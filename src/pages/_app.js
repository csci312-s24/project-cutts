/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@mui/material/styles";
import theme, { Footer } from "@/material/theme";

export default function App(appProps) {
  const { Component, pageProps } = appProps;
  const { session } = pageProps;

  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <Footer>CS 312 - Spring 2024 - Cutts</Footer>
      </SessionProvider>
    </ThemeProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.shape({ session: PropTypes.object }),
};
