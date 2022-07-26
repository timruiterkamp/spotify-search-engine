import "regenerator-runtime/runtime";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/graphql/apollo-client";
import { SearchContextProvider } from "@/lib/context/SearchContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SearchContextProvider>
        <Component {...pageProps} />
      </SearchContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
