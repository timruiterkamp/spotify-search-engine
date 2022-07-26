import React, { useEffect } from "react";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import client from "../../graphql/apollo-client";
import { useSearchContext } from "../../context/SearchContext";
import SearchBar from "../../molecules/searchBar/SearchBar";

const Search: React.FC = () => {
  const { searchSpotify } = useSearchContext();

  const handleSearch = async (value: string) => {
    return searchSpotify(value);
  };

  return <SearchBar handleSearch={handleSearch} />;
};

export default Search;
