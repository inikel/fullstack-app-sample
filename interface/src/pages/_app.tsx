import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { CurrentUserState } from "../contexts/CurrentUser";

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  const [currentUser, setCurrentUser] = React.useState<string>("");

  return (
    <ApolloProvider client={apolloClient}>
      {/* <CurrentUserState.Provider value={{ currentUser, setCurrentUser }}> */}
      <CurrentUserState.Provider value={currentUser}>
        <Component {...pageProps} />
      </CurrentUserState.Provider>
    </ApolloProvider>
  );
}
