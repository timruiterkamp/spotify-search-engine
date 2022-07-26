import { gql, useQuery } from "@apollo/client";
import { GetServerSideProps } from "next";
import React from "react";
import client from "../graphql/apollo-client";
import ResultOverview from "../organisms/search/results/ResultOverview";
import Search from "../organisms/search/search";

const Homepage: React.FC = () => {
  return (
    <>
      <h1>Spotify search</h1>
      <Search />
      <ResultOverview />
    </>
  );
};

export default Homepage;
