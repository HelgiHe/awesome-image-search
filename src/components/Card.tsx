import React from "react";
import styled from "@emotion/styled";

const Card = ({ imageUrl }) => {
  return (
    <Wrapper>
      <StyledImage src={imageUrl} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const StyledImage = styled.img`
  width: 200px;
  height: 180px;
`;

export { Card };
