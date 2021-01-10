import React from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";

const Button = styled.button`
  color: ${({ theme }) => theme.color.text};
`;
const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <div>
        <Button>asdf</Button>
      </div>
    </ThemeProvider>
  );
};

export { App };
