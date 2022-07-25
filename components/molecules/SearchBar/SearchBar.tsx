import React, { useEffect } from "react";
import { SearchBarInput } from "../../atoms/inputs/searchInput";

type SearchBarProps = {
  handleSearch: (value: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState<string | null>(null);
  // Searchbar with autocomplete
  // gather search results through server side props
  // Suggestions on categories

  const handleGetReq = async () => {
    const response = fetch("/api/spotify");
    const data = await (await response).json();
    console.log(data);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setSearchQuery(e.currentTarget.value);
  };

  useEffect(() => {
    handleGetReq();
  }, []);

  return (
    <div>
      <SearchBarInput
        placeholder="Search spotify song"
        onChange={handleSearchChange}
      />
      <button onClick={() => searchQuery && handleSearch(searchQuery)}>
        Search{" "}
      </button>
    </div>
  );
};

export default SearchBar;
