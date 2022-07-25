import React from "react";
import styled from "styled-components";

type SearchInputProps = {
  onChange: () => void;
  placeholder: string;
};

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

const searchInput: React.FC<SearchInputProps> = ({ onChange, placeholder }) => {
  return (
    <SearchBarInput
      type="search"
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default searchInput;
