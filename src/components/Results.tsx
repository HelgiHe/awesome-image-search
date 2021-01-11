import styled from "@emotion/styled";
import React from "react";
import { Card } from "./Card";

const Results = ({ searchResults }) => {
  return (
    <ResultsContainer>
      {searchResults.map((item) => (
        <Card
          key={item.link}
          imageUrl={item.link}
          link={item.image.contextLink}
          title={item.title}
        />
      ))}
    </ResultsContainer>
  );
};

const ResultsContainer = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.double};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export { Results };
