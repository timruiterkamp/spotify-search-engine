import React, { useEffect } from "react";
import SearchBar from "../../molecules/searchBar/SearchBar";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import client from "../../graphql/apollo-client";
import { useSearchContext } from "../../context/SearchContext";

const Search: React.FC = () => {
  const { searchSpotify } = useSearchContext();

  const handleSearch = async (value: string) => {
    return searchSpotify(value);
  };

  return <SearchBar handleSearch={handleSearch} />;
};

export default Search;
