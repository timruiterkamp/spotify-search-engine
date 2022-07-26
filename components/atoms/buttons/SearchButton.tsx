import React from "react";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

interface SearchButtonProps {
  handleClick: () => void;
  className?: string;
}

export const StyledSearchButton = styled.button`
  width: 50px;
  height: 49.5px;
  border-radius: 0 50px 50px 0;
  border: 0;
  background-color: #3a3a3a;
  color: white;
  padding: 10px 20px;
  transition: 0.3s ease-in-out all;
  cursor: pointer;

  svg {
    font-size: 1.15rem;
    margin-left: -7px;
  }

  &:hover {
    background-color: #1db954;
  }
`;

const SearchButton: React.FC<SearchButtonProps> = ({
  handleClick,
  className,
}) => {
  return (
    <StyledSearchButton className={className} onClick={handleClick}>
      <FiSearch />
    </StyledSearchButton>
  );
};

export default SearchButton;
