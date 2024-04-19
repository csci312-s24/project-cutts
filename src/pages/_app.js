/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";

export default function App({ 
  Component, 
  pageProps: { session, ...pageProps},
 }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />;
    </SessionProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.shape({session: PropTypes.object}), 
};
