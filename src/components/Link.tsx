import React from "react";
import styled from "@emotion/styled";

type LinkProps = {
  url: string;
  children?: JSX.Element;
};

const Link = ({ url, children }: LinkProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

const StyledLink = styled.a``;

export { Link };
