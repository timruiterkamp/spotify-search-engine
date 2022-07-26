import { gql, useQuery } from "@apollo/client";
import { GetServerSideProps } from "next";
import React from "react";
import client from "@/components/graphql/apollo-client";
import ResultOverview from "@/components/organisms/results/ResultOverview";
import Search from "@/components/organisms/search/Search";

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
