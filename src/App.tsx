import React from "react";
import { ThemeProvider } from "@emotion/react";
import { useInView } from "react-intersection-observer";

import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";
import { SearchForm } from "./components/SearchForm";
import { Results } from "./components/Results";
import { fakeData } from "./lib/data";
import { Header } from "./components/Header";
import { GlobalStyle } from "./components/GlobalStyle";

const App = () => {
  const [searcTerm, setSearchTerm] = React.useState("forritun");
  const [theme, setTheme] = React.useState("light");
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  React.useEffect(() => {}, []);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header
        title="Awesome Image Search"
        theme={theme}
        handleToggle={() => changeTheme()}
      />
      <main>
        <SearchForm
          onSubmit={(event) => {
            event.preventDefault();
            console.log("do stuff");
          }}
          searcTerm={searcTerm}
          setSearchTerm={setSearchTerm}
        />
        <Results searchResults={fakeData} />
      </main>
      <footer>fótur</footer>
    </ThemeProvider>
  );
};

export { App };
