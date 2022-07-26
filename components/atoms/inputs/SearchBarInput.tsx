import React, { useEffect, useState } from "react";
import styled from "styled-components";

type SearchInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string | undefined;
};

export const StyledSearchBar = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 50px;
  color: #3a3a3a;
  border: 1px solid #eaeaea;
  min-width: 25vw;
  padding: 10px 20px;
`;

const SearchBarInput: React.FC<SearchInputProps> = ({
  onChange,
  placeholder,
  value,
}) => {
  const [localValue, setLocalValue] = useState<string>("");

  useEffect(() => {
    if (value) {
      setLocalValue(value);
    }
    return () => {
      setLocalValue("");
    };
  }, [value]);

  return (
    <StyledSearchBar
      type="search"
      onChange={onChange}
      placeholder={placeholder}
      value={localValue}
    />
  );
};

export default SearchBarInput;
