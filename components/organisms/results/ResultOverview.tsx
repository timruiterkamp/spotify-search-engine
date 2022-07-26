import React, { useContext } from "react";
import { BallTriangle } from "react-loader-spinner";
import styled from "styled-components";
import { useSearchContext } from "../../context/SearchContext";
import Card from "../../molecules/card/Card";

type ResultOverviewProps = {
  data?: any;
};

const StyledOverview = styled.section`
  max-width: 80vw;
  margin: 0 auto;
`;

const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  row-gap: 1rem;
  column-gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: auto auto auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }
`;

const ResultOverview: React.FC<ResultOverviewProps> = ({ data }) => {
  const { spotifyResults, searchLoading } = useSearchContext();

  if (searchLoading) {
    return <BallTriangle color="#1db954" height={80} width={80} />;
  }

  const categories =
    spotifyResults &&
    Object?.keys(spotifyResults).filter(
      (category) => category !== "__typename"
    );

  const structuredData = categories?.map((category: string) => ({
    title: category,
    data: spotifyResults?.[category]?.items,
  }));

  return structuredData?.map((item: any) => (
    <StyledOverview key={item?.title}>
      <h3>{item.title.toUpperCase()}</h3>
      <StyledGrid>
        {item?.data?.map((results: any, index: number) => (
          <Card key={results?.name ?? index} data={results} />
        ))}
      </StyledGrid>
    </StyledOverview>
  ));
};

export default ResultOverview;
