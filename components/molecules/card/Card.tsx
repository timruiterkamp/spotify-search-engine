import React, { useState } from "react";
import styled from "styled-components";

type CardProps = {
  data?: any;
};

interface StyledCardProps {
  backgroundImage?: string;
  canHover?: boolean;
}

const StyledCard = styled.article<StyledCardProps>`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: tomato;
  transition: 0.5s ease-in-out;
  cursor: ${(props) => (props?.canHover ? "pointer" : "inherit")};
  background-image: url(${(props) => props?.backgroundImage});
  background-size: 100%;
  background-position: center center;
  position: relative;

  &:hover {
    background-size: 115%;
  }
`;

const StyledCardTitle = styled.h3`
  position: absolute;
  left: 10px;
  bottom: 20px;
  width: 100%;
  max-width: 200px;
  color: white;
`;

const StyledCardMeta = styled.footer`
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  position: absolute;
  left: 10px;
  bottom: 0;

  h4 {
    font-weight: bold;
    margin-right: 5px;
  }
`;

const Card: React.FC<CardProps> = ({ data }) => {
  const [playingFragment, setPlayingFragment] = useState<string | null>(null);

  const transformMilliseconds = (ms: number) => {
    const date = new Date(ms);
    return `${date.getMinutes()}:${date.getSeconds()}`;
  };

  const startAudioFragment = (audioFragment: string) => {
    // TODO: Add pause and reset options
    const audio = new Audio(audioFragment);

    if (playingFragment !== audioFragment) {
      setPlayingFragment(audioFragment);
      return audio.play();
    }
  };

  const cardContent = () => {
    if (data.__typename === "Track") {
      return (
        <StyledCard
          backgroundImage={data?.album?.images?.[0]?.url}
          onClick={() =>
            data?.preview_url && startAudioFragment(data?.preview_url)
          }
          canHover={!!data?.preview_url}
        >
          <header>
            <StyledCardTitle>{data?.name}</StyledCardTitle>
          </header>
          <StyledCardMeta>
            <h4>{data?.artists?.[0]?.name} -</h4>
            <h5>duration: {transformMilliseconds(data?.duration_ms)}</h5>
          </StyledCardMeta>
        </StyledCard>
      );
    } else {
      return (
        <StyledCard backgroundImage={data?.images?.[0]?.url}>
          <header>
            <StyledCardTitle>{data?.name}</StyledCardTitle>
          </header>
          <StyledCardMeta>
            <h4>{data?.genres?.[0]}</h4>
          </StyledCardMeta>
        </StyledCard>
      );
    }
  };
  return cardContent();
};

export default Card;
