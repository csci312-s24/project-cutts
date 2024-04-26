/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";

// {
//   Component,
//   pageProps: { session, ...pageProps},
//  }

export default function App(appProps) {
  const { Component, pageProps } = appProps;
  const { session } = pageProps;

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />;
    </SessionProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.shape({ session: PropTypes.object }),
};
