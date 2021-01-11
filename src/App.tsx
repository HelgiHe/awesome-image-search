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
import { fetchData } from "./lib/api";

const App = () => {
  const [searcTerm, setSearchTerm] = React.useState("");
  const [theme, setTheme] = React.useState("light");
  const [startIndex, setStartIndex] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState([]);
  const [ref, inView] = useInView({ rootMargin: "0px 0px 400px 0px" });

  React.useEffect(() => {
    (async function fetchresults() {
      setLoading(true);
      const data = await fetchData(startIndex);
      setResults(data.items);
      setStartIndex(data.queries.nextPage[0].startIndex);
      setLoading(false);
    })();
  }, []);

  React.useEffect(() => {
    if (inView && results) {
      (async function fetchNextResults() {
        setLoading(true);
        const data = await fetchData(startIndex);
        setStartIndex(data.queries.nextPage[0].startIndex);
        const newResults = [...results, ...data.items];
        setResults(newResults);
        setLoading(false);
      })();
    }
  }, [inView]);
  console.log(results);
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
        <Results searchResults={results} />
      </main>
      <footer ref={ref}>fótur</footer>
    </ThemeProvider>
  );
};

export { App };
