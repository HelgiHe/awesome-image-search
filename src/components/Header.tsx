import React from "react";
import styled from "@emotion/styled";
import { Switch } from "./Switch";

const Header = ({ title, theme, handleToggle }) => {
  return (
    <StyledHeader>
      <h1>{title}</h1>
      <Switch isOn={theme === "dark"} handleToggle={handleToggle} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export { Header };
