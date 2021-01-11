import styled from "@emotion/styled";
import React from "react";
import { Card } from "./Card";

const Results = ({ searchResults }) => {
  console.log(process.env.NODE_ENV);
  return (
    <ResultsContainer>
      {searchResults.items.map((item) => (
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
  grid-gap: ${({ theme }) => theme.spacing.single};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export { Results };
