import React from "react";
import styled from "@emotion/styled";
import { ThemeProvider, Global, css } from "@emotion/react";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";
import { SearchForm } from "./components/SearchForm";
import { Results } from "./components/Results";
import { fakeData } from "./lib/data";

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
          h2,
          label {
            margin: 0px;
            font-family: -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu,
              Cantarell, Helvetica Neue;
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
