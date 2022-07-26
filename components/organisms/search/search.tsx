import React from "react";
import { useSearchContext } from "@/components/context/SearchContext";
import { SearchBar } from "@/components/molecules/searchBar/SearchBar";

const Search: React.FC = () => {
  const { searchSpotify } = useSearchContext();

  const handleSearch = async (value: string) => {
    return searchSpotify(value);
  };

  return <SearchBar handleSearch={handleSearch} />;
};

export default Search;
