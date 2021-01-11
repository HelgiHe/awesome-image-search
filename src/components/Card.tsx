import React from "react";
import styled from "@emotion/styled";
import { ExternalLink } from "react-feather";
import { Link } from "./Link";

type CardProps = {
  imageUrl: string;
  externalLink: string;
  title: string;
};

const Card = ({ imageUrl, externalLink, title }: CardProps) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Link url={imageUrl}>
        <StyledImage src={imageUrl} />
      </Link>
      <LinkContainer>
        <Link url={externalLink}>
          <ExternalLink />
        </Link>
      </LinkContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.single};
  width: 100%;
  background-color: ${({ theme }) => theme.color.background};
  border: ${({ theme }) => `1px solid ${theme.color.border}`};
  border-radius: 4px;
  box-shadow: 0 0.7px 0.9px rgba(0, 0, 0, 0.024),
    0 1.9px 2.4px rgba(0, 0, 0, 0.035), 0 4.5px 5.7px rgba(0, 0, 0, 0.046),
    0 15px 19px rgba(0, 0, 0, 0.07);
`;

const Title = styled.h2`
  font-size: 1.1em;
  height: 2.4em;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const LinkContainer = styled.div`
  align-self: flex-end;
`;

export { Card };
