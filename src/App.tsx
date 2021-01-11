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
import { Loader } from "./components/Loader";

const App = () => {
  const [searcTerm, setSearchTerm] = React.useState("");
  const [theme, setTheme] = React.useState("light");
  const [startIndex, setStartIndex] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState([]);
  const [ref, inView] = useInView({ rootMargin: "0px 0px 400px 0px" });

  React.useEffect(() => {
    if (inView && results.length) {
      (async function fetchNextResults() {
        setLoading(true);
        const data = await fetchData(startIndex, searcTerm);
        setStartIndex(data.queries.nextPage[0].startIndex);
        const newResults = [...results, ...data.items];
        setResults(newResults);
        setLoading(false);
      })();
    }
  }, [inView]);
  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const onSearch = async (event) => {
    event.preventDefault();
    if (searcTerm.length >= 3) {
      setLoading(true);
      const data = await fetchData(startIndex, searcTerm);
      if (data.searchInformation.totalResults > 0) {
        setResults(data.items);
        setStartIndex(data.queries.nextPage[0].startIndex);
      }
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header
        title="Awesome Image Search"
        selectedTheme={theme}
        handleToggle={() => changeTheme()}
      />
      <main>
        <SearchForm
          onSubmit={(event) => {
            onSearch(event);
          }}
          searcTerm={searcTerm}
          setSearchTerm={setSearchTerm}
        />
        <Results searchResults={results} />
        {loading ? <Loader /> : null}
      </main>
      <footer ref={ref}>
        <p>HH 2021</p>
      </footer>
    </ThemeProvider>
  );
};

export { App };
