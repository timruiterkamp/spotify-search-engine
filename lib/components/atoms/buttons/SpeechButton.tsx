import React from "react";
import { FiMic, FiX } from "react-icons/fi";
import styled from "styled-components";

interface SpeechButtonProps {
  handleClick: () => void;
  className?: string;
  listening: boolean;
}

interface StyledSpeechButtonProps {
  listening: boolean;
}

export const StyledSpeechButton = styled.button<StyledSpeechButtonProps>`
  width: 50px;
  height: 49.5px;
  border: 0;
  background-color: ${(props) => (props?.listening ? "tomato" : "#4a4a4a")};
  color: white;
  padding: 10px 20px;
  transition: 0.3s ease-in-out all;
  cursor: pointer;

  svg {
    font-size: 1.15rem;
    margin-left: -3px;
  }

  &:hover {
    background-color: ${(props) => (props?.listening ? "tomato" : "#1db954")};
  }
`;

const SpeechButton: React.FC<SpeechButtonProps> = ({
  handleClick,
  className,
  listening,
}) => {
  return (
    <StyledSpeechButton
      listening={listening}
      className={className}
      onClick={handleClick}
    >
      {!listening ? <FiMic /> : <FiX />}
    </StyledSpeechButton>
  );
};

export default SpeechButton;
