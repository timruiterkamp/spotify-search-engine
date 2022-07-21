import React, { useEffect } from "react";
import styled from "styled-components";

type Props = {};

export const SearchBarInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 50px;
  color: #3a3a3a;
  border: 1px solid #eaeaea;
  min-width: 25vw;
  padding: 10px 20px;
  animation: ease-in-out 0.3s infinite;
`;

const SearchBar = (props: Props) => {
  // Searchbar with autocomplete
  // gather search results through server side props
  // Suggestions on categories

  const handleGetReq = async () => {
    const response = fetch("/api/spotify");
    const data = await (await response).json();
    console.log(data);
  };
  useEffect(() => {
    handleGetReq();
  }, []);

  return (
    <div>
      <SearchBarInput
        placeholder="Search spotify song"
        onChange={(e) => console.log(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBar;
