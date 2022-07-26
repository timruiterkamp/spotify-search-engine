import React, { useEffect } from "react";
import styled from "styled-components";
import SearchButton from "../../atoms/buttons/SearchButton";
import SpeechButton from "../../atoms/buttons/SpeechButton";
import SearchBarInput from "../../atoms/inputs/SearchBarInput";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

type SearchBarProps = {
  handleSearch: (value: string) => void;
};

const StyledSearchBar = styled.div`
  position: relative;

  .speech-button {
    position: absolute;
    right: 50px;
  }
  .search-button {
    position: absolute;
    right: 0;
  }
`;

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState<string | undefined>(
    undefined
  );
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
  };

  const handleSpeech = () => {
    if (
      !listening &&
      isMicrophoneAvailable &&
      browserSupportsSpeechRecognition
    ) {
      resetTranscript();
      SpeechRecognition.startListening();
    } else {
      SpeechRecognition.stopListening();
    }
  };

  useEffect(() => {
    if (transcript) {
      setSearchQuery(transcript);
    }
  }, [transcript]);

  return (
    <StyledSearchBar>
      <SearchBarInput
        value={searchQuery}
        placeholder="Search spotify song"
        onChange={handleSearchChange}
      />
      <SpeechButton
        className="speech-button"
        listening={listening}
        handleClick={handleSpeech}
      />
      <SearchButton
        className="search-button"
        handleClick={() => searchQuery && handleSearch(searchQuery)}
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
