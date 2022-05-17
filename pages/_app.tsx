import React from "react";
import type { AppProps } from "next/app";
import { Provider as ReduxStoreProvider } from "react-redux";
import store from "src/redux/store";
import GlobalStyle from "../styles/GlobalStyles";
import ThemeProvider from "src/components/providers/ThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <ReduxStoreProvider store={store}>
        <ThemeProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ReduxStoreProvider>
    </React.Fragment>
  );
}

export default MyApp;
