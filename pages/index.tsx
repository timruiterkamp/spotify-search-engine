import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Homepage from "@/lib/components/pages/Homepage";

const StyledContainer = styled.div`
  padding: 0 2rem;
`;

const StyledMain = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  return (
    <StyledContainer>
      <Head>
        <title>Spotify Search engine</title>
        <meta name="description" content="Spotify search engine assesment" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledMain>
        <Homepage />
      </StyledMain>
    </StyledContainer>
  );
};

export default Home;
