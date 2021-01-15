import React from "react";
import { ThemeProvider } from "@emotion/react";
import { useInView } from "react-intersection-observer";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";
import { SearchForm } from "./components/SearchForm";
import { Results } from "./components/Results";
import { Header } from "./components/Header";
import { GlobalStyle } from "./components/GlobalStyle";
import { fetchData } from "./util/api";
import { Loader } from "./components/Loader";
import { ErrorMsg } from "./components/ErrroMsg";
import { SearchItem, SearchResponse } from "./util/types";
import { useLocalStorage } from "./hooks/useLocalStorage";

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [startIndex, setStartIndex] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [searchItems, setSearchItems] = React.useState<SearchItem[]>([]);
  const [error, setError] = React.useState("");

  const [ref, inView] = useInView({ rootMargin: "0px 0px 300px 0px" });

  React.useEffect(() => {
    if (inView && searchItems.length && !loading) {
      (async function fetchNextResults() {
        setLoading(true);
        const data: SearchResponse = await fetchData(startIndex, searchTerm);
        if (data.queries.nextPage) {
          setStartIndex(data.queries.nextPage[0].startIndex);
        }
        if (Number(data.searchInformation.totalResults) > searchItems.length) {
          const newResults = [...searchItems, ...data.items];
          setSearchItems(newResults);
        }
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

  const resetSearch = () => {
    setSearchTerm("");
    setError("");
  };

  const onSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    if (!loading && setSearchTerm) {
      const data = await fetchData(startIndex, searchTerm);
      if (data.searchInformation?.totalResults > 0) {
        setSearchItems(data.items);
        if (data.queries.nextPage) {
          setStartIndex(data.queries.nextPage[0].startIndex);
        }
      } else if (Number(data.searchInformation?.totalResults) === 0) {
        setError("Engar niðurstöður fundust");
      } else {
        setError("Eitthvað fór úrskeiðis reyndu aftur eða prófaðu seinna");
      }
    }
    setLoading(false);
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
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          resetSearch={resetSearch}
        />
        <Results searchResults={searchItems} />
        {loading ? <Loader /> : null}
        {error ? <ErrorMsg message={error} /> : null}
      </main>
      <footer ref={ref}>
        <p>HH 2021</p>
      </footer>
    </ThemeProvider>
  );
};

export { App };
