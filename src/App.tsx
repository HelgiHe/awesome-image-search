import React from "react";
import styled from "@emotion/styled";
import { ThemeProvider, Global, css } from "@emotion/react";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";
import { SearchForm } from "./components/SearchForm";
import { Results } from "./components/Results";
import { fakeData } from "../lib/data";
import { Switch } from "./components/Switch";

const Button = styled.button`
  color: ${({ theme }) => theme.color.text};
`;
const App = () => {
  const [searcTerm, setSearchTerm] = React.useState("forritun");
  return (
    <ThemeProvider theme={lightTheme}>
      <Global
        styles={css`
          h1,
          h2 {
            margin: 0px;
          }
        `}
      />
      <SearchForm
        onSubmit={(event) => {
          event.preventDefault();
          console.log("do stuff");
        }}
        searcTerm={searcTerm}
        setSearchTerm={setSearchTerm}
      />
      <Results searchResults={fakeData} />-{" "}
    </ThemeProvider>
  );
};

export { App };
