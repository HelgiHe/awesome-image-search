import React from "react";
import styled from "@emotion/styled";
import { Theme, useTheme } from "@emotion/react";
import { Sun, Moon } from "react-feather";
import { Switch } from "./Switch";

const Header = ({ title, selectedTheme, handleToggle }) => {
  const theme: Theme = useTheme();
  return (
    <StyledHeader>
      <h1>{title}</h1>
      <ThemeContainer>
        <Sun color={theme.color.text} />
        <Switch isOn={selectedTheme === "dark"} handleToggle={handleToggle} />
        <Moon color={theme.color.text} />
      </ThemeContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
`;

export { Header };
