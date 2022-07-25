import React from "react";
import SearchBar from "../../molecules/searchBar/SearchBar";

type Props = {};

const Search = (props: Props) => {
  const handleSearch = (value: string) => {
    console.log("is searching");
    const searchData = {
      search: value,
    };

    const result = fetch("/api/spotify", {
      method: "POST",
      body: JSON.stringify(searchData),
    });

    console.log(result);
  };
  return <SearchBar handleSearch={handleSearch} />;
};

export default Search;
