import styled from "@emotion/styled";
import React from "react";
import { SearchItem } from "src/util/types";
import { Card } from "./Card";

const Results = ({ searchResults }: { searchResults: SearchItem[] }) => {
  if (!searchResults.length) {
    return null;
  }
  return (
    <ResultsContainer>
      {searchResults.map((item, index) => (
        <Card
          key={`${item.link}${index}`}
          imageUrl={item.link}
          externalLink={item.image.contextLink}
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
