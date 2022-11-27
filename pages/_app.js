import "../styles/globals.css";
import React from "react";
import { ReactDOM } from "react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
