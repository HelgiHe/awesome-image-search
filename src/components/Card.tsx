import React from "react";
import styled from "@emotion/styled";
import { ExternalLink } from "react-feather";
import { Link } from "./Link";

type CardProps = { imageUrl: string; link: string; title: string };

const Card = ({ imageUrl, link, title }: CardProps) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <StyledImage src={imageUrl} />
      <Link url={link}>
        <ExternalLink />
      </Link>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 1.1em;
`;

const StyledImage = styled.img`
  width: 100%;
`;

export { Card };
