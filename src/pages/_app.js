/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";

export default function App(appProps) {
  const { Component, pageProps } = appProps;
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}),
};
